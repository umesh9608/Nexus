import { Link, Outlet } from "react-router"
export default function Details() {

    return (
        <>
            <nav>
                <Link to="/Details">Details</Link>
                <Link to="Hello">Hello</Link>
                <Link to="hi">Hi</Link>
            </nav>
            <h1>Welcome to  Details Page</h1>
            <Outlet />
        </>
    )
}

//Outlate mans:-When you use nested routes, the <Outlet /> tells React Router where to render the child component inside the parent.