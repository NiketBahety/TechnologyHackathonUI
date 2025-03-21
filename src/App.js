import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerTable from "./components/CustomerTable";
import CustomerInsights from "./components/CustomerInsights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerTable />} />
        <Route path="/customer/:id" element={<CustomerInsights />} />
      </Routes>
    </Router>
  );
}

export default App;
