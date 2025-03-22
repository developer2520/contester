import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <BottomNav />
      </DashboardLayout>
    </Router>
  );
}

export default App;
