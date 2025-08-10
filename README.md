# ML-Based Java Fullstack Web Application

A comprehensive **Machine Learning-based Java Fullstack Web Application** built with **React framework** and **Spring Boot**, featuring real-time ML predictions, interactive UI, and complete database integration.

## 🚀 Live Demo

- **GitHub Pages**: [https://bssathwik.github.io/skills-github-pages/](https://bssathwik.github.io/skills-github-pages/)
- **Local Backend**: http://localhost:8080 (when running)
- **Local Frontend**: http://localhost:5173 (when running)

## 🏗️ Architecture Overview

This application follows a modern fullstack architecture:

```
┌─────────────────┐    HTTP/REST API    ┌─────────────────┐
│   React Frontend │ ◄─────────────────► │  Spring Boot    │
│   (TypeScript)   │                     │   Backend       │
│                 │                     │                 │
│ • Vite Build    │                     │ • REST APIs     │
│ • Axios Client  │                     │ • ML Services   │
│ • Components    │                     │ • JPA/Hibernate │
└─────────────────┘                     └─────────────────┘
                                                   │
                                                   ▼
                                        ┌─────────────────┐
                                        │  H2 Database    │
                                        │  (In-Memory)    │
                                        │                 │
                                        │ • Predictions   │
                                        │ • History       │
                                        └─────────────────┘
```

## 🎯 Features

### 🧠 Machine Learning Capabilities
- **Linear Regression Model**: Basic prediction using weighted features
- **Advanced Sigmoid Classification**: Probability-based classification
- **Confidence Scoring**: Mathematical confidence levels (0-100%)
- **Category Classification**: HIGH/MEDIUM/LOW and POSITIVE/NEGATIVE predictions

### 🎨 Frontend Features
- **Modern React UI**: Built with TypeScript and Vite
- **Real-time Predictions**: Instant ML prediction results
- **Interactive Forms**: Input validation and error handling
- **Prediction History**: Track all predictions with timestamps
- **Status Monitoring**: Live backend connection status
- **Responsive Design**: Mobile-friendly interface

### 🔧 Backend Features
- **RESTful API**: Clean REST endpoints for all operations
- **Database Integration**: H2 in-memory database with JPA
- **CORS Configuration**: Cross-origin support for React frontend
- **Health Monitoring**: Backend health check endpoints
- **Validation**: Request validation with Spring Boot Validation

## 📊 Technology Stack

### Backend
- **Java 17**: Modern Java with OpenJDK
- **Spring Boot 3.1.5**: Enterprise-grade framework
- **Spring Data JPA**: Database abstraction layer
- **H2 Database**: In-memory database for development
- **Apache Commons Math3**: Mathematical computations for ML
- **Maven**: Dependency management and build tool

### Frontend
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Axios**: HTTP client for API calls
- **CSS Grid/Flexbox**: Modern responsive layout

### Development Tools
- **Maven**: Java build automation
- **npm**: Node.js package manager
- **Git**: Version control
- **VSCode**: Recommended IDE

## 🚀 Quick Start

### Prerequisites
- **Java 17+** - [Download OpenJDK](https://adoptium.net/)
- **Maven 3.6+** - [Install Maven](https://maven.apache.org/install.html)
- **Node.js 18+** - [Download Node.js](https://nodejs.org/)
- **Git** - [Install Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/bssathwik/skills-github-pages.git
cd skills-github-pages
```

### 2. Start the Backend
```bash
cd backend
mvn clean compile
mvn spring-boot:run
```
Backend will start on: **http://localhost:8080**

### 3. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will start on: **http://localhost:5173**

### 4. Access the Application
- Open your browser to http://localhost:5173
- The frontend will automatically connect to the backend
- Start making ML predictions!

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api/ml
```

### Endpoints

#### Health Check
```http
GET /api/ml/health
```
**Response**: `"ML Backend is running!"`

#### Basic Prediction
```http
POST /api/ml/predict
Content-Type: application/json

{
  "feature1": 5.0,
  "feature2": 3.2,
  "description": "Test prediction"
}
```

**Response**:
```json
{
  "prediction": 18.56,
  "category": "HIGH",
  "confidence": 1.0,
  "message": "High prediction value: 18.56. This indicates strong positive correlation."
}
```

#### Advanced Prediction (Sigmoid)
```http
POST /api/ml/predict/advanced
Content-Type: application/json

{
  "feature1": 2.5,
  "feature2": 1.8,
  "description": "Advanced ML prediction"
}
```

#### Get Prediction History
```http
GET /api/ml/predictions
```

**Response**: Array of prediction objects with timestamps

## 🧮 ML Models Explained

### 1. Linear Regression Model
```java
prediction = (feature1 × 2.5) + (feature2 × 1.8) + 0.3
```
- **Use case**: Continuous value prediction
- **Categories**: HIGH (>5.0), MEDIUM (0-5.0), LOW (<0)

### 2. Advanced Sigmoid Classification
```java
prediction = weights × features
probability = 1 / (1 + exp(-prediction))
```
- **Use case**: Binary classification with probability
- **Categories**: POSITIVE (>0.5), NEGATIVE (≤0.5)

## 🗂️ Project Structure

```
skills-github-pages/
├── backend/                          # Spring Boot Backend
│   ├── src/main/java/com/mlapp/
│   │   ├── MlBackendApplication.java # Main Spring Boot class
│   │   ├── controller/
│   │   │   └── MLController.java     # REST API endpoints
│   │   ├── service/
│   │   │   ├── MLService.java        # ML logic & business layer
│   │   │   └── PredictionRepository.java # Data access layer
│   │   ├── model/
│   │   │   └── Prediction.java       # JPA entity
│   │   └── dto/
│   │       ├── PredictionRequest.java # Request DTOs
│   │       └── PredictionResponse.java# Response DTOs
│   ├── src/main/resources/
│   │   └── application.properties    # Spring configuration
│   └── pom.xml                       # Maven dependencies
│
├── frontend/                         # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── PredictionForm.tsx    # Input form component
│   │   │   ├── PredictionResult.tsx  # Results display
│   │   │   ├── PredictionHistory.tsx # History table
│   │   │   └── StatusIndicator.tsx   # Backend status
│   │   ├── services/
│   │   │   └── mlService.ts          # API service layer
│   │   ├── types/
│   │   │   └── index.ts              # TypeScript interfaces
│   │   ├── App.tsx                   # Main React component
│   │   └── App.css                   # Styling
│   ├── package.json                  # npm dependencies
│   └── vite.config.ts                # Vite configuration
│
├── index.md                          # GitHub Pages homepage
├── README.md                         # This file
└── .gitignore                        # Git ignore rules
```

## 🔬 Development & Testing

### Backend Testing
```bash
cd backend
mvn test                              # Run unit tests
mvn spring-boot:run                   # Start development server
curl http://localhost:8080/api/ml/health # Test health endpoint
```

### Frontend Testing
```bash
cd frontend
npm run build                         # Build for production
npm run preview                       # Preview production build
npm run dev                           # Start development server
```

### API Testing with curl
```bash
# Test basic prediction
curl -X POST http://localhost:8080/api/ml/predict \
  -H "Content-Type: application/json" \
  -d '{"feature1": 5.0, "feature2": 3.2, "description": "Test"}'

# Test advanced prediction
curl -X POST http://localhost:8080/api/ml/predict/advanced \
  -H "Content-Type: application/json" \
  -d '{"feature1": 2.5, "feature2": 1.8, "description": "Advanced test"}'

# Get all predictions
curl http://localhost:8080/api/ml/predictions
```

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark color scheme
- **Gradient Backgrounds**: Beautiful gradient buttons and headers
- **Responsive Grid**: CSS Grid for perfect layouts
- **Form Validation**: Real-time input validation
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error messages
- **Status Indicators**: Real-time backend connectivity
- **Progress Bars**: Visual confidence level indicators

## 🚀 Deployment Options

### Local Development
- Use the quick start guide above
- Perfect for development and testing

### Production Deployment
1. **Backend**: Deploy Spring Boot jar to cloud platforms (AWS, Heroku, etc.)
2. **Frontend**: Build with `npm run build` and deploy to static hosting
3. **Database**: Switch to PostgreSQL or MySQL for production

### Docker Deployment (Future Enhancement)
```dockerfile
# Example Dockerfile structure
FROM openjdk:17 AS backend
# ... backend build steps

FROM node:18 AS frontend  
# ... frontend build steps
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is part of the GitHub Skills learning path and is available under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **GitHub Skills**: For the learning platform and guidance
- **Spring Framework**: For the excellent backend framework
- **React Team**: For the fantastic frontend library
- **Apache Commons**: For mathematical computation libraries

## 📞 Contact

- **GitHub**: [@bssathwik](https://github.com/bssathwik)
- **Project Link**: [https://github.com/bssathwik/skills-github-pages](https://github.com/bssathwik/skills-github-pages)

---

**Built with ❤️ using Java Spring Boot and React TypeScript**
