import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Puzzle, 
  Github, 
  Slack, 
  CheckCircle,
  Plus,
  Settings,
  Zap,
  ExternalLink,
  AlertCircle,
  Clock
} from 'lucide-react';

export function Integrations() {
  const [activeTab, setActiveTab] = useState('connected');

  const connectedIntegrations = [
    {
      id: 1,
      name: 'GitHub',
      description: 'Source code management and version control',
      icon: Github,
      status: 'connected',
      lastSync: '2 minutes ago',
      features: ['Pull Request Analysis', 'Commit Tracking', 'Issue Management'],
      color: 'bg-gray-900'
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Team communication and notifications',
      icon: Slack,
      status: 'connected',
      lastSync: '5 minutes ago',
      features: ['Code Review Notifications', 'Daily Reports', 'Alert Management'],
      color: 'bg-purple-600'
    }
  ];

  const availableIntegrations = [
    {
      id: 3,
      name: 'Jira',
      description: 'Project management and issue tracking',
      icon: () => <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">J</div>,
      features: ['Issue Linking', 'Sprint Tracking', 'Workflow Automation'],
      color: 'bg-blue-600',
      popular: true
    },
    {
      id: 4,
      name: 'VS Code',
      description: 'Code editor integration and extensions',
      icon: () => <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold">VS</div>,
      features: ['Real-time Analysis', 'Code Suggestions', 'Error Highlighting'],
      color: 'bg-blue-500',
      popular: true
    },
    {
      id: 5,
      name: 'Discord',
      description: 'Community and team communication',
      icon: () => <div className="w-6 h-6 bg-indigo-600 rounded text-white flex items-center justify-center text-xs font-bold">D</div>,
      features: ['Bot Integration', 'Channel Notifications', 'Voice Alerts'],
      color: 'bg-indigo-600'
    },
    {
      id: 6,
      name: 'Trello',
      description: 'Visual project management boards',
      icon: () => <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold">T</div>,
      features: ['Card Automation', 'Progress Tracking', 'Team Boards'],
      color: 'bg-blue-500'
    }
  ];

  const webhooks = [
    {
      id: 1,
      name: 'Code Review Webhook',
      url: 'https://api.devflow.com/webhooks/code-review',
      events: ['pull_request.opened', 'pull_request.reviewed'],
      status: 'active',
      lastTriggered: '1 hour ago'
    },
    {
      id: 2,
      name: 'Deployment Webhook',
      url: 'https://api.devflow.com/webhooks/deployment',
      events: ['deployment.success', 'deployment.failed'],
      status: 'active',
      lastTriggered: '3 hours ago'
    }
  ];

  const tabs = [
    { id: 'connected', name: 'Connected', count: connectedIntegrations.length },
    { id: 'available', name: 'Available', count: availableIntegrations.length },
    { id: 'webhooks', name: 'Webhooks', count: webhooks.length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-1">Connect DevFlow with your favorite development tools</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Integrations</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{connectedIntegrations.length}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{availableIntegrations.length}</p>
            </div>
            <Puzzle className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Webhooks</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{webhooks.length}</p>
            </div>
            <Zap className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">API Calls Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">1,247</p>
            </div>
            <ExternalLink className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Connected Integrations */}
          {activeTab === 'connected' && (
            <div className="space-y-4">
              {connectedIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center`}>
                        <integration.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                          <div className="flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Connected
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{integration.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {integration.features.map((feature) => (
                            <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Last sync: {integration.lastSync}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <Settings className="w-5 h-5" />
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200">
                        Configure
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Available Integrations */}
          {activeTab === 'available' && (
            <div className="grid md:grid-cols-2 gap-6">
              {availableIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 relative"
                >
                  {integration.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center`}>
                      <integration.icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                      <p className="text-gray-600 mb-3">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {integration.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Webhooks */}
          {activeTab === 'webhooks' && (
            <div className="space-y-4">
              {webhooks.map((webhook, index) => (
                <motion.div
                  key={webhook.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{webhook.name}</h3>
                        <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          webhook.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {webhook.status === 'active' ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <AlertCircle className="w-3 h-3 mr-1" />
                          )}
                          {webhook.status}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 font-mono text-sm">{webhook.url}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {webhook.events.map((event) => (
                          <span key={event} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-mono">
                            {event}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        Last triggered: {webhook.lastTriggered}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <Settings className="w-5 h-5" />
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200">
                        Edit
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors duration-200"
              >
                <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Create New Webhook</h3>
                <p className="text-gray-600 mb-4">Set up custom webhooks to integrate with external services</p>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center mx-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Webhook
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}