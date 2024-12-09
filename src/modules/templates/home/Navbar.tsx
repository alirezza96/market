import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to="/">home</NavLink>
                <br />
                <NavLink to="/products">products</NavLink>
                <br />
                <NavLink to="/dashboard">dashboard</NavLink>
            </nav>
        </div>
    )
}
