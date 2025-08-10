package com.mlapp.service;

import com.mlapp.dto.PredictionRequest;
import com.mlapp.dto.PredictionResponse;
import com.mlapp.model.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PredictionRepository extends JpaRepository<Prediction, Long> {
}