---
title: Welcome to my blog
---

# <h1> ML-Based Java Fullstack Application

## <h2><i> by Sathwik

Welcome to my GitHub Pages site featuring a complete **Machine Learning-based Java Fullstack Web Application** built with React framework!

## 🚀 Featured Application

### ML Prediction System
A sophisticated fullstack application demonstrating:
- **Backend**: Java Spring Boot with ML capabilities
- **Frontend**: React with TypeScript
- **Database**: H2 in-memory database
- **ML Models**: Linear regression and sigmoid classification

### 🔧 Features
- Real-time ML predictions with confidence scoring
- Interactive React UI with responsive design
- RESTful API endpoints for ML operations
- Prediction history tracking
- Backend health monitoring

### 📁 Project Structure
```
├── backend/          # Java Spring Boot Application
│   ├── src/main/java/com/mlapp/
│   │   ├── controller/   # REST Controllers
│   │   ├── service/      # ML Services & Repository
│   │   ├── model/        # JPA Entities
│   │   └── dto/          # Data Transfer Objects
│   └── pom.xml          # Maven Configuration
│
├── frontend/         # React TypeScript Application
│   ├── src/
│   │   ├── components/   # React Components
│   │   ├── services/     # API Services
│   │   └── types/        # TypeScript Types
│   └── package.json     # npm Configuration
│
└── GitHub Pages     # Jekyll Blog (this site)
```

### 🎯 Tech Stack
- **Backend**: Java 17, Spring Boot 3.1.5, Maven, H2 Database
- **Frontend**: React 18, TypeScript, Vite, Axios
- **ML**: Apache Commons Math3 for mathematical computations
- **Deployment**: Local development setup

### 📊 ML Capabilities
1. **Basic Linear Regression**: Simple prediction model using weighted features
2. **Advanced Classification**: Sigmoid-based classification with probability scoring
3. **Category Classification**: HIGH/MEDIUM/LOW or POSITIVE/NEGATIVE predictions
4. **Confidence Scoring**: Mathematical confidence levels for predictions

## 🏃‍♂️ Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- Node.js 18+ and npm

### Running the Application

#### 1. Start the Backend
```bash
cd backend
mvn spring-boot:run
```
Backend will be available at: http://localhost:8080

#### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available at: http://localhost:5173

### 📖 API Documentation

**Health Check**
```
GET /api/ml/health
```

**Make Prediction**
```
POST /api/ml/predict
Content-Type: application/json

{
  "feature1": 5.0,
  "feature2": 3.2,
  "description": "Test prediction"
}
```

**Advanced Prediction**
```
POST /api/ml/predict/advanced
```

**Get All Predictions**
```
GET /api/ml/predictions
```

## 📝 About This Project

This project showcases modern fullstack development practices:
- **Clean Architecture**: Separation of concerns with layered architecture
- **Type Safety**: TypeScript for frontend type safety
- **RESTful Design**: Well-designed API endpoints
- **Database Integration**: JPA/Hibernate with H2
- **Modern UI**: Responsive React components with CSS Grid/Flexbox
- **Real-time Updates**: Live backend status monitoring

Built as part of the GitHub Skills learning path, demonstrating practical application of machine learning in web development.

## 🔗 Links
- [GitHub Repository](https://github.com/bssathwik/skills-github-pages)
- [GitHub Pages Site](https://bssathwik.github.io/skills-github-pages/)

---

*This application combines the power of Java's enterprise capabilities with React's modern frontend architecture to create a complete ML-enabled web solution.*
