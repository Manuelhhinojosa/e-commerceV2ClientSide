// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sonner's Toaster for notificaation
import { Toaster } from "sonner";

// Components
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// App component function
const App = () => {
  // return
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
