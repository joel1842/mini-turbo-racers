import logo from "./logo.png";
import flagIcon from "./checkeredFlag.png";
import garageIcon from "./garageIcon.png";
import moneyIcon from "./moneyIcon.png";
import rulesIcon from "./rulesIcon.png";
import starIcon from "./starIcon.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Mini Turbo Racers" />
            </div>

            <div className="btn-menu text-center">
                <button><img src={flagIcon} alt="Track" /><a href="/track">Track</a></button>
                <button><img src={garageIcon} alt="Garage" /><a href="/garage">Garage</a></button>
                <button><img src={moneyIcon} alt="Bank" /><a href="/bank">Bank</a></button>
                <button><img src={rulesIcon} alt="How to play!" /><a href="/how-to-play">How to play!</a></button>
                <button><img src={starIcon} alt="Credits" /><a href="/credits">Credits</a></button>
            </div>
        </nav>
    );
}
 
export default Navbar;