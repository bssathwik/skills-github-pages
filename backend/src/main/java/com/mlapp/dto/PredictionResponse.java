package com.mlapp.dto;

public class PredictionResponse {
    private Double prediction;
    private String category;
    private Double confidence;
    private String message;
    
    public PredictionResponse() {}
    
    public PredictionResponse(Double prediction, String category, Double confidence, String message) {
        this.prediction = prediction;
        this.category = category;
        this.confidence = confidence;
        this.message = message;
    }
    
    public Double getPrediction() { return prediction; }
    public void setPrediction(Double prediction) { this.prediction = prediction; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public Double getConfidence() { return confidence; }
    public void setConfidence(Double confidence) { this.confidence = confidence; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}