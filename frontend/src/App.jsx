import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Layout, Home, Error } from "./screens";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
