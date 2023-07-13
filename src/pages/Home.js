import logo from '../assets/logo.jpg';
import facebook from '../assets/facebook-ico.png';
import instagram from '../assets/instagram-ico.png';
import youtube from '../assets/youtube-ico.png';

const Home = () =>
  <>
    {/* ----- Section 1 - Carousel ----- */}
    <section id="Section1">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className />
          <li data-target="#myCarousel" data-slide-to={1} className />
          <li data-target="#myCarousel" data-slide-to={2} className="active" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="cr-img cr-1 d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-secondary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cr-img cr-2 d-block w-100" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-success" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="cr-img cr-3 d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg bg-org" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    {/* ----- Section 2 - Nosotros ----- */}
    <section id="Section2" className>
      <h2 className="pb-4">¿Quienes somos?</h2>
      <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </section>
    {/* ----- Section 3 - Categorías ----- */}
    <section id="Section3" className="container vh-100 d-flex flex-column px-5">
      <h1 className="sec3-h text-center">
        <b>Cat</b><b className="h-line">egor</b><b>ías</b>
      </h1>
      <div className="row align-content-between justify-content-between">
        <div className="cs c1 card col-12">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Jabones</h3>
          </div>
        </div>
        <div className="cs c2 card">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Shampoos</h3>
          </div>
        </div>
        <div className="cs c3 card">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Velas</h3>
          </div>
        </div>
        <div className="cs c4 card">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Cremas &amp; Balsamos</h3>
          </div>
        </div>
        <div className="cs c5 card">
          <div className="card-body v-center">
            <h3 className="card-title h2 text-center">Materiales</h3>
          </div>
        </div>
      </div>
    </section>
    {/* ----- Section 4 - Catálogo ----- */}
    <section id="Section4" className>
      <h1 className="pb-4">
        <b>Ca</b><b className="h-line">tálo</b><b>go</b>
      </h1>
      <div className="rt">
        <p className>Si deseas descargar nuestro catálogo de productos da clic en el siguiente botón</p>
        <button type="button" className="dwnld btn btn-warning pb-2 mb-3">
          Descargar Catálogo
        </button>
        <p className>o si solo quieres visualizarlo te lo mostramos a continuación(próximamente)</p>
      </div>
    </section>
    {/* ----- Section 5 - Contacto ----- */}
    <section id="Section5">
      <div className="contact-text card col-5 p-5">
        <img src={logo} className="sec-img-5 card-img-top" alt="logo" />
        <p className="card-text pt-3 text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="contacto card col-sm-7 col-12 text-muted">
        <div className="card-body">
          <h4 className="card-title text-success">Contacto</h4>
          <h6 className="card-title text-muted">Dirección:</h6>
          <p className="card-text">Av. Juarez #5, Tercera sección, San Pablo Etla, C.P. 68258, Oaxaca</p>
          <h6 className="card-title text-muted">Teléfono:</h6>
          <p className="card-text">951 349 0881</p>
          <h6 className="card-title text-muted">Horario de Atención:</h6>
          <p className="card-text">De Lunes a Viernes de 09:00 a 18:00 horas</p>
        </div>
        <div className="row mt-4">
          <ul className="social list-unstyled d-flex w-75">
            <li><a className="facebook social-link" title="Facebook" href="https://www.facebook.com/people/Mi-eco-tiendita/100083322015770" target="_blank" rel="noreferrer noopener">
                <img className="social-ico" src={facebook} alt="facebook link" />
              </a></li>
            <li><a className="instagram social-link" title="Instagram" href="https://www.instagram.com/mi_eco_tiendita/" target="_blank" rel="noreferrer noopener">
                <img className="social-ico" src={instagram} alt="instagram link" />
              </a></li>
            <li data-toggle="tooltip" data-placement="top" title="Próximamente">
              <a className="youtube social-link pending-link" title="Youtube" href="https://www.youtube.com/channel/" target="_blank" rel="noreferrer noopener">
                <img className="social-ico pending-ico" src={youtube} alt="youtube link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>;

export default Home;
