// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import UserLayout from "./components/layout/UserLayout";

// App component function
const App = () => {
  // return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
