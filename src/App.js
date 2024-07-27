import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import BlankLayout from "./layouts/BlankLayout";
import Router from "./routes";
import LoginPage from "./pages/LoginPage";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
