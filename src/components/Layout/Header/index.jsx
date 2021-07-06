import React, { useState } from 'react';

function Header() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <div class="navbar navbar-expand-lg bg-light navbar-light">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">EhteshamNadim</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" onClick={() => { setIsCollapsed(!isCollapsed) }}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className={isCollapsed ? "collapse navbar-collapse justify-content-between" : "navbar-collapse justify-content-between"} id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="#home" class="nav-item nav-link active">Home</a>
                        <a href="#about" class="nav-item nav-link">Skills</a>
                        <a href="#service" class="nav-item nav-link">Service</a>
                        <a href="#experience" class="nav-item nav-link">Experience</a>
                        <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
                        {/* <a href="#review" class="nav-item nav-link">Review</a> */}
                        {/* <a href="#blog" class="nav-item nav-link">Blog</a> */}
                        <a href="#contact" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;