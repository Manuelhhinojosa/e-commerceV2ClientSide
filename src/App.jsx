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
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/cart/Checkout";

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
          <Route path="collections/:collection" element={<CollectionsPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
