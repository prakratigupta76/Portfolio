// Single source for the project cards. To add a project, add one object here.
// Fields: title, category (eng | ml | analysis), kind + hue (tile label and colour), description, tools (comma-separated),
// url (or null), note (shown when url is null), featured, bullets, screenshots.
const PROJECT_CATEGORIES = {"eng": "Engineering", "ml": "Machine Learning", "analysis": "Data Analysis"};

const PROJECTS = [
  {
    "title": "AI-Based Real Estate Valuation System",
    "category": "ml",
    "description": "End-to-end supervised ML pipeline on the Ames Iowa Housing Dataset (1,460 records, 80 features) to predict residential property prices, served through a Streamlit app.",
    "url": "https://github.com/prakratigupta76/AI-Based_Real_Estate_Valuation_System",
    "tools": "Python, XGBoost, Scikit-learn, Streamlit, Pandas",
    "featured": true,
    "screenshots": [
      {
        "src": "assets/screenshots/real-estate-predictor.jpg",
        "alt": "Streamlit price predictor tab with property input fields",
        "caption": "Price predictor tab (real app screenshot)",
        "w": 1100,
        "h": 779
      },
      {
        "src": "assets/screenshots/real-estate-model-comparison.jpg",
        "alt": "Bar charts comparing RMSE, MAE and R-squared for the four models in the Streamlit model insights tab",
        "caption": "Model insights tab: four-model comparison (real app screenshot)",
        "w": 1100,
        "h": 363
      }
    ],
    "bullets": [
      "Compared Linear Regression, Decision Tree, Random Forest and XGBoost on RMSE, MAE and R².",
      "XGBoost performed best: R² ≈ 0.90 and RMSE ≈ $23,000 (repository README, typical 80/20 split).",
      "Streamlit app with three tabs: price predictor, model insights, market trends."
    ]
  },
  {
    "title": "iEMS - Infosys Email Management System",
    "category": "eng",
    "url": null,
    "note": "Internal project",
    "tools": "Python, PySide6/PyQt, MySQL Server, pyodbc, pywin32, PyInstaller, Pandas, NumPy",
    "description": "Team project (team of five): a desktop application that automates email allocation, tracking, and reporting for teams handling high email volume. Independently developed the Clarification, Reports, and My Profile modules end-to-end, including the front-end UI and the backend logic connecting to MySQL Server via pyodbc.",
    "kind": "Desktop application",
    "hue": "#5eead4"
  },
  {
    "title": "Car Price Forecasting - Predictive Modeling",
    "category": "ml",
    "description": "Conducted EDA on 50,000+ records and built ML models including Linear Regression, Random Forest, and SVM. Achieved 18% accuracy improvement through feature engineering.",
    "url": "https://github.com/prakratigupta76/CarDataAnalysisAssessment",
    "tools": "Python, Pandas, Scikit-learn, NumPy, Matplotlib, Seaborn",
    "kind": "Machine learning",
    "hue": "#7aa2ff"
  },
  {
    "title": "Heart Attack Risk Prediction",
    "category": "analysis",
    "description": "Analyzed a heart attack risk dataset primarily in Excel, with Python used to cross-check results and add a Logistic Regression model. Conducted statistical hypothesis testing using Chi-square and ANOVA tests. The Excel logistic model achieved an AUC of 0.822.",
    "url": "https://github.com/prakratigupta76/Heart-Attack-Analysis-Prediction-Dataset",
    "tools": "Excel, Python, Pandas, NumPy, SciPy",
    "kind": "Statistical analysis",
    "hue": "#fb7185"
  },
  {
    "title": "Email Deliverability Analysis",
    "category": "analysis",
    "description": "Analyzed SMTP and bounce logs to identify delivery issues. Found that one domain (centrum.sk) accounted for approximately 31% of May bounces, when the May bounce rate rose to 0.27%. Built KPI dashboards using Excel and Power Query.",
    "url": "https://github.com/prakratigupta76/Email_bonce_rate_analysis",
    "tools": "Excel, Power Query, Statistical Analysis",
    "kind": "Data analysis",
    "hue": "#5eead4"
  },
  {
    "title": "Cat vs Dog Classification",
    "category": "ml",
    "description": "Deep learning image classification model using Convolutional Neural Networks (CNN) to classify images as cats or dogs with high accuracy.",
    "url": "https://github.com/prakratigupta76/cat_vs_dog_classification",
    "tools": "Python, TensorFlow, Keras, CNN, Deep Learning",
    "kind": "Deep learning",
    "hue": "#c4b5fd"
  },
  {
    "title": "Balaji Store Sales - Excel Project",
    "category": "analysis",
    "description": "Comprehensive sales analysis and reporting project using Excel with pivot tables, dashboards, and data visualization for business insights.",
    "url": "https://github.com/prakratigupta76/Balaji_store_sales_Excel_Project",
    "tools": "Excel, Power Query, Pivot Tables, Data Visualization",
    "kind": "Excel dashboard",
    "hue": "#fbbf24"
  },
  {
    "title": "Calgary HTTP Assessment",
    "category": "analysis",
    "description": "Web traffic analysis and HTTP request assessment for Calgary datasets with performance metrics and statistical analysis.",
    "url": "https://github.com/prakratigupta76/calgary_http_assessment",
    "tools": "Python, Data Analysis, Statistical Analysis",
    "kind": "Log analysis",
    "hue": "#7aa2ff"
  }
];
