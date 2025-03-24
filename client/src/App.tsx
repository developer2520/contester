import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Profile from './pages/Profile'
import CreateGiveaway from './pages/CreateGiveaway'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
        <Route exact path="/" element={<Home />} />
<Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateGiveaway />} />
        </Routes>
        <BottomNav />
      </DashboardLayout>
    </Router>
  );
}

export default App;
