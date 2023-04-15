// Import CSS
import './Header.css';


const FooterIcon = (props) => {
  return (
    <div className="footer-icon">
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
    </div>
  );
};

export default FooterIcon;