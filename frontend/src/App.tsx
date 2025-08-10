import { useState } from 'react';
import './App.css';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import PredictionHistory from './components/PredictionHistory';
import StatusIndicator from './components/StatusIndicator';
import { PredictionResponse } from './types';

function App() {
  const [currentPrediction, setCurrentPrediction] = useState<PredictionResponse | null>(null);

  const handlePredictionResult = (result: PredictionResponse) => {
    setCurrentPrediction(result);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>ML-Based Java Fullstack Application</h1>
        <p>Machine Learning Prediction System with React Frontend & Java Spring Boot Backend</p>
        <StatusIndicator />
      </header>

      <main className="app-main">
        <div className="main-content">
          <div className="left-panel">
            <PredictionForm onPredictionResult={handlePredictionResult} />
          </div>
          
          <div className="right-panel">
            <PredictionResult result={currentPrediction} />
          </div>
        </div>

        <div className="history-section">
          <PredictionHistory />
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React + TypeScript (Frontend) and Java Spring Boot (Backend)</p>
        <p>ML capabilities powered by Apache Commons Math3</p>
      </footer>
    </div>
  );
}

export default App;
