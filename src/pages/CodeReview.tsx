import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  User,
  MessageSquare,
  GitBranch,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Zap
} from 'lucide-react';

export function CodeReview() {
  const [selectedPR, setSelectedPR] = useState(null);

  const pullRequests = [
    {
      id: 1,
      title: 'Implement user authentication with JWT',
      author: 'Sarah Chen',
      branch: 'feature/auth-jwt',
      status: 'pending',
      priority: 'high',
      files: 8,
      additions: 245,
      deletions: 67,
      comments: 3,
      aiScore: 92,
      aiSuggestions: [
        'Consider adding input validation for email format',
        'JWT secret should be stored in environment variables',
        'Add rate limiting to prevent brute force attacks'
      ],
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Optimize database queries for user dashboard',
      author: 'Mike Johnson',
      branch: 'perf/dashboard-queries',
      status: 'approved',
      priority: 'medium',
      files: 4,
      additions: 89,
      deletions: 156,
      comments: 1,
      aiScore: 96,
      aiSuggestions: [
        'Excellent use of database indexing',
        'Consider adding query result caching'
      ],
      timeAgo: '1 day ago'
    },
    {
      id: 3,
      title: 'Add dark mode support to UI components',
      author: 'Alex Rivera',
      branch: 'feature/dark-mode',
      status: 'changes_requested',
      priority: 'low',
      files: 12,
      additions: 334,
      deletions: 23,
      comments: 7,
      aiScore: 78,
      aiSuggestions: [
        'Some color contrast ratios may not meet accessibility standards',
        'Consider using CSS custom properties for theme switching',
        'Add system preference detection'
      ],
      timeAgo: '3 days ago'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'changes_requested': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Code Review</h1>
          <p className="text-gray-600 mt-1">Intelligent code analysis and suggestions for your pull requests</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
            Configure Rules
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            New Review
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg AI Score</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">89%</p>
            </div>
            <Zap className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Issues Found</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Pull Requests List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Active Pull Requests</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {pullRequests.map((pr, index) => (
            <motion.div
              key={pr.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => setSelectedPR(pr)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{pr.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pr.status)}`}>
                      {pr.status.replace('_', ' ')}
                    </span>
                    <span className={`text-sm font-medium ${getPriorityColor(pr.priority)}`}>
                      {pr.priority} priority
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {pr.author}
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="w-4 h-4 mr-1" />
                      {pr.branch}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {pr.files} files
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {pr.comments} comments
                    </div>
                    <span>{pr.timeAgo}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-green-600">+{pr.additions}</span>
                    <span className="text-red-600">-{pr.deletions}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <Zap className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm font-medium text-gray-900">AI Score: {pr.aiScore}%</span>
                    </div>
                    <div className={`w-24 h-2 rounded-full ${
                      pr.aiScore >= 90 ? 'bg-green-200' : pr.aiScore >= 80 ? 'bg-yellow-200' : 'bg-red-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full ${
                          pr.aiScore >= 90 ? 'bg-green-500' : pr.aiScore >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${pr.aiScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200">
                      <ThumbsUp className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200">
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Suggestions Preview */}
              {pr.aiSuggestions.length > 0 && (
                <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-indigo-900">AI Suggestions</span>
                  </div>
                  <ul className="space-y-1">
                    {pr.aiSuggestions.slice(0, 2).map((suggestion, idx) => (
                      <li key={idx} className="text-sm text-indigo-800">• {suggestion}</li>
                    ))}
                    {pr.aiSuggestions.length > 2 && (
                      <li className="text-sm text-indigo-600 font-medium">
                        +{pr.aiSuggestions.length - 2} more suggestions
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}