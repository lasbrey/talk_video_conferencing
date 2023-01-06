import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemedSuspense from "./components/ThemedSuspense";
import { AuthContextProvider } from "./context/authContext";
import Protected from "./components/Protected";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer.jsx";
import routes from "./routes/index";
import Page404 from "./pages/404";
import Home from "./pages/home/home";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";

function App() {
  const routeComponents = routes.map((route, i) => (
    <Route
      exact
      path={route.path}
      element={
        <Protected>
          <route.component />
        </Protected>
      }
      key={i}
    />
  ));
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AccessibleNavigationAnnouncer />
        <Suspense fallback={<ThemedSuspense />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Signup />} />
            {routeComponents}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
