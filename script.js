const projects = [

    {
        title: "AI-Based Real Estate Valuation System",
        category: "ml",
        description: "ML pipeline predicting house prices using the Ames Iowa Housing Dataset (1,460 records, 80 features). Trained & compared Linear Regression, Decision Tree, Random Forest, and XGBoost — achieving R² of 0.905 with XGBoost. Features an interactive Streamlit app with price predictor, model insights, and market trends tabs.",
        url: "https://github.com/prakratigupta76/AI-Based_Real_Estate_Valuation_System",
        tools: "Python, XGBoost, Scikit-learn, Pandas, Streamlit, Seaborn",
        image: "real_estate"
    },
    {
        title: "Car Price Forecasting - Predictive Modeling",
        category: "ml",
        description: "Conducted EDA on 50,000+ records and built ML models including Linear Regression, Random Forest, and SVM. Achieved 18% accuracy improvement through feature engineering.",
        url: "https://github.com/prakratigupta76/CarDataAnalysisAssessment",
        tools: "Python, Pandas, Scikit-learn, NumPy, Matplotlib, Seaborn",
        image: "car_price"
    },
    {
        title: "Heart Attack Risk Prediction",
        category: "prediction",
        description: "Developed Logistic Regression classification model achieving AUC score of 0.822. Conducted statistical hypothesis testing using Chi-square and ANOVA tests.",
        url: "https://github.com/prakratigupta76/Heart-Attack-Analysis-Prediction-Dataset",
        tools: "Python, Pandas, NumPy, Scikit-learn",
        image: "heart_attack"
    },
    {
        title: "Email Deliverability Analysis",
        category: "analysis",
        description: "Analyzed SMTP and bounce logs to identify delivery issues. Reduced bounce rate by 31% through problem identification. Built KPI dashboards using Excel and Power Query.",
        url: "https://github.com/prakratigupta76/Email_bonce_rate_analysis",
        tools: "Excel, Power Query, Statistical Analysis",
        image: "email"
    },
    {
        title: "Cat vs Dog Classification",
        category: "ml",
        description: "Deep learning image classification model using Convolutional Neural Networks (CNN) to classify images as cats or dogs with high accuracy.",
        url: "https://github.com/prakratigupta76/cat_vs_dog_classification",
        tools: "Python, TensorFlow, Keras, CNN, Deep Learning",
        image: "cat_dog"
    },
    {
        title: "Balaji Store Sales - Excel Project",
        category: "analysis",
        description: "Comprehensive sales analysis and reporting project using Excel with pivot tables, dashboards, and data visualization for business insights.",
        url: "https://github.com/prakratigupta76/Balaji_store_sales_Excel_Project",
        tools: "Excel, Power Query, Pivot Tables, Data Visualization",
        image: "store_sales"
    },
    {
        title: "Calgary HTTP Assessment",
        category: "analysis",
        description: "Web traffic analysis and HTTP request assessment for Calgary datasets with performance metrics and statistical analysis.",
        url: "https://github.com/prakratigupta76/calgary_http_assessment",
        tools: "Python, Data Analysis, Statistical Analysis",
        image: "http_traffic"
    }
];

const grid = document.getElementById("projectsGrid");

const projectVisuals = {

    /* ── 1. AI Real Estate ── */
    real_estate: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="reBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#1a2744"/>
                        <stop offset="100%" style="stop-color:#2d4a8a"/>
                    </linearGradient>
                    <linearGradient id="reBar" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea"/>
                        <stop offset="100%" style="stop-color:#764ba2"/>
                    </linearGradient>
                    <linearGradient id="reAccent" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#f093fb"/>
                        <stop offset="100%" style="stop-color:#f5576c"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#reBg)"/>
                <line x1="60" y1="30" x2="60" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="60" y1="170" x2="380" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="60" y1="130" x2="380" y2="130" stroke="rgba(255,255,255,0.07)" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="60" y1="90"  x2="380" y2="90"  stroke="rgba(255,255,255,0.07)" stroke-width="1" stroke-dasharray="4,3"/>
                <line x1="60" y1="50"  x2="380" y2="50"  stroke="rgba(255,255,255,0.07)" stroke-width="1" stroke-dasharray="4,3"/>
                <rect x="80"  y="110" width="36" height="60"  rx="4" fill="url(#reBar)" opacity="0.7"/>
                <rect x="135" y="85"  width="36" height="85"  rx="4" fill="url(#reBar)" opacity="0.8"/>
                <rect x="190" y="60"  width="36" height="110" rx="4" fill="url(#reBar)" opacity="0.9"/>
                <rect x="245" y="40"  width="36" height="130" rx="4" fill="url(#reAccent)"/>
                <rect x="300" y="70"  width="36" height="100" rx="4" fill="url(#reBar)" opacity="0.85"/>
                <polyline points="98,105 153,80 208,56 263,36 318,67" fill="none" stroke="#00f5d4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="98"  cy="105" r="4" fill="#00f5d4"/>
                <circle cx="153" cy="80"  r="4" fill="#00f5d4"/>
                <circle cx="208" cy="56"  r="4" fill="#00f5d4"/>
                <circle cx="263" cy="36"  r="5" fill="#fff" stroke="#00f5d4" stroke-width="2"/>
                <circle cx="318" cy="67"  r="4" fill="#00f5d4"/>
                <g transform="translate(330,12)">
                    <polygon points="25,12 2,28 48,28" fill="#667eea" opacity="0.9"/>
                    <rect x="10" y="28" width="30" height="20" rx="2" fill="#764ba2" opacity="0.9"/>
                    <rect x="19" y="34" width="12" height="14" rx="1" fill="rgba(255,255,255,0.3)"/>
                </g>
                <text x="200" y="200" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.55)" font-weight="500">AI REAL ESTATE VALUATION  •  XGBOOST R²=0.905</text>
                <rect x="12" y="12" width="54" height="20" rx="10" fill="rgba(102,126,234,0.35)" stroke="rgba(102,126,234,0.6)" stroke-width="1"/>
                <text x="39" y="25" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#a5b4fc" font-weight="700">ML · AI</text>
            </svg>
        </div>`,

    /* ── 2. Car Price Forecasting ── */
    car_price: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="carBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#0f1923"/>
                        <stop offset="100%" style="stop-color:#1c2e40"/>
                    </linearGradient>
                    <linearGradient id="carGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea"/>
                        <stop offset="100%" style="stop-color:#764ba2"/>
                    </linearGradient>
                    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#1e3a5f"/>
                        <stop offset="100%" style="stop-color:#2a4a70"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#carBg)"/>
                <circle cx="30"  cy="20"  r="1.2" fill="rgba(255,255,255,0.6)"/>
                <circle cx="80"  cy="10"  r="1"   fill="rgba(255,255,255,0.5)"/>
                <circle cx="150" cy="25"  r="1.5" fill="rgba(255,255,255,0.7)"/>
                <circle cx="230" cy="8"   r="1"   fill="rgba(255,255,255,0.5)"/>
                <circle cx="310" cy="18"  r="1.2" fill="rgba(255,255,255,0.6)"/>
                <circle cx="370" cy="12"  r="1"   fill="rgba(255,255,255,0.5)"/>
                <rect x="0" y="155" width="400" height="65" fill="url(#roadGrad)"/>
                <rect x="0" y="153" width="400" height="4" fill="#2a5a8a" opacity="0.6"/>
                <rect x="30"  y="176" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="110" y="176" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="190" y="176" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="270" y="176" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="350" y="176" width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="110" y="118" width="180" height="40" rx="8" fill="url(#carGlow)"/>
                <path d="M145,118 Q160,88 200,85 Q240,82 255,118 Z" fill="#764ba2"/>
                <path d="M152,116 Q160,96 185,94 L185,116 Z" fill="rgba(255,255,255,0.25)"/>
                <path d="M190,116 L190,93 Q215,91 228,116 Z" fill="rgba(255,255,255,0.25)"/>
                <circle cx="150" cy="158" r="20" fill="#1a1a2e" stroke="#667eea" stroke-width="3"/>
                <circle cx="150" cy="158" r="10" fill="#667eea" opacity="0.5"/>
                <circle cx="150" cy="158" r="4"  fill="#fff" opacity="0.8"/>
                <circle cx="250" cy="158" r="20" fill="#1a1a2e" stroke="#667eea" stroke-width="3"/>
                <circle cx="250" cy="158" r="10" fill="#667eea" opacity="0.5"/>
                <circle cx="250" cy="158" r="4"  fill="#fff" opacity="0.8"/>
                <ellipse cx="296" cy="133" rx="18" ry="8" fill="#ffe066" opacity="0.25"/>
                <circle  cx="290" cy="133" r="6" fill="#ffe066" opacity="0.6"/>
                <line x1="10" y1="110" x2="100" y2="110" stroke="rgba(102,126,234,0.4)" stroke-width="2" stroke-linecap="round"/>
                <line x1="20" y1="122" x2="105" y2="122" stroke="rgba(102,126,234,0.25)" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="5"  y1="134" x2="108" y2="134" stroke="rgba(102,126,234,0.2)" stroke-width="1" stroke-linecap="round"/>
                <rect x="300" y="60" width="88" height="52" rx="10" fill="rgba(102,126,234,0.2)" stroke="rgba(102,126,234,0.5)" stroke-width="1.5"/>
                <text x="344" y="81"  text-anchor="middle" font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.6)" font-weight="500">PREDICTED</text>
                <text x="344" y="100" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#fff" font-weight="700">$24.5K</text>
                <text x="344" y="113" text-anchor="middle" font-family="Inter,sans-serif" font-size="8"  fill="#00f5d4" font-weight="600">+18% ACCURACY</text>
                <text x="200" y="212" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">CAR PRICE FORECASTING  •  50,000+ RECORDS</text>
            </svg>
        </div>`,

    /* ── 3. Heart Attack Risk ── */
    heart_attack: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="hBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#1a0a14"/>
                        <stop offset="100%" style="stop-color:#2d1022"/>
                    </linearGradient>
                    <linearGradient id="hPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#f5576c"/>
                        <stop offset="100%" style="stop-color:#f093fb"/>
                    </linearGradient>
                    <filter id="hglow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>
                <rect width="400" height="220" fill="url(#hBg)"/>
                <line x1="0"   y1="55"  x2="400" y2="55"  stroke="rgba(245,87,108,0.08)" stroke-width="1"/>
                <line x1="0"   y1="110" x2="400" y2="110" stroke="rgba(245,87,108,0.08)" stroke-width="1"/>
                <line x1="0"   y1="165" x2="400" y2="165" stroke="rgba(245,87,108,0.08)" stroke-width="1"/>
                <line x1="80"  y1="0"   x2="80"  y2="220" stroke="rgba(245,87,108,0.05)" stroke-width="1"/>
                <line x1="160" y1="0"   x2="160" y2="220" stroke="rgba(245,87,108,0.05)" stroke-width="1"/>
                <line x1="240" y1="0"   x2="240" y2="220" stroke="rgba(245,87,108,0.05)" stroke-width="1"/>
                <line x1="320" y1="0"   x2="320" y2="220" stroke="rgba(245,87,108,0.05)" stroke-width="1"/>
                <polyline
                    points="0,110 30,110 45,110 55,55 65,155 75,110 90,110 105,110 120,110 130,110 140,55 150,155 160,110 175,110 190,110 205,110 215,55 225,155 235,110 250,110 265,110 280,110 290,55 300,155 310,110 325,110 340,110 355,110 370,110 400,110"
                    fill="none" stroke="url(#hPulse)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#hglow)"/>
                <g transform="translate(170,18) scale(1.2)">
                    <path d="M25,10 C25,4 19,0 14,0 C9,0 5,3 5,8 C5,3 1,0 -4,0 C-9,0 -15,4 -15,10 C-15,18 -5,26 5,34 C15,26 25,18 25,10 Z" fill="#f5576c" opacity="0.85" filter="url(#hglow)"/>
                </g>
                <g transform="translate(300,30)">
                    <circle cx="0" cy="0" r="38" fill="none" stroke="rgba(245,87,108,0.2)" stroke-width="8"/>
                    <circle cx="0" cy="0" r="38" fill="none" stroke="url(#hPulse)" stroke-width="8"
                        stroke-dasharray="195 44" stroke-dashoffset="49" stroke-linecap="round"/>
                    <text x="0" y="-6"  text-anchor="middle" font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.6)">AUC</text>
                    <text x="0" y="10"  text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#fff" font-weight="700">0.822</text>
                </g>
                <rect x="12"  y="148" width="60" height="26" rx="13" fill="rgba(245,87,108,0.25)" stroke="rgba(245,87,108,0.5)" stroke-width="1"/>
                <text x="42"  y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#f5576c" font-weight="700">HIGH RISK</text>
                <rect x="82"  y="148" width="65" height="26" rx="13" fill="rgba(0,245,212,0.15)" stroke="rgba(0,245,212,0.4)" stroke-width="1"/>
                <text x="115" y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#00f5d4" font-weight="700">LOW RISK</text>
                <text x="200" y="208" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">HEART ATTACK RISK  •  LOGISTIC REGRESSION</text>
            </svg>
        </div>`,

    /* ── 4. Email Deliverability ── */
    email: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="emBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#0d1f2d"/>
                        <stop offset="100%" style="stop-color:#1a3040"/>
                    </linearGradient>
                    <linearGradient id="emBar1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#f5576c"/>
                        <stop offset="100%" style="stop-color:#c0392b"/>
                    </linearGradient>
                    <linearGradient id="emBar2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#00f5d4"/>
                        <stop offset="100%" style="stop-color:#00b4d8"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#emBg)"/>
                <g transform="translate(30,28)">
                    <rect x="0" y="0" width="70" height="50" rx="6" fill="none" stroke="rgba(102,126,234,0.5)" stroke-width="2"/>
                    <polyline points="0,0 35,30 70,0" fill="none" stroke="rgba(102,126,234,0.5)" stroke-width="2"/>
                    <line x1="0"  y1="50" x2="25" y2="28" stroke="rgba(102,126,234,0.35)" stroke-width="1.5"/>
                    <line x1="70" y1="50" x2="45" y2="28" stroke="rgba(102,126,234,0.35)" stroke-width="1.5"/>
                </g>
                <g transform="translate(120,14) rotate(-12)">
                    <rect width="34" height="24" rx="3" fill="rgba(102,126,234,0.2)" stroke="rgba(102,126,234,0.4)" stroke-width="1.2"/>
                    <polyline points="0,0 17,14 34,0" fill="none" stroke="rgba(102,126,234,0.4)" stroke-width="1.2"/>
                </g>
                <g transform="translate(175,8) rotate(8)">
                    <rect width="28" height="20" rx="3" fill="rgba(0,245,212,0.15)" stroke="rgba(0,245,212,0.35)" stroke-width="1"/>
                    <polyline points="0,0 14,11 28,0" fill="none" stroke="rgba(0,245,212,0.35)" stroke-width="1"/>
                </g>
                <text x="260" y="28" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="600">BOUNCE RATE</text>
                <rect x="260" y="38" width="120" height="22" rx="4" fill="url(#emBar1)" opacity="0.8"/>
                <text x="268" y="53" font-family="Inter,sans-serif" font-size="10" fill="#fff" font-weight="600">Before: 45%</text>
                <rect x="260" y="68" width="83"  height="22" rx="4" fill="url(#emBar2)" opacity="0.9"/>
                <text x="268" y="83" font-family="Inter,sans-serif" font-size="10" fill="#fff" font-weight="600">After: 31%</text>
                <rect x="270" y="100" width="100" height="30" rx="15" fill="rgba(0,245,212,0.2)" stroke="rgba(0,245,212,0.5)" stroke-width="1.5"/>
                <text x="320" y="119" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" fill="#00f5d4" font-weight="700">↓ 31% Bounce</text>
                <rect x="30"  y="108" width="80" height="52" rx="8" fill="rgba(102,126,234,0.15)" stroke="rgba(102,126,234,0.3)" stroke-width="1"/>
                <text x="70"  y="128" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.5)">DELIVERED</text>
                <text x="70"  y="147" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#667eea" font-weight="700">69%</text>
                <rect x="125" y="108" width="80" height="52" rx="8" fill="rgba(245,87,108,0.12)" stroke="rgba(245,87,108,0.3)" stroke-width="1"/>
                <text x="165" y="128" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.5)">BOUNCED</text>
                <text x="165" y="147" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#f5576c" font-weight="700">31%</text>
                <circle cx="55"  cy="85" r="4" fill="#667eea" opacity="0.8"/>
                <circle cx="90"  cy="75" r="3" fill="#667eea" opacity="0.6"/>
                <circle cx="125" cy="90" r="4" fill="#f5576c" opacity="0.8"/>
                <line x1="55" y1="85" x2="90"  y2="75" stroke="rgba(102,126,234,0.4)" stroke-width="1.5" stroke-dasharray="3,2"/>
                <line x1="90" y1="75" x2="125" y2="90" stroke="rgba(245,87,108,0.4)" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="200" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">EMAIL DELIVERABILITY  •  KPI DASHBOARD</text>
            </svg>
        </div>`,

    /* ── 5. Cat vs Dog ── */
    cat_dog: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="cdBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#0a1628"/>
                        <stop offset="100%" style="stop-color:#1a2840"/>
                    </linearGradient>
                    <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#f093fb"/>
                        <stop offset="100%" style="stop-color:#f5576c"/>
                    </linearGradient>
                    <linearGradient id="dogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea"/>
                        <stop offset="100%" style="stop-color:#00f5d4"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#cdBg)"/>
                <!-- Input layer -->
                <rect x="15" y="70" width="20" height="80" rx="3" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                <rect x="22" y="70" width="20" height="80" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <rect x="29" y="70" width="20" height="80" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <text x="27" y="165" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.4)">INPUT</text>
                <!-- Conv layers -->
                <rect x="68" y="80" width="16" height="60" rx="3" fill="rgba(102,126,234,0.4)" stroke="rgba(102,126,234,0.7)" stroke-width="1"/>
                <rect x="90" y="85" width="16" height="50" rx="3" fill="rgba(102,126,234,0.35)" stroke="rgba(102,126,234,0.6)" stroke-width="1"/>
                <text x="84" y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.4)">CONV</text>
                <rect x="118" y="90" width="14" height="40" rx="3" fill="rgba(118,75,162,0.5)" stroke="rgba(118,75,162,0.8)" stroke-width="1"/>
                <rect x="136" y="93" width="14" height="34" rx="3" fill="rgba(118,75,162,0.4)" stroke="rgba(118,75,162,0.7)" stroke-width="1"/>
                <text x="129" y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.4)">POOL</text>
                <!-- FC layers -->
                <rect x="165" y="95" width="10" height="30" rx="2" fill="rgba(240,147,251,0.5)" stroke="rgba(240,147,251,0.8)" stroke-width="1"/>
                <rect x="180" y="95" width="10" height="30" rx="2" fill="rgba(240,147,251,0.45)" stroke="rgba(240,147,251,0.7)" stroke-width="1"/>
                <rect x="195" y="95" width="10" height="30" rx="2" fill="rgba(240,147,251,0.4)" stroke="rgba(240,147,251,0.6)" stroke-width="1"/>
                <text x="182" y="158" text-anchor="middle" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.4)">FC</text>
                <!-- Connectors -->
                <line x1="49"  y1="110" x2="68"  y2="110" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="106" y1="110" x2="118" y2="110" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="150" y1="110" x2="165" y2="110" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <!-- Output predictions -->
                <g transform="translate(225,70)">
                    <rect x="0" y="0" width="155" height="34" rx="8" fill="rgba(240,147,251,0.15)" stroke="rgba(240,147,251,0.4)" stroke-width="1.5"/>
                    <circle cx="18" cy="17" r="12" fill="rgba(240,147,251,0.3)"/>
                    <polygon points="10,8 13,3 16,8" fill="#f093fb"/>
                    <polygon points="20,8 23,3 26,8" fill="#f093fb"/>
                    <circle cx="14" cy="17" r="2" fill="#fff" opacity="0.8"/>
                    <circle cx="22" cy="17" r="2" fill="#fff" opacity="0.8"/>
                    <path d="M14,22 Q18,25 22,22" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.7"/>
                    <text x="36" y="12"  font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.6)">CAT</text>
                    <rect x="36" y="18" width="110" height="9" rx="4" fill="rgba(255,255,255,0.08)"/>
                    <rect x="36" y="18" width="86"  height="9" rx="4" fill="url(#catGrad)" opacity="0.85"/>
                    <text x="148" y="27" text-anchor="end" font-family="Inter,sans-serif" font-size="9" fill="#f093fb" font-weight="700">78%</text>
                    <rect x="0" y="44" width="155" height="34" rx="8" fill="rgba(102,126,234,0.15)" stroke="rgba(102,126,234,0.35)" stroke-width="1.5"/>
                    <circle cx="18" cy="61" r="12" fill="rgba(102,126,234,0.3)"/>
                    <ellipse cx="18" cy="66" rx="8" ry="5" fill="rgba(102,126,234,0.5)"/>
                    <circle cx="13" cy="58" r="2.5" fill="#667eea" opacity="0.7"/>
                    <circle cx="23" cy="58" r="2.5" fill="#667eea" opacity="0.7"/>
                    <circle cx="14" cy="59" r="1.5" fill="#fff" opacity="0.8"/>
                    <circle cx="22" cy="59" r="1.5" fill="#fff" opacity="0.8"/>
                    <text x="36" y="56"  font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.6)">DOG</text>
                    <rect x="36" y="62" width="110" height="9" rx="4" fill="rgba(255,255,255,0.08)"/>
                    <rect x="36" y="62" width="24"  height="9" rx="4" fill="url(#dogGrad)" opacity="0.7"/>
                    <text x="148" y="71" text-anchor="end" font-family="Inter,sans-serif" font-size="9" fill="#667eea" font-weight="700">22%</text>
                </g>
                <text x="200" y="208" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">CAT vs DOG  •  CNN DEEP LEARNING</text>
            </svg>
        </div>`,

    /* ── 6. Balaji Store Sales ── */
    store_sales: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="ssBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#12200f"/>
                        <stop offset="100%" style="stop-color:#1e3520"/>
                    </linearGradient>
                    <linearGradient id="ssBar1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#56ab2f"/>
                        <stop offset="100%" style="stop-color:#a8e063"/>
                    </linearGradient>
                    <linearGradient id="ssBar2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea"/>
                        <stop offset="100%" style="stop-color:#764ba2"/>
                    </linearGradient>
                    <linearGradient id="ssBar3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#f7971e"/>
                        <stop offset="100%" style="stop-color:#ffd200"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#ssBg)"/>
                <rect x="20" y="20" width="100" height="50" rx="8" fill="rgba(86,171,47,0.2)" stroke="rgba(86,171,47,0.5)" stroke-width="1.5"/>
                <text x="70" y="42" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#a8e063" font-weight="700">BALAJI</text>
                <text x="70" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="9"  fill="rgba(255,255,255,0.5)">STORE ANALYTICS</text>
                <!-- Pie chart -->
                <g transform="translate(82,130)">
                    <circle cx="0" cy="0" r="21" fill="none" stroke="#56ab2f"  stroke-width="42" stroke-dasharray="52.8 79.2"   stroke-dashoffset="0"      opacity="0.85"/>
                    <circle cx="0" cy="0" r="21" fill="none" stroke="#667eea"  stroke-width="42" stroke-dasharray="39.6 92.4"   stroke-dashoffset="-52.8"  opacity="0.85"/>
                    <circle cx="0" cy="0" r="21" fill="none" stroke="#f7971e"  stroke-width="42" stroke-dasharray="26.4 105.6"  stroke-dashoffset="-92.4"  opacity="0.85"/>
                    <circle cx="0" cy="0" r="21" fill="none" stroke="#f093fb"  stroke-width="42" stroke-dasharray="13.2 118.8"  stroke-dashoffset="-118.8" opacity="0.85"/>
                    <circle cx="0" cy="0" r="12" fill="#12200f"/>
                    <text x="0" y="5" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.7)" font-weight="600">Sales</text>
                </g>
                <!-- Legend -->
                <rect x="155" y="92"  width="10" height="10" rx="2" fill="#56ab2f"/>
                <text x="170" y="102" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.6)">Clothing 40%</text>
                <rect x="155" y="110" width="10" height="10" rx="2" fill="#667eea"/>
                <text x="170" y="120" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.6)">Electronics 30%</text>
                <rect x="155" y="128" width="10" height="10" rx="2" fill="#f7971e"/>
                <text x="170" y="138" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.6)">Food 20%</text>
                <rect x="155" y="146" width="10" height="10" rx="2" fill="#f093fb"/>
                <text x="170" y="156" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.6)">Other 10%</text>
                <!-- Monthly bars -->
                <text x="320" y="88" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="rgba(255,255,255,0.5)">MONTHLY TREND</text>
                <rect x="255" y="148" width="18" height="40"  rx="3" fill="url(#ssBar1)" opacity="0.8"/>
                <rect x="278" y="132" width="18" height="56"  rx="3" fill="url(#ssBar1)" opacity="0.85"/>
                <rect x="301" y="118" width="18" height="70"  rx="3" fill="url(#ssBar2)" opacity="0.85"/>
                <rect x="324" y="100" width="18" height="88"  rx="3" fill="url(#ssBar2)" opacity="0.9"/>
                <rect x="347" y="110" width="18" height="78"  rx="3" fill="url(#ssBar3)" opacity="0.9"/>
                <text x="264" y="202" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">Q1</text>
                <text x="287" y="202" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">Q2</text>
                <text x="310" y="202" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">Q3</text>
                <text x="333" y="202" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">Q4</text>
                <text x="356" y="202" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">Q5</text>
                <text x="200" y="215" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">BALAJI STORE SALES  •  EXCEL DASHBOARD</text>
            </svg>
        </div>`,

    /* ── 7. Calgary HTTP Traffic ── */
    http_traffic: `
        <div class="project-visual-svg">
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <linearGradient id="htBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#0a0f1e"/>
                        <stop offset="100%" style="stop-color:#141c30"/>
                    </linearGradient>
                    <linearGradient id="htLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#667eea"/>
                        <stop offset="100%" style="stop-color:#00f5d4"/>
                    </linearGradient>
                </defs>
                <rect width="400" height="220" fill="url(#htBg)"/>
                <line x1="50" y1="20"  x2="50"  y2="170" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                <line x1="50" y1="170" x2="390" y2="170" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                <line x1="50" y1="130" x2="390" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="50" y1="90"  x2="390" y2="90"  stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="50" y1="50"  x2="390" y2="50"  stroke="rgba(255,255,255,0.04)" stroke-width="1" stroke-dasharray="3,3"/>
                <polygon
                    points="50,160 95,140 140,120 185,90 200,60 230,75 255,45 280,80 310,55 340,70 390,80 390,170 50,170"
                    fill="rgba(102,126,234,0.12)"/>
                <polyline
                    points="50,160 95,140 140,120 185,90 200,60 230,75 255,45 280,80 310,55 340,70 390,80"
                    fill="none" stroke="url(#htLine)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="50"  cy="160" r="3.5" fill="#667eea"/>
                <circle cx="140" cy="120" r="3.5" fill="#667eea"/>
                <circle cx="200" cy="60"  r="4"   fill="#fff" stroke="#667eea" stroke-width="2"/>
                <circle cx="255" cy="45"  r="5"   fill="#fff" stroke="#00f5d4" stroke-width="2"/>
                <circle cx="310" cy="55"  r="3.5" fill="#00f5d4"/>
                <circle cx="390" cy="80"  r="3.5" fill="#00f5d4"/>
                <line x1="255" y1="45" x2="255" y2="28" stroke="rgba(0,245,212,0.5)" stroke-width="1" stroke-dasharray="2,2"/>
                <rect x="215" y="15" width="80" height="18" rx="9" fill="rgba(0,245,212,0.2)" stroke="rgba(0,245,212,0.5)" stroke-width="1"/>
                <text x="255" y="28" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#00f5d4" font-weight="700">PEAK TRAFFIC</text>
                <rect x="14" y="88"  width="30" height="20" rx="4" fill="rgba(86,171,47,0.25)"  stroke="rgba(86,171,47,0.5)"  stroke-width="1"/>
                <text x="29" y="101" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#a8e063" font-weight="700">200</text>
                <rect x="14" y="116" width="30" height="20" rx="4" fill="rgba(247,151,30,0.25)" stroke="rgba(247,151,30,0.5)" stroke-width="1"/>
                <text x="29" y="129" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#ffd200" font-weight="700">301</text>
                <rect x="14" y="144" width="30" height="20" rx="4" fill="rgba(245,87,108,0.25)" stroke="rgba(245,87,108,0.5)" stroke-width="1"/>
                <text x="29" y="157" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#f5576c" font-weight="700">404</text>
                <text x="46" y="52"  text-anchor="end" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">30K</text>
                <text x="46" y="92"  text-anchor="end" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">20K</text>
                <text x="46" y="132" text-anchor="end" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">10K</text>
                <text x="46" y="172" text-anchor="end" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.3)">0</text>
                <text x="200" y="210" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.5)" font-weight="500">CALGARY HTTP TRAFFIC  •  WEB ANALYSIS</text>
            </svg>
        </div>`
};

function getProjectVisual(imageKey) {
    return projectVisuals[imageKey] || `<div class="project-placeholder">${imageKey.toUpperCase()}</div>`;
}

function loadProjects(filter = "all") {
    grid.innerHTML = "";
    let projectCount = 0;

    projects.forEach((project, index) => {
        if (filter === "all" || project.category === filter) {
            projectCount++;
            const projectEl = document.createElement("div");
            projectEl.className = "project";
            projectEl.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;

            const visualHtml = project.image
                ? getProjectVisual(project.image)
                : `<div class="project-placeholder">${project.category.toUpperCase()}</div>`;

            projectEl.innerHTML = `
                <a href="${project.url}" target="_blank" class="project-link">
                    ${visualHtml}
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

// Dark/Light mode toggle — default is DARK, toggle adds 'light' class
const darkToggle = document.getElementById("darkToggle");
const isLight = localStorage.getItem("lightMode") === "true";

if (isLight) {
    document.body.classList.add("light");
    darkToggle.textContent = "🌙";
} else {
    darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isNowLight = document.body.classList.contains("light");
    localStorage.setItem("lightMode", isNowLight);
    darkToggle.textContent = isNowLight ? "🌙" : "☀️";
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // stagger children if it's a grid
            const children = entry.target.querySelectorAll('.skill-category, .education-card, .achievement-card');
            if (children.length > 0) {
                children.forEach((child, i) => {
                    setTimeout(() => child.classList.add('visible'), i * 80);
                });
            }
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
});

// Also apply reveal to individual skill/education/achievement cards
document.querySelectorAll('.skill-category, .education-card, .achievement-card, .timeline-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});