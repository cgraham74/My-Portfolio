import React from "react";

export default function Footer(){
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer className="footer">
            <p>Copyright © {year} Christina Graham | Created with React</p>
        </footer>
    )
}