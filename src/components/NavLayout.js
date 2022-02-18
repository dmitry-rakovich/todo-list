import { Link, Outlet } from "react-router-dom"

const NavLayout = () => {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='todos'>Todos</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export {NavLayout}