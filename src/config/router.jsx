import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/..." replace />} />
                <Route path="/..." element={<Component />} />
                <Route path="/..." element={<Component />} />
            </Routes>
        </BrowserRouter>
    )    
}

export default Router;