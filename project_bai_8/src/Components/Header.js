function Header(){
 return(
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark my-menu">
     <div class="container">
        <button class="navbar-toggler d-lg-none " type="button" data-toggle="collapse"
         data-target="#mainmenu"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse my-navbar" id="mainmenu">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">Giới thiệu</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" data-toggle="dropdown">Product</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" data-toggle="modal" data-target="#modelId">chi tiết</a>
                        <a class="dropdown-item" href="cart.html">giỏ hàng</a>
                    </div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="cart.html">Giỏ hàng</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="contact.html">Liên hệ</a>
                </li>
                
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-dark bg-danger my-2 my-sm-2" type="submit">Tìm kiếm</button>
            </form>
        </div>
      </div>
    </nav>
    </header>
 )
}
export default Header