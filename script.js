const projects = [
    
    {
        title: "Car Price Forecasting - Predictive Modeling",
        category: "ml",
        description: "Conducted EDA on 50,000+ records and built ML models including Linear Regression, Random Forest, and SVM. Achieved 18% accuracy improvement through feature engineering.",
        url: "https://github.com/prakratigupta76/CarDataAnalysisAssessment",
        tools: "Python, Pandas, Scikit-learn, NumPy, Matplotlib, Seaborn"
    },
    {
        title: "Heart Attack Risk Prediction",
        category: "prediction",
        description: "Developed Logistic Regression classification model achieving AUC score of 0.822. Conducted statistical hypothesis testing using Chi-square and ANOVA tests.",
        url: "https://github.com/prakratigupta76/Heart-Attack-Analysis-Prediction-Dataset",
        tools: "Python, Pandas, NumPy, Scikit-learn"
    },
    {
        title: "Email Deliverability Analysis",
        category: "analysis",
        description: "Analyzed SMTP and bounce logs to identify delivery issues. Reduced bounce rate by 31% through problem identification. Built KPI dashboards using Excel and Power Query.",
        url: "https://github.com/prakratigupta76/Email_bonce_rate_analysis",
        tools: "Excel, Power Query, Statistical Analysis"
    },
    {
        title: "Cat vs Dog Classification",
        category: "ml",
        description: "Deep learning image classification model using Convolutional Neural Networks (CNN) to classify images as cats or dogs with high accuracy.",
        url: "https://github.com/prakratigupta76/cat_vs_dog_classification",
        tools: "Python, TensorFlow, Keras, CNN, Deep Learning"
    },
    {
        title: "Balaji Store Sales - Excel Project",
        category: "analysis",
        description: "Comprehensive sales analysis and reporting project using Excel with pivot tables, dashboards, and data visualization for business insights.",
        url: "https://github.com/prakratigupta76/Balaji_store_sales_Excel_Project",
        tools: "Excel, Power Query, Pivot Tables, Data Visualization"
    },
    {
        title: "Calgary HTTP Assessment",
        category: "analysis",
        description: "Web traffic analysis and HTTP request assessment for Calgary datasets with performance metrics and statistical analysis.",
        url: "https://github.com/prakratigupta76/calgary_http_assessment",
        tools: "Python, Data Analysis, Statistical Analysis"
    }
];

const grid = document.getElementById("projectsGrid");

function loadProjects(filter = "all") {
    grid.innerHTML = "";
    let projectCount = 0;

    projects.forEach((project, index) => {
        if (filter === "all" || project.category === filter) {
            projectCount++;
            const projectEl = document.createElement("div");
            projectEl.className = "project";
            projectEl.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
            
            projectEl.innerHTML = `
                <a href="${project.url}" target="_blank" class="project-link">
                    <div class="project-placeholder">${project.category.toUpperCase()}</div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <span class="tools">🛠️ ${project.tools}</span>
                    </div>
                </a>
            `;
            grid.appendChild(projectEl);
        }
    });

    if (projectCount === 0) {
        grid.innerHTML = '<div style="text-align:center; grid-column: 1/-1; padding: 40px;">No projects found in this category.</div>';
    }
}

loadProjects("all");

// Filter functionality
document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        loadProjects(button.dataset.filter);
    });
});

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
const isDarkMode = localStorage.getItem("darkMode") === "true";

if (isDarkMode) {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    darkToggle.textContent = isDark ? "☀️" : "🌙";
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});


