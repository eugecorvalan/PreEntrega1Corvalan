import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="nav" >
            <h1 className="h1Menu">Bienes Raices Corvalan</h1>
            <div>
                <button className="button-menu">Departamentos</button>
                <button className="button-menu">Lofts</button>
                <button className="button-menu">Casa Quinta</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar