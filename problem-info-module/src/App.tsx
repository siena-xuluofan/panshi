import React from 'react';
import ProblemInfoModule from './components/ProblemInfoModule';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">问题管理系统</h1>
        <ProblemInfoModule />
      </div>
    </div>
  );
}

export default App;