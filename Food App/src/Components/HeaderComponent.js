import { LOGO_URL } from "../utills/constants";
const HeaderComponent = () => (
    <div className="headerContainer">
        <div className="logoContainer">
            <img className="logoIcon" src={LOGO_URL} />
        </div>
        <div className="navBarContainer">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Cart</li>
                <li>Account</li>
            </ul>
        </div>

    </div>
)

export default HeaderComponent;