import React, { useState, useEffect } from "react";

const Header = () => {

    return (
        <nav class="header navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">E-Commerce</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produc</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">What You'll learn</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#">Questions</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#">Instructors</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;