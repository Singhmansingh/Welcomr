// Import CSS
import './Footer.css';

// Import Images
import home from '../assets/footer/home.png';
import exlpore from '../assets/footer/explore.png';
import saved from '../assets/footer/saved.png';
import settings from '../assets/footer/settings.png';

// Import Components
import FooterIcon from './FooterIcon';

const footerIcons = [{
    name: "Home",
    image: home,
    order: 1
}, {
    name: "Exlpore",
    image: exlpore,
    order: 2
}, {
    name: "Saved",
    image: saved,
    order: 3
}, {
    name: "Settings",
    image: settings,
    order: 4
}]

const Footer = () => {

  return (
    <footer className="footer">
        {footerIcons.sort( (a, b) => a.order - b.order).map( v => {
          return <FooterIcon image={v.image} name={v.name}/>
        })}
    </footer>
  );
};

export default Footer;