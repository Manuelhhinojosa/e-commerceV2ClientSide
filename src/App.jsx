// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import UserLayout from "./components/layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
