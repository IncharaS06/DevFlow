import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  GitPullRequest, 
  Bug, 
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
  Code
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const velocityData = [
  { name: 'Mon', commits: 12, prs: 8 },
  { name: 'Tue', commits: 19, prs: 12 },
  { name: 'Wed', commits: 15, prs: 10 },
  { name: 'Thu', commits: 22, prs: 15 },
  { name: 'Fri', commits: 18, prs: 11 },
  { name: 'Sat', commits: 8, prs: 4 },
  { name: 'Sun', commits: 5, prs: 2 },
];

const codeQualityData = [
  { name: 'Excellent', value: 45, color: '#10B981' },
  { name: 'Good', value: 35, color: '#3B82F6' },
  { name: 'Needs Review', value: 20, color: '#F59E0B' },
];

export function Dashboard() {
  const stats = [
    {
      name: 'Active PRs',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: GitPullRequest,
    },
    {
      name: 'Code Quality Score',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: CheckCircle,
    },
    {
      name: 'Bugs Prevented',
      value: '18',
      change: '+8',
      changeType: 'positive',
      icon: Bug,
    },
    {
      name: 'Avg Review Time',
      value: '2.4h',
      change: '-15%',
      changeType: 'positive',
      icon: Clock,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'pr_review',
      title: 'Code review completed for user authentication',
      user: 'Sarah Chen',
      time: '2 minutes ago',
      status: 'approved'
    },
    {
      id: 2,
      type: 'bug_prediction',
      title: 'Potential memory leak detected in data processing',
      user: 'AI Assistant',
      time: '15 minutes ago',
      status: 'warning'
    },
    {
      id: 3,
      type: 'documentation',
      title: 'API documentation auto-generated',
      user: 'DevFlow Bot',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'integration',
      title: 'Slack integration configured successfully',
      user: 'Mike Johnson',
      time: '2 hours ago',
      status: 'completed'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your team.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <span className="text-sm text-gray-500 ml-1">from last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
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
            <h3 className="text-lg font-semibold text-gray-900">Team Velocity</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Commits</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Pull Requests</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Line type="monotone" dataKey="commits" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="prs" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Code Quality Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Code Quality Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={codeQualityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {codeQualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            {codeQualityData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.status === 'approved' ? 'bg-green-100' :
                    activity.status === 'warning' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {activity.type === 'pr_review' && <GitPullRequest className={`w-5 h-5 ${
                      activity.status === 'approved' ? 'text-green-600' : 'text-blue-600'
                    }`} />}
                    {activity.type === 'bug_prediction' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                    {activity.type === 'documentation' && <Code className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'integration' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'approved' ? 'bg-green-100 text-green-800' :
                  activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {activity.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}