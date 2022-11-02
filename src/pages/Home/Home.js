import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import React, { useState } from "react";
import Responsive from "./SlickSlider/SlickSlider";
import interior from "../../assets/img/home-page/9-001.webp";
import architecture from "../../assets/img/home-page/2_2.webp";
import design from "../../assets/img/home-page/2_3.webp";
import visualisation from "../../assets/img/home-page/2_4.webp";
import supervision from "../../assets/img/home-page/2_5.webp";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

export default function Home(props) {
  const [sectionLoaded, setSectionLoad] = useState(false);
  const { language } = props;

  return (
    <>
      <Loader sectionLoaded={sectionLoaded} />

      {language === "english" && (
        <section
          className="home"
          onLoad={() => setSectionLoad(true)}
          style={{ display: sectionLoaded ? "block" : "none" }}
        >
          <>
            <Responsive />
            <hr />
            <h3 className="container">Services</h3>
            <hr />
            <div className="home-services container">
              <div className="service interior-design">
                <img src={interior} alt="interior" />
                <h3>Interior design</h3>
                <p>
                  In MKT Studio we develop interior designs for a wide range of
                  spaces including flats, hotel apartments, restaurants, offices
                  and more. We take into consideration wishes of our clients as
                  well as modern trends to create the best projects possible. 
                </p>
                <Link to="projects/interior_design">
                  <button>See projects</button>
                </Link>
              </div>
              <div className="service architecture">
                <img src={architecture} alt="architecture" />
                <h3>Architecture</h3>
                <p>
                  We focus on developing various structural components for your
                  buildings as well as providing any necessary architectural
                  solutions. We have extensive experience in designing and
                  supervising the construction of residential buildings. In all
                  of our architectural projects, we use modern and innovative
                  solutions and tools for the best outcome.
                </p>
                <Link to="projects/architecture">
                  <button>See projects</button>
                </Link>
              </div>
              <div className="service graphic-design">
                <img src={design} alt="design" />
                <h3>Graphic design</h3>
                <p>
                  We design logos and merchandise for your company's products or
                  working environment. We create recognizable, efficient and
                  functional products that meet the needs and requirements of
                  our clients.
                </p>
                <Link
                  style={{ pointerEvents: "none", cursor: "default" }}
                  to="projects/graphic_design"
                >
                  <button>See projects (inactive)</button>
                </Link>
              </div>
              <div className="service visualisation">
                <img src={visualisation} alt="photorealistic visualization" />
                <h3>Visualization</h3>
                <p>
                  We perform photorealistic and high quality visualization of
                  your projects. We communicate with our clients to create
                  designs that meet their needs and expectations. We provide
                  visualization, furnishing and decorating of chosen spaces that
                  match your personal style.
                </p>
                <Link
                  style={{ pointerEvents: "none", cursor: "default" }}
                  to="projects/visualisation"
                >
                  <button>See projects (inactive) </button>
                </Link>
              </div>
              <div className="service supervision">
                <img src={supervision} alt="supervision" />
                <h3>Supervision</h3>
                <p>
                  We support the construction of your projects at all stages.
                  Starting with the beginning of building, up to the decoration
                  of your space. We will support you in obtaining documentation
                  and at the stages of project adjustment if required.
                </p>
                <Link to="projects/supervision">
                  <button>See projects</button>
                </Link>
              </div>
            </div>
          </>
        </section>
      )}
      {language === "ukrainian" && (
        <section
          className="home"
          style={{ display: sectionLoaded ? "block" : "none" }}
          onLoad={() => setSectionLoad(true)}
        >
          <Responsive />
          <hr />
          <h3 className="container">Послуги</h3>
          <hr />
          <div className="home-services container">
            <div className="service interior-design">
              <img src={interior} alt="Дизайн інтер'єру" />
              <h3>Дизайн інтер'єру</h3>
              <p>
                Студія МКТ розробляє дизайн інтер’єрів для квартир, готельних
                апартаментів, ресторанів та офісів та іншого. Виконуємо
                інтер’єри відповідно ваших побажань та аналізуючи сучасні
                тенденції на проєктування
              </p>
              <Link to="projects/interior_design">
                <button>Портфоліо</button>
              </Link>
            </div>
            <div className="service architecture">
              <img src={architecture} alt="Архітектура" />
              <h3>Архітектура</h3>
              <p>
                Виконуємо розробку архітектурних рішень та конструктивної
                складової ваших будинків. Маємо великий досвід в проєктуванні та
                авторському нагляді за будівництвом житлових будинків.
                Використовуємо сучасні та інноваційні рішення
              </p>
              <Link to="projects/architecture">
                <button>Портфоліо</button>
              </Link>
            </div>
            <div className="service graphic-design">
              <img src={design} alt="Графічний дизайн" />
              <h3>Графічний дизайн</h3>
              <p>
                Створюємо дизайн логотипів та предметів інтегрованих в
                середовище проживання чи роботи вашої компанії. Робимо продукцію
                вашої компанії впізнаваємою та функціональною.
              </p>
              <Link
                style={{ pointerEvents: "none", cursor: "default" }}
                to="projects/graphic_design"
              >
                <button>Портфоліо (не активно) </button>
              </Link>
            </div>
            <div className="service visualisation">
              <img src={visualisation} alt="фотореалістична візуалізація" />
              <h3>Візуалізація</h3>
              <p>
                Виконуємо фотореалістичну візуалізацію, також виконуємо
                візуалізацію ваших проєктних рішень. Виконуємо підбір меблів та
                оздоблення ваших будинків та квартир.
              </p>
              <Link
                style={{ pointerEvents: "none", cursor: "default" }}
                to="projects/visualisation"
              >
                <button>Портфоліо (не активно) </button>
              </Link>
            </div>
            <div className="service supervision">
              <img src={supervision} alt="Авторський нагляд" />
              <h3>Авторський нагляд</h3>
              <p>
                Супроводжуємо ваше будівництво, на усіх етапах. Починаючи з
                фундаменту та до благоустрою вашої ділянки. Супроводження в
                отриманні документації, та на етапах коригування проєкту.
              </p>
              <Link to="projects/supervision">
                <button>Портфоліо</button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
