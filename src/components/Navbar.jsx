import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-around bg-primary text-light text-center p-2">
            <NavLink exact to="/" 
            activeClassName="border-bottom border-light bg-info nav-link text-light"
            className="nav-link text-light">
                Home
            </NavLink>
            <h1>GHIBLI</h1>
        </nav>
    )
}
export default Navbar