// Import CSS
import './Header.css';

// Import Images
import account from "../assets/header/account.png";
import bell from "../assets/header/bell.png";
import search from "../assets/header/search.png";
import filter from "../assets/header/filter.png";


const Header = () => {
  return (
    <header className="header">
      <div className="header-section">
        <img id="img-account" src={account} alt="User Accoount"/>
        <h2>WELCOMR</h2>
        <img id="img-bell" src={bell} alt="Notification"/>
      </div>
      <form className="search-bar">
      <img src={search} alt=""/>
        <input
          type="text" 
          placeholder="Festivals, games, concerts"
        />
        <img src={filter} alt="Custom Filter"/>
      </form>
    </header>
  );
};

export default Header;