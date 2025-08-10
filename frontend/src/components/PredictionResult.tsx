import React from 'react';
import type { PredictionResponse } from '../types';

interface PredictionResultProps {
  result: PredictionResponse | null;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="prediction-result placeholder">
        <h3>Prediction Result</h3>
        <p>Enter values and click predict to see the result here.</p>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category.toUpperCase()) {
      case 'HIGH':
      case 'POSITIVE':
        return '#4CAF50'; // Green
      case 'MEDIUM':
        return '#FF9800'; // Orange
      case 'LOW':
      case 'NEGATIVE':
        return '#F44336'; // Red
      default:
        return '#2196F3'; // Blue
    }
  };

  const formatNumber = (num: number, decimals: number = 4) => {
    return num.toFixed(decimals);
  };

  return (
    <div className="prediction-result">
      <h3>Prediction Result</h3>
      
      <div className="result-card">
        <div className="result-header">
          <span 
            className="category-badge"
            style={{ backgroundColor: getCategoryColor(result.category) }}
          >
            {result.category}
          </span>
          <span className="confidence">
            Confidence: {formatNumber(result.confidence * 100, 1)}%
          </span>
        </div>
        
        <div className="result-body">
          <div className="prediction-value">
            <label>Prediction Value:</label>
            <span className="value">{formatNumber(result.prediction)}</span>
          </div>
          
          <div className="confidence-bar">
            <label>Confidence Level:</label>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${result.confidence * 100}%`,
                  backgroundColor: getCategoryColor(result.category)
                }}
              />
            </div>
          </div>
          
          <div className="message">
            <label>Analysis:</label>
            <p>{result.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;