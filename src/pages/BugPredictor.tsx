import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bug, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  FileText,
  Clock,
  Zap,
  Shield,
  Target,
  Brain
} from 'lucide-react';

export function BugPredictor() {
  const [selectedFile, setSelectedFile] = useState(null);

  const predictions = [
    {
      id: 1,
      file: 'src/auth/login.js',
      riskLevel: 'high',
      confidence: 89,
      issues: [
        'Potential null pointer exception on line 45',
        'Missing input validation for email field',
        'Race condition in async authentication flow'
      ],
      complexity: 8.2,
      lastModified: '2 hours ago',
      author: 'Mike Johnson'
    },
    {
      id: 2,
      file: 'src/api/payments.js',
      riskLevel: 'medium',
      confidence: 76,
      issues: [
        'Insufficient error handling for payment failures',
        'Potential memory leak in webhook processing'
      ],
      complexity: 6.5,
      lastModified: '1 day ago',
      author: 'Sarah Chen'
    },
    {
      id: 3,
      file: 'src/utils/validation.js',
      riskLevel: 'low',
      confidence: 92,
      issues: [
        'Consider adding more comprehensive email regex'
      ],
      complexity: 3.1,
      lastModified: '3 days ago',
      author: 'Alex Rivera'
    },
    {
      id: 4,
      file: 'src/components/Dashboard.jsx',
      riskLevel: 'high',
      confidence: 84,
      issues: [
        'State update after component unmount',
        'Missing error boundaries for child components',
        'Potential infinite re-render loop'
      ],
      complexity: 7.8,
      lastModified: '5 hours ago',
      author: 'Emma Davis'
    }
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskIcon = (level) => {
    switch (level) {
      case 'high': return <AlertTriangle className="w-5 h-5" />;
      case 'medium': return <Clock className="w-5 h-5" />;
      case 'low': return <CheckCircle className="w-5 h-5" />;
      default: return <Bug className="w-5 h-5" />;
    }
  };

  const stats = [
    {
      name: 'Files Analyzed',
      value: '1,247',
      change: '+23',
      changeType: 'positive',
      icon: FileText,
    },
    {
      name: 'Bugs Prevented',
      value: '89',
      change: '+12',
      changeType: 'positive',
      icon: Shield,
    },
    {
      name: 'Accuracy Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Target,
    },
    {
      name: 'High Risk Files',
      value: '8',
      change: '-3',
      changeType: 'positive',
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Bug Predictor</h1>
          <p className="text-gray-600 mt-1">Proactive bug detection using machine learning analysis</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
            Configure Model
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Analyze Codebase
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">this week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Model Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI Model Status</h3>
              <p className="text-purple-100">Advanced neural network trained on 50M+ code samples</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">94.2%</div>
            <div className="text-purple-100 text-sm">Accuracy Rate</div>
          </div>
        </div>
      </motion.div>

      {/* Predictions List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Risk Predictions</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-600">High Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Medium Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Low Risk</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => setSelectedFile(prediction)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`flex items-center px-3 py-1 rounded-full border ${getRiskColor(prediction.riskLevel)}`}>
                      {getRiskIcon(prediction.riskLevel)}
                      <span className="ml-2 text-sm font-medium capitalize">{prediction.riskLevel} Risk</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {prediction.confidence}% confidence
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{prediction.file}</h4>
                  
                  <div className="space-y-2 mb-4">
                    {prediction.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Complexity: {prediction.complexity}/10</span>
                    <span>Modified: {prediction.lastModified}</span>
                    <span>Author: {prediction.author}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 ml-6">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">Risk Score</div>
                    <div className="text-2xl font-bold text-gray-900">{prediction.confidence}</div>
                  </div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    prediction.riskLevel === 'high' ? 'bg-red-100' :
                    prediction.riskLevel === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      prediction.riskLevel === 'high' ? 'bg-red-500' :
                      prediction.riskLevel === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}>
                      {getRiskIcon(prediction.riskLevel)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">How AI Bug Prediction Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Code Analysis</h4>
            <p className="text-gray-600">
              Advanced static analysis examines code structure, complexity, and patterns to identify potential issues.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">ML Prediction</h4>
            <p className="text-gray-600">
              Machine learning models trained on millions of code samples predict bug likelihood with high accuracy.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Proactive Prevention</h4>
            <p className="text-gray-600">
              Get actionable insights and recommendations to fix issues before they become production bugs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}