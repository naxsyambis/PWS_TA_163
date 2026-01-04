import React from 'react';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Admin from './pages/admin';

function App() {
  return (
    <div className="App">
      <h1>Music Search App</h1>
      <Login />
      <hr />
      <Dashboard />
      <hr />
      <Admin />
    </div>
  );
}

export default App;