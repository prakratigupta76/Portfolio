// UI behaviour only. Project content lives in projects-data.js.
(function () {
    "use strict";
    var root = document.documentElement;
    root.classList.add("js");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- Projects: filters, featured card, grid ----
    var grid = document.getElementById("projectsGrid");
    var featured = document.getElementById("featured");
    var filters = document.getElementById("filters");

    function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html !== undefined) n.innerHTML = html; return n; }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
    function tags(tools) { return '<ul class="tags">' + tools.split(",").map(function (t) { return "<li>" + esc(t.trim()) + "</li>"; }).join("") + "</ul>"; }
    function link(p) {
        return p.url
            ? '<a class="plink" href="' + esc(p.url) + '" target="_blank" rel="noopener">View repository<span class="sr"> for ' + esc(p.title) + " (opens in new tab)</span> &rarr;</a>"
            : '<span class="note">' + esc(p.note || "Internal project") + "</span>";
    }

    function flink(p) {
        return '<div class="cta"><a class="btn btn-primary" href="' + esc(p.url) + '" target="_blank" rel="noopener">View on GitHub<span class="sr"> for ' + esc(p.title) + " (opens in new tab)</span></a></div>";
    }
    function bullets(p) {
        return p.bullets ? '<ul class="k">' + p.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "";
    }
    function render(filter) {
        grid.innerHTML = "";
        featured.innerHTML = "";
        var count = 0;
        PROJECTS.forEach(function (p) {
            if (filter !== "all" && p.category !== filter) return;
            count++;
            if (p.featured) {
                var f = el("article", "featured card reveal in");
                var shots = (p.screenshots || []).map(function (s) {
                    return '<figure><div class="frame"><img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" width="' + s.w + '" height="' + s.h + '" loading="lazy"></div><figcaption>' + esc(s.caption) + "</figcaption></figure>";
                }).join("");
                f.innerHTML = '<div><p class="kicker">Featured &middot; ' + esc(PROJECT_CATEGORIES[p.category]) + "</p><h3>" + esc(p.title) + "</h3><p>" + esc(p.description) + "</p>" + bullets(p) + tags(p.tools) + flink(p) + '</div><div class="shots">' + shots + "</div>";
                featured.appendChild(f);
                return;
            }
            var c = el("article", "project card reveal in");
            c.dataset.c = p.category;
            c.innerHTML = '<div class="tile" aria-hidden="true" style="--h:' + esc(p.hue) + '">' + esc(p.kind) + "</div><h3>" + esc(p.title) + "</h3><p>" + esc(p.description) + "</p>" + tags(p.tools) + '<div class="foot">' + link(p) + "</div>";
            grid.appendChild(c);
        });
        if (!count) grid.appendChild(el("p", "noscript", "No projects in this category."));
    }

    var cats = [["all", "All"]].concat(Object.keys(PROJECT_CATEGORIES).map(function (k) { return [k, PROJECT_CATEGORIES[k]]; }));
    cats.forEach(function (c, i) {
        var b = el("button", "", esc(c[1]));
        b.type = "button"; b.dataset.filter = c[0]; b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
        b.addEventListener("click", function () {
            filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
            render(c[0]);
        });
        filters.appendChild(b);
    });
    render("all");

    // ---- Theme toggle (dark default, preference saved) ----
    var tg = document.getElementById("darkToggle");
    function setTheme(t) {
        root.dataset.theme = t;
        var light = t === "light";
        tg.innerHTML = light ? "&#9728;" : "&#9790;";
        tg.setAttribute("aria-pressed", String(!light));
        tg.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
        var m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = light ? "#f6f4ef" : "#0a0c11";
    }
    setTheme(root.dataset.theme === "light" ? "light" : "dark");
    tg.addEventListener("click", function () {
        var n = root.dataset.theme === "light" ? "dark" : "light";
        setTheme(n);
        try { localStorage.setItem("theme", n); } catch (e) { /* storage unavailable */ }
    });

    // ---- Mobile menu ----
    var mb = document.getElementById("menuToggle"), nav = document.getElementById("nav");
    function closeMenu(focus) { nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); mb.setAttribute("aria-label", "Open menu"); if (focus) mb.focus(); }
    mb.addEventListener("click", function () {
        var o = nav.classList.toggle("open");
        mb.setAttribute("aria-expanded", String(o)); mb.setAttribute("aria-label", o ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { closeMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) closeMenu(true); });

    // ---- Scroll progress ----
    var bar = document.getElementById("progress");
    function progress() {
        var h = root.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ")";
    }
    window.addEventListener("scroll", progress, { passive: true });
    window.addEventListener("resize", progress);
    progress();

    // ---- Active section in nav + reveal on scroll ----
    if ("IntersectionObserver" in window) {
        var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
        var secs = links.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
        var so = new IntersectionObserver(function (es) {
            es.forEach(function (x) {
                if (!x.isIntersecting) return;
                links.forEach(function (a) {
                    if (a.getAttribute("href") === "#" + x.target.id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-40% 0px -55% 0px" });
        secs.forEach(function (s) { so.observe(s); });

        if (!reduce) {
            var ro = new IntersectionObserver(function (es) {
                es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); ro.unobserve(x.target); } });
            }, { threshold: 0.1 });
            document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { ro.observe(n); });
        } else {
            document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
        }
    } else {
        document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
    }
})();
