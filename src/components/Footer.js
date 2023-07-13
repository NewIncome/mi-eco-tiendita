import visa from '../assets/visa.png';
import amex from '../assets/american-express.png';
import paypal from '../assets/paypal.png';
import bitcoin from '../assets/bitcoin.png';

const Footer = () =>
  <footer id="Footer" className="row text-light bg-success">
    <div className="col-sm-7">
      <p>© 2023 Productos artesanales naturales | <b>Mi Eco-Tiendita</b><small className="d-block">Todos los derechos reservados.</small></p>
      <small className>Desarrollado por <a href="https://jalfredev.com" className="dev" target="_blank" rel="noreferrer"> JAlfreDev</a></small>
    </div>
    <div className="col-sm-5 text-sm-right d-flex flex-column">
      <div className="payments">
        <div className="pt-3 pt-sm-0" data-toggle="tooltip" data-placement="top" title="Próximamente">
          <img src={visa} alt="visa" className="cards vs-c" />
          <svg className="cards icon mc-c" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width={38} height={24} aria-labelledby="pi-master">
            <title id="pi-master">Mastercard</title>
            <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" />
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" />
            <circle fill="#EB001B" cx={15} cy={12} r={7} /><circle fill="#F79E1B" cx={23} cy={12} r={7} />
            <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" />
          </svg>
          <img src={amex} alt="cards american express" className="cards ae-c" />
          <img src={paypal} alt="paypal" className="cards pp-c" />
          <img src={bitcoin} alt="bitcoin" className="cards bc-c" />
        </div>
      </div>
      <div className="attribute h-50">
        <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" target="_blank" rel="noreferrer">Icons created by Freepik - Flaticon</a>
      </div>
    </div>
  </footer>

export default Footer;
