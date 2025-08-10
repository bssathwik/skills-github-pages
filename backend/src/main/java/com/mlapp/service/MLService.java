package com.mlapp.service;

import com.mlapp.dto.PredictionRequest;
import com.mlapp.dto.PredictionResponse;
import com.mlapp.model.Prediction;
import org.apache.commons.math3.linear.RealMatrix;
import org.apache.commons.math3.linear.Array2DRowRealMatrix;
import org.apache.commons.math3.linear.RealVector;
import org.apache.commons.math3.linear.ArrayRealVector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MLService {
    
    @Autowired
    private PredictionRepository predictionRepository;
    
    // Simple linear regression coefficients (pre-trained for demo)
    private final double[] weights = {2.5, 1.8, 0.3}; // [feature1_weight, feature2_weight, bias]
    
    public PredictionResponse makePrediction(PredictionRequest request) {
        // Simple linear regression: y = w1*x1 + w2*x2 + bias
        double prediction = weights[0] * request.getFeature1() + 
                           weights[1] * request.getFeature2() + 
                           weights[2];
        
        // Classify based on prediction value
        String category = classifyPrediction(prediction);
        
        // Calculate mock confidence (normalized prediction value)
        double confidence = Math.min(Math.abs(prediction) / 10.0, 1.0);
        
        // Create message based on category
        String message = generateMessage(category, prediction);
        
        // Save prediction to database
        Prediction predictionEntity = new Prediction();
        predictionEntity.setFeature1(request.getFeature1());
        predictionEntity.setFeature2(request.getFeature2());
        predictionEntity.setPredictionResult(prediction);
        predictionEntity.setCategory(category);
        predictionEntity.setConfidence(confidence);
        predictionEntity.setDescription(request.getDescription());
        
        predictionRepository.save(predictionEntity);
        
        return new PredictionResponse(prediction, category, confidence, message);
    }
    
    public List<Prediction> getAllPredictions() {
        return predictionRepository.findAll();
    }
    
    private String classifyPrediction(double prediction) {
        if (prediction > 5.0) {
            return "HIGH";
        } else if (prediction > 0.0) {
            return "MEDIUM";
        } else {
            return "LOW";
        }
    }
    
    private String generateMessage(String category, double prediction) {
        switch (category) {
            case "HIGH":
                return String.format("High prediction value: %.2f. This indicates strong positive correlation.", prediction);
            case "MEDIUM":
                return String.format("Medium prediction value: %.2f. This shows moderate correlation.", prediction);
            case "LOW":
                return String.format("Low prediction value: %.2f. This suggests weak or negative correlation.", prediction);
            default:
                return "Prediction completed.";
        }
    }
    
    // Advanced ML function using Apache Commons Math
    public PredictionResponse makeAdvancedPrediction(PredictionRequest request) {
        // Create feature matrix
        double[][] features = {{request.getFeature1(), request.getFeature2(), 1.0}};
        RealMatrix featureMatrix = new Array2DRowRealMatrix(features);
        
        // Weight vector
        double[] weightArray = {weights[0], weights[1], weights[2]};
        RealVector weightVector = new ArrayRealVector(weightArray);
        
        // Matrix multiplication for prediction
        double prediction = featureMatrix.getRowVector(0).dotProduct(weightVector);
        
        // Apply sigmoid function for classification probability
        double sigmoidOutput = 1.0 / (1.0 + Math.exp(-prediction));
        
        String category = sigmoidOutput > 0.5 ? "POSITIVE" : "NEGATIVE";
        
        String message = String.format("Advanced ML prediction: %.4f (Sigmoid: %.4f)", 
                                      prediction, sigmoidOutput);
        
        // Save to database
        Prediction predictionEntity = new Prediction();
        predictionEntity.setFeature1(request.getFeature1());
        predictionEntity.setFeature2(request.getFeature2());
        predictionEntity.setPredictionResult(prediction);
        predictionEntity.setCategory(category);
        predictionEntity.setConfidence(sigmoidOutput);
        predictionEntity.setDescription("Advanced ML: " + request.getDescription());
        
        predictionRepository.save(predictionEntity);
        
        return new PredictionResponse(prediction, category, sigmoidOutput, message);
    }
}