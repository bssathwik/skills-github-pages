package com.mlapp.controller;

import com.mlapp.dto.PredictionRequest;
import com.mlapp.dto.PredictionResponse;
import com.mlapp.model.Prediction;
import com.mlapp.service.MLService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/ml")
@CrossOrigin(origins = "http://localhost:3000")
public class MLController {
    
    @Autowired
    private MLService mlService;
    
    @PostMapping("/predict")
    public ResponseEntity<PredictionResponse> predict(@Valid @RequestBody PredictionRequest request) {
        try {
            PredictionResponse response = mlService.makePrediction(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new PredictionResponse(0.0, "ERROR", 0.0, "Prediction failed: " + e.getMessage()));
        }
    }
    
    @PostMapping("/predict/advanced")
    public ResponseEntity<PredictionResponse> predictAdvanced(@Valid @RequestBody PredictionRequest request) {
        try {
            PredictionResponse response = mlService.makeAdvancedPrediction(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new PredictionResponse(0.0, "ERROR", 0.0, "Advanced prediction failed: " + e.getMessage()));
        }
    }
    
    @GetMapping("/predictions")
    public ResponseEntity<List<Prediction>> getAllPredictions() {
        try {
            List<Prediction> predictions = mlService.getAllPredictions();
            return ResponseEntity.ok(predictions);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("ML Backend is running!");
    }
}