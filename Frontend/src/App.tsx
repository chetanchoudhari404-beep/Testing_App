import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  const isAuthenticated = sessionStorage.getItem("token"); // example

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
          }
        />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Default Route */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
