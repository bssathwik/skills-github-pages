package com.mlapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "predictions")
public class Prediction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "feature1")
    private Double feature1;
    
    @Column(name = "feature2")
    private Double feature2;
    
    @Column(name = "prediction_result")
    private Double predictionResult;
    
    @Column(name = "category")
    private String category;
    
    @Column(name = "confidence")
    private Double confidence;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    public Prediction() {
        this.createdAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public Double getFeature1() { return feature1; }
    public void setFeature1(Double feature1) { this.feature1 = feature1; }
    
    public Double getFeature2() { return feature2; }
    public void setFeature2(Double feature2) { this.feature2 = feature2; }
    
    public Double getPredictionResult() { return predictionResult; }
    public void setPredictionResult(Double predictionResult) { this.predictionResult = predictionResult; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public Double getConfidence() { return confidence; }
    public void setConfidence(Double confidence) { this.confidence = confidence; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}