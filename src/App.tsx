import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { CodeReview } from './pages/CodeReview';
import { Documentation } from './pages/Documentation';
import { Analytics } from './pages/Analytics';
import { BugPredictor } from './pages/BugPredictor';
import { Integrations } from './pages/Integrations';
import { Landing } from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="code-review" element={<CodeReview />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="bug-predictor" element={<BugPredictor />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;