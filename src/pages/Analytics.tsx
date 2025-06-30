import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

export function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  const velocityData = [
    { date: '2024-01-01', commits: 45, prs: 12, deployments: 3 },
    { date: '2024-01-02', commits: 52, prs: 15, deployments: 2 },
    { date: '2024-01-03', commits: 38, prs: 9, deployments: 4 },
    { date: '2024-01-04', commits: 61, prs: 18, deployments: 1 },
    { date: '2024-01-05', commits: 49, prs: 14, deployments: 5 },
    { date: '2024-01-06', commits: 33, prs: 8, deployments: 2 },
    { date: '2024-01-07', commits: 44, prs: 11, deployments: 3 },
  ];

  const teamPerformanceData = [
    { name: 'Sarah Chen', commits: 89, prs: 23, reviews: 45, score: 92 },
    { name: 'Mike Johnson', commits: 76, prs: 19, reviews: 38, score: 88 },
    { name: 'Alex Rivera', commits: 65, prs: 16, reviews: 42, score: 85 },
    { name: 'Emma Davis', commits: 58, prs: 14, reviews: 35, score: 82 },
    { name: 'David Kim', commits: 71, prs: 18, reviews: 29, score: 79 },
  ];

  const codeQualityTrend = [
    { date: '2024-01-01', quality: 85, bugs: 12, coverage: 78 },
    { date: '2024-01-02', quality: 87, bugs: 10, coverage: 80 },
    { date: '2024-01-03', quality: 89, bugs: 8, coverage: 82 },
    { date: '2024-01-04', quality: 91, bugs: 6, coverage: 85 },
    { date: '2024-01-05', quality: 88, bugs: 9, coverage: 83 },
    { date: '2024-01-06', quality: 92, bugs: 5, coverage: 87 },
    { date: '2024-01-07', quality: 94, bugs: 4, coverage: 89 },
  ];

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into your team's development performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Velocity</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">342</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+12%</span>
                <span className="text-sm text-gray-500 ml-1">vs last week</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Contributors</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              <div className="flex items-center mt-2">
                <Users className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-sm font-medium text-blue-600">+2</span>
                <span className="text-sm text-gray-500 ml-1">this month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Review Time</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">2.4h</p>
              <div className="flex items-center mt-2">
                <Clock className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm font-medium text-green-600">-18%</span>
                <span className="text-sm text-gray-500 ml-1">improvement</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Code Quality</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">94%</p>
              <div className="flex items-center mt-2">
                <Target className="w-4 h-4 text-purple-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+3%</span>
                <span className="text-sm text-gray-500 ml-1">this week</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Velocity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Development Velocity</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Commits</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Pull Requests</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Deployments</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Line type="monotone" dataKey="commits" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="prs" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="deployments" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Code Quality Trend */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Code Quality Trend</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Quality Score</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Coverage</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={codeQualityTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area type="monotone" dataKey="quality" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="coverage" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Team Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={teamPerformanceData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar dataKey="commits" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              <Bar dataKey="prs" fill="#10b981" radius={[0, 4, 4, 0]} />
              <Bar dataKey="reviews" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white"
      >
        <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">🚀 Performance Boost</h4>
            <p className="text-indigo-100 text-sm">
              Your team's velocity increased by 12% this week. Sarah Chen is leading with exceptional PR reviews.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">⚡ Quick Wins</h4>
            <p className="text-indigo-100 text-sm">
              Review time decreased by 18%. Consider implementing the new automated testing workflow.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">🎯 Focus Areas</h4>
            <p className="text-indigo-100 text-sm">
              Code coverage could improve in the authentication module. Schedule a team review session.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}