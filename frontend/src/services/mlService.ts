import axios from 'axios';
import type { PredictionRequest, PredictionResponse, Prediction } from '../types';

const API_BASE_URL = 'http://localhost:8080/api/ml';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const mlService = {
  // Make a basic prediction
  makePrediction: async (request: PredictionRequest): Promise<PredictionResponse> => {
    const response = await api.post<PredictionResponse>('/predict', request);
    return response.data;
  },

  // Make an advanced prediction
  makeAdvancedPrediction: async (request: PredictionRequest): Promise<PredictionResponse> => {
    const response = await api.post<PredictionResponse>('/predict/advanced', request);
    return response.data;
  },

  // Get all predictions
  getAllPredictions: async (): Promise<Prediction[]> => {
    const response = await api.get<Prediction[]>('/predictions');
    return response.data;
  },

  // Check backend health
  checkHealth: async (): Promise<string> => {
    const response = await api.get<string>('/health');
    return response.data;
  },
};