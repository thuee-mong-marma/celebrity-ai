import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li className="footer-item">
                    <a
                        href="https://www.enjoybloom.com/contact"
                        target="_blank"
                    >
                        Contact Us
                    </a>
                </li>
                <li className="footer-item">
                    Bloom's{" "}
                    <a href="https://www.enjoybloom.com/terms" target="_blank">
                        Terms
                    </a>{" "}
                    &{" "}
                    <a
                        href="https://www.enjoybloom.com/privacy"
                        target="_blank"
                    >
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
