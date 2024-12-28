import React from "react";
import { Link, useLocation } from "react-router";

export const Footer = () => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  return (
    <>
      {!(pathname.includes("/delivery") || pathname.includes("/admin")) && (
        <footer className="bg-[#2E7D32] text-[#E0E0E0] py-8">
          <div className="container mx-auto text-center">
            <p>&copy; {year} Food Ninja. All rights reserved.</p>
            <div className="mt-4">
              <Link to="/privacy-policy" className="hover:underline mx-2">
                Privacy Policy
              </Link>
              <Link to="/terms-of-services" className="hover:underline mx-2">
                Terms of Service
              </Link>
              <Link to="help-center" className="hover:underline mx-2">
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
