import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/public/Home';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

import WhoWeAre from './pages/public/WhoWeAre';
import Ministries from './pages/public/Ministries';
import Governance from './pages/public/Governance';
import ChurchPlantingAndMissions from './pages/public/ChurchPlanting&Missions';
import Contact from './pages/public/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Wrapped in Layout */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/who-we-are" element={
          <Layout>
            <WhoWeAre />
          </Layout>
        } />
        <Route path="/ministries" element={
          <Layout>
            <Ministries />
          </Layout>
        } />
        <Route path="/church-planting-missions" element={
          <Layout>
            <ChurchPlantingAndMissions />
          </Layout>
        } />
        <Route path="/governance" element={
          <Layout>
            <Governance />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />

        {/* Admin Routes - No Layout or different layout */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
