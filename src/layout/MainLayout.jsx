import React, { useState, useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaperPlaneAnimation from "../components/PaperPlaneAnimation";

const MainLayout = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const location = useLocation();

    const updateHeaderHeight = () => {
        setTimeout(() => {
            const header = document.getElementById("site-header");
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        }, 50); // Small delay to allow DOM updates
    };

    useLayoutEffect(() => {
        updateHeaderHeight(); // Initial update

        // Watch for header height changes dynamically
        const header = document.getElementById("site-header");
        if (header) {
            const observer = new MutationObserver(updateHeaderHeight);
            observer.observe(header, { attributes: true, childList: true, subtree: true });

            return () => observer.disconnect();
        }
    }, [location.pathname]); // Runs when route changes

    useEffect(() => {
        window.addEventListener("resize", updateHeaderHeight);

        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    return (
        <div className="flex flex-col min-h-screen poppins-regular">
            <Header />
            <main
                className="flex-grow md:px-20 px-5 overflow-y-auto"
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <Outlet />
            </main>
                <PaperPlaneAnimation />
                <Footer />
        </div>
    );
};

export default MainLayout;
