import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="layout__">
            {children}
            <Footer />
        </div>
    );
};

export default Layout;