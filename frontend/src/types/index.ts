export interface PredictionRequest {
  feature1: number;
  feature2: number;
  description?: string;
}

export interface PredictionResponse {
  prediction: number;
  category: string;
  confidence: number;
  message: string;
}

export interface Prediction {
  id: number;
  feature1: number;
  feature2: number;
  predictionResult: number;
  category: string;
  confidence: number;
  description: string;
  createdAt: string;
}