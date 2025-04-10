import { Routes, Route } from "react-router";

import Layout from "@/components/layouts/layout";
import Home from "./pages";
import About from "./pages/about";
import Activities from "./pages/activities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
      </Route>
    </Routes>
  );
}

export default App;
