import React, { useState, useEffect } from 'react';
import { mlService } from '../services/mlService';

const StatusIndicator: React.FC = () => {
  const [status, setStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [message, setMessage] = useState('Connecting to backend...');

  const checkBackendHealth = async () => {
    try {
      setStatus('connecting');
      setMessage('Checking backend connection...');
      
      const health = await mlService.checkHealth();
      setStatus('connected');
      setMessage(health);
    } catch (error) {
      setStatus('error');
      setMessage('Backend server is not reachable. Please ensure the Java backend is running on port 8080.');
    }
  };

  useEffect(() => {
    checkBackendHealth();
    
    // Check every 30 seconds
    const interval = setInterval(checkBackendHealth, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'connected':
        return '#4CAF50'; // Green
      case 'error':
        return '#F44336'; // Red
      default:
        return '#FF9800'; // Orange
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'connected':
        return '✓';
      case 'error':
        return '✗';
      default:
        return '...';
    }
  };

  return (
    <div className="status-indicator">
      <div 
        className={`status-badge ${status}`}
        style={{ borderColor: getStatusColor() }}
      >
        <span className="status-icon" style={{ color: getStatusColor() }}>
          {getStatusIcon()}
        </span>
        <span className="status-text">{message}</span>
        <button 
          onClick={checkBackendHealth}
          className="status-refresh"
          title="Refresh connection"
        >
          ↻
        </button>
      </div>
    </div>
  );
};

export default StatusIndicator;