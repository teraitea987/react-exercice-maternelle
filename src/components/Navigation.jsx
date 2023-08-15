import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to={"/"}
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to={"/exercice-1"}
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Exo 1</li>
                </NavLink>
            </ul>
            <h2>Exercice GS</h2>
            <button
                onClick={(e) =>
                    document
                        .querySelector(".navigation")
                        .classList.toggle("responsive")
                }
                className="toggle-nav"
            >
                &#9776;
            </button>
        </div>
    );
};

export default Navigation;
