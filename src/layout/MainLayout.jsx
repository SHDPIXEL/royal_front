import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Footer from "../components/Footer";

const MainLayout = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.getElementById("site-header");
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        updateHeaderHeight(); // Set initial height
        window.addEventListener("resize", updateHeaderHeight); // Update on resize

        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    return (
        <div className="flex flex-col min-h-screen poppins-regular mb-10">
            <Header />
            <main 
                className="flex-grow md:px-20 px-5 overflow-y-auto"
                style={{ paddingTop: `${headerHeight}px` }} 
            >
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
