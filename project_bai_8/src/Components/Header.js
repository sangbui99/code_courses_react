import {Link} from "react-router-dom"
import routers from "../commons/routers"

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark my-menu">
                <div className="container">
                    <div className="collapse navbar-collapse my-navbar" id="mainmenu">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {
                              routers.map(item => {
                                return (
                                    <li className="nav-item" key={item.path}>
                                       <Link  className="nav-link" to={item.path}>{item.name}</Link>                          
                                    </li>
                                )
                              })
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown">Product</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" data-toggle="modal" data-target="#modelId">chi tiết</a>
                                    <a className="dropdown-item" href="cart.html">giỏ hàng</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="cart.html">Giỏ hàng</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="contact.html">Liên hệ</a>
                            </li>

                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-dark bg-danger my-2 my-sm-2" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header