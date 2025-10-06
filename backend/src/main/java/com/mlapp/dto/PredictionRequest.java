package com.mlapp.dto;

import jakarta.validation.constraints.NotNull;

public class PredictionRequest {
    @NotNull
    private Double feature1;
    
    @NotNull
    private Double feature2;
    
    private String description;
    
    public PredictionRequest() {}
    
    public PredictionRequest(Double feature1, Double feature2, String description) {
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.description = description;
    }
    
    public Double getFeature1() { return feature1; }
    public void setFeature1(Double feature1) { this.feature1 = feature1; }
    
    public Double getFeature2() { return feature2; }
    public void setFeature2(Double feature2) { this.feature2 = feature2; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}