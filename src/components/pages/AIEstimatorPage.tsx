import React from 'react';
import AIEstimator from '../AIEstimator';

interface AIEstimatorPageProps {
  onNavigate: (page: string) => void;
}

export default function AIEstimatorPage({ onNavigate }: AIEstimatorPageProps) {
  return (
    <div className="pt-16">
      <AIEstimator onNavigate={onNavigate} />
    </div>
  );
}