import { Link } from "react-router-dom";

function Navbar(){
    return <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/profile">프로필</Link></li>
                </ul>
            </nav>
}
export default Navbar;