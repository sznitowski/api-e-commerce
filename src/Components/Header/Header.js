
import Store from "../../Assets/Images/Store.jpg";

export default function Header() {
    return (
        <>
        <header>
        <div className="logo">
        <img src={Store} alt="Store" width="150" />
      </div>

            <ul>
                <li><a href='#'></a>Inicio</li>
                <li><a href='#'></a>Productos</li>
            </ul>
        </header>
        </>
    );
}