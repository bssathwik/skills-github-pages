import React, { useState, useEffect } from 'react';
import { Prediction } from '../types';
import { mlService } from '../services/mlService';

const PredictionHistory: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await mlService.getAllPredictions();
      setPredictions(data);
    } catch (err) {
      setError('Failed to fetch prediction history');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatNumber = (num: number, decimals: number = 3) => {
    return num.toFixed(decimals);
  };

  if (loading) {
    return <div className="prediction-history loading">Loading history...</div>;
  }

  if (error) {
    return (
      <div className="prediction-history error">
        <p>{error}</p>
        <button onClick={fetchPredictions} className="btn btn-primary">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="prediction-history">
      <div className="history-header">
        <h3>Prediction History</h3>
        <button onClick={fetchPredictions} className="btn btn-small">
          Refresh
        </button>
      </div>

      {predictions.length === 0 ? (
        <p className="no-data">No predictions yet. Make your first prediction above!</p>
      ) : (
        <div className="history-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Feature 1</th>
                <th>Feature 2</th>
                <th>Prediction</th>
                <th>Category</th>
                <th>Confidence</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((prediction) => (
                <tr key={prediction.id}>
                  <td>{formatDate(prediction.createdAt)}</td>
                  <td>{formatNumber(prediction.feature1)}</td>
                  <td>{formatNumber(prediction.feature2)}</td>
                  <td>{formatNumber(prediction.predictionResult)}</td>
                  <td>
                    <span className={`category-tag ${prediction.category.toLowerCase()}`}>
                      {prediction.category}
                    </span>
                  </td>
                  <td>{formatNumber(prediction.confidence * 100, 1)}%</td>
                  <td title={prediction.description}>
                    {prediction.description.length > 30
                      ? `${prediction.description.substring(0, 30)}...`
                      : prediction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PredictionHistory;