import React, { useState } from 'react';
import type { PredictionRequest, PredictionResponse } from '../types';
import { mlService } from '../services/mlService';

interface PredictionFormProps {
  onPredictionResult: (result: PredictionResponse) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onPredictionResult }) => {
  const [formData, setFormData] = useState<PredictionRequest>({
    feature1: 0,
    feature2: 0,
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent, isAdvanced: boolean = false) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = isAdvanced 
        ? await mlService.makeAdvancedPrediction(formData)
        : await mlService.makePrediction(formData);
      
      onPredictionResult(result);
    } catch (err) {
      setError('Failed to make prediction. Please check if the backend server is running.');
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'feature1' || name === 'feature2' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <div className="prediction-form">
      <h2>ML Prediction Input</h2>
      <form>
        <div className="form-group">
          <label htmlFor="feature1">Feature 1 (Numeric):</label>
          <input
            type="number"
            id="feature1"
            name="feature1"
            value={formData.feature1}
            onChange={handleInputChange}
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feature2">Feature 2 (Numeric):</label>
          <input
            type="number"
            id="feature2"
            name="feature2"
            value={formData.feature2}
            onChange={handleInputChange}
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description (Optional):</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            placeholder="Enter a description for this prediction..."
          />
        </div>

        {error && <div className="error">{error}</div>}

        <div className="button-group">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, false)}
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Predicting...' : 'Basic Prediction'}
          </button>
          
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, true)}
            disabled={loading}
            className="btn btn-secondary"
          >
            {loading ? 'Predicting...' : 'Advanced ML Prediction'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;