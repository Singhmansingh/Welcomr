// Import CSS
import './Header.css';
import { useNavigate } from 'react-router-dom';

const FooterIcon = (props) => {
  const navigate = useNavigate();
  return (
    <div className="footer-icon" onClick={()=>navigate('/')}>
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
    </div>
  );
};

export default FooterIcon;