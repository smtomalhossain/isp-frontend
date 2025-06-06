import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
