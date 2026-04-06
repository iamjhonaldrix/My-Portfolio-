import { useState } from "react";

function Header( {darkMode, setDarkMode}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setMenuOpen(false);
    };

    return (
        <header className={darkMode ? "header dark" : "header"}>
            <div className="header-left">
                <img
                src={darkMode ? "/image/b3rl1n.png" : "/image/profile.png"} 
                alt="Profile"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <div className="name-addr">
                    <h1>Jhon Aldrix Bernil</h1>
                    <p>⚲ Bulacan, Philippines</p>
                    <br />
                    <h4>CTF / Web Developer / Cybersecurity Enthusiast</h4>
                </div>
            </div>

            <div className="header-right">
                <div className="buttons">
                    <button className="dark-mode-btn" onClick={toggleDarkMode}>
                    {darkMode ? "🌞" : "🌙"}
                    </button>

                    <div className="menu-container">
                    <button className="menu-btn" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>  
                {menuOpen && (
                    <div className={`dropdown ${menuOpen ? "active" : ""}`}>
                        <a href="https://b3rl1n.gitbook.io/b3rl1n">Writeups</a>
                        <a href="projects.html" >Projects</a>
                        <a href="contacts.html">Contacts</a>
                    </div>
                )}
                </div>
            </div>
        </header>
    );
}

export default Header