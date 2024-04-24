// react-router components
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// CMC Software React Kit themes
import Inicio from "./pages/index";

// CMC Software React Kit routes
import routes from "./main_routes";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.route}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
