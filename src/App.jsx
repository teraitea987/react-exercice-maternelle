import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Exercice1 from "./pages/Exercice1";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercice-1" element={<Exercice1 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
