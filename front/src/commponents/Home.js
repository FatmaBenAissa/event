import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutHome from './AboutHome';
import Footer from './Footer';

function Home() {
  return (
    <div className='saf'>
    <Carousel style={{marginTop:"1px"}} id="caro" variant="dark">
    <Carousel.Item>
      <img
        className="d-block"
        src="http://agencedoree.com/wp-content/uploads/2020/09/MM1.jpg"
        alt="First slide"
      />
      <div className="hand">
        <span id="orga">ORGANISATION & DÉCORATION D'ÉVÉNEMENTS</span>
        <p id="cont">Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="rouge" href="/Services">Nos services</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id="kilo"
        className="d-block"
        src="https://rubascorner.com/wp-content/uploads/2018/08/Bridal-shower-full-size.jpg"
        alt="Second slide"
      />
       <div className="hand">
        <span id="faz">Bride To Be</span>
        <p>Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="noir" href="/deco">ACHETEZ MAINTENANT</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="https://cdn0.mariages.net/vendor/1158/3_2/960/jpg/img-4983_3_291158-167493948753122.jpeg"
        alt="Third slide"
      />
       <div className="hand">
        <span id="faz">Fiançailles</span>
        <p>Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="noir" href="/deco">ACHETEZ MAINTENANT</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="https://symphonyevents.com.au/wp-content/uploads/2021/09/birthday-banner-1.jpg"
      />
       <div className="hand">
        <span id="faz"> Anniversaire</span>
        <p>Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="noir" href="/deco">ACHETEZ MAINTENANT</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="https://hips.hearstapps.com/hmg-prod/images/wedding-decor-1656448657.jpg"
        alt="Third slide"
      />
       <div className="hand">
        <span> Nappes en polyester </span>
        <p>Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="noir" href="/deco">ACHETEZ MAINTENANT</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="https://www.onedayevent.fr/uploads/files/url-t-site1media-10970.jpeg"alt="Third slide"/>
       <div className="hand">
        <span id="faz">Douche de bébé </span>
        <p>Contactez-nous pour organiser et décorer votre événement</p>
        <a  id="noir" href="/deco">ACHETEZ MAINTENANT</a>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <AboutHome />
  <div className='main'>
    <h1>CE QUE NOS CLIENTS DISENT</h1>
  <div className="container">
        <div className="row">
          <div className="col-sm-12">			
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>   
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p> Je la recommande les yeux fermés. Très professionnelle et douée dans la deco.A l ecoute de toutes nos envies, elle se plie en 4 pour satisfaire au maximum les client(e)s.Matériels de qualité, personnalisation de plusieurs éléments.Merci pour cette belle décoration qui a plus à tous nos convives, c'était magnifique !!Prix très compétitifs par rapport à ses concurrents.</p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://static.wixstatic.com/media/16ff1f_f08066fd871a4de8b8bd12a92df17756~mv2.jpg/v1/crop/x_0,y_312,w_2142,h_2119/fill/w_500,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3855_edited.jpg" alt="" />										
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>MaySam</b></div>
                            <div className="details">Fiançailles</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>Très professionnelle. Très bon suivi jusqu'à l'événement. Très pointilleuse sur les détails et des goûts. Je recommande vivement. Rien à redire. Prestataire très courtois et professionnel. N'hésitez plus et faites confiance à Baby Event pour vos événements.</p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOFCLlMKE-ghKadKWeXZ08wjYl24R4iWWccjGJH32dy-4aX7oENLwyNYs1pi6uX4VVyY&usqp=CAU" alt="" />
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>Amel</b></div>
                            <div className="details">Douche de bébé</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>BonjourJe les remercient d’avoir fait une très jolie décoration pour l’anniversaire de ma maman qui a été très émue!Très gentille et a l’écoute de leur client!Merci encore !</p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://www.cdiscount.com/pdt2/3/7/6/1/700x700/auc7382511557376/rw/decoration-anniversaire-ballon-cadeau-arche-50-dec.jpg" alt="" />										
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>Nesrine</b></div>
                            <div className="details">Anniversaire </div>											
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>Nous avons fait appel à N events Decor pour le baptême de notre fils sur le thème de la Jungle / Roi lion nous avons vraiment été bluffer, un décor magnifique !!! Laurelenn est une personne très professionnel, à l'écoute et très disponible pour répondre à nos attentes.Encore un grand merci à vous, nous n'hésiterons pas à revenir vers vous pour un nouvel événement</p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://i.pinimg.com/564x/02/4c/05/024c056fb1388ce646737277152b09eb.jpg" alt="" />										
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>Fatma</b></div>
                            <div className="details">Fiançailles</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>"Belle décoration !" - "Merci, nous étions contents de la décoration. Bonne continuation" </p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://www.darlingcelebrations.com/wp-content/uploads/2020/05/its-a-boy-bear-baby-shower-1024x837.jpg" alt="" />										
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>Marwa</b></div>
                            <div className="details">Douche de bébé</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <p>Nous avons beaucoup aimé la décoration de notre mariage. C’était vraiment très beau à l’église comme au lieu de réception. C’était du super boulot. Ce fut un plaisir pour nous aussi de travailler avec toi. Nous sommes très satisfaits. Merci encore</p>
                      </div>
                      <div className="media">
                        <div className="media-left d-flex mr-3">
                          <img src="https://cdn0.hitched.co.uk/article/6498/original/1280/jpg/118946-balloon-arch-bridal-shower-decoration.jpeg" alt="" />										
                        </div>
                        <div className="media-body">
                          <div className="overview">
                            <div className="name"><b>Khawla</b></div>
                            <div className="details">De mariée</div>
                            <div className="star-rating">
                              <ul className="list-inline">
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star" /></li>
                                <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                              </ul>
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
              </div>
              {/* Carousel controls */}
              <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                <i className="fa fa-chevron-left" />
              </a>
              <a className="carousel-control right" href="#myCarousel" data-slide="next">
                <i className="fa fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="for">
  <div className="pic-ctn">
  <img id="lina" src="https://ae01.alicdn.com/kf/Sda2fd908f274476899021542a206d140x.jpg" alt="" className="pic" />
  <img src="https://www.cdiscount.com/pdt2/6/9/4/1/700x700/auc7382511970694/rw/arche-de-ballons-anniversaire-vert-jungle-safari-b.jpg" alt="" className="pic" />
  <img src="https://ae01.alicdn.com/kf/H1fb1da8299c545769ff9bf4f48422e761.jpg" alt="" className="pic" />
  <img src="https://www.cdiscount.com/pdt2/1/9/6/1/700x700/auc8016055991196/rw/kit-arche-ballon-anniversaire-vert-kit-arc-guirla.jpg" alt="" className="pic" />
  </div>
  <a  id="walou" href="/galerie">Galerie</a>
  <p id="daz">Découvrez Nos Galerie</p>

</div>
</div>
<div className="container">
<img src="https://img.freepik.com/premium-vector/abstract-background-paper-cut-style_6091-408.jpg" alt="Avatar" className="image" style={{width: '130%'}} />
<h4 id="phone">Faites Appel à Nous !</h4>
<a id="tel" href="/contact">Contactez-nous</a>
        <div className="middle">
        </div>
      </div>
      <Footer/>
</div>
 
  );
}

  

export default Home