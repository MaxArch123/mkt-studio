import React, { useEffect } from "react";
import "./about.scss";
import useISHeightSmall from "../../customHooks/useISHeightSmall";

export default function About(props) {
  const { language } = props;
  const isSmall = useISHeightSmall();

  useEffect(() => {
    if (document) {
      if (isSmall) {
        document.querySelector("section").style.height = "100%";
        document.querySelector(".App").style.height = "100%";
        document.querySelector("nav.top-nav").style.position = "static";
      } else {
        document.querySelector("section").style.height = "fit-content";
        document.querySelector(".App").style.height = "fit-content";
      }
    }
  }, [isSmall]);

  return (
    <>
      {language === "english" && (
        <section className="about container">
          <h1 className="title">MKT Studio</h1>
          <div className="top-section">
            <div className="description">
              <h3>About us</h3>
              <p>
                Our studio specializes in designing residential architecture and
                interior design. It is important for us that the client is
                involved to the process and we created a comfortable, functional
                space for him. We accompany your project from the sketch stage
                to construction.
              </p>
            </div>
          </div>
          <div className="details">
            <p>
              We have architects with great experience in the field of
              multi-storey buildings and cottages. Designers and engineers of
              all specialties necessary for the preparation of the project
              documentation of the house. Construction crews and management
              professionals estimate documentation, author supervision journal.
              We carry out clear supervision of each stage of your construction.
            </p>
            <p>
              We accompany the client to every corner of his future home with
              detailed discussion of every little thing, we provide
              visualizations and drawings of all the details of your future
              apartment, office, restaurant. A team engaged in interior design
              have work experience in design studios, as well as in the
              independent management of objects.
            </p>
            <p>
              We have a department for design and branding items to your
              company. Together with a specialist, you have the opportunity to
              design your catalogs logos, business cards and another. We can
              provide images of your design printed on things and in a format
              convenient for printing.
            </p>
          </div>
        </section>
      )}
      {language === "ukrainian" && (
        <section className="about container">
          <h1 className="title">MKT Studio</h1>
          <div className="top-section">
            <div className="description">
              <h3>Про нас</h3>
              <p>
                Наша студія спеціалізується на проєктуванні житлової архітектури
                та дизайну інтер'єрів. Для нас важливо, щоб клієнт був залучений
                до процесу і ми створювали комфортний, функціональний простір
                для кожного. Ми супроводжуємо ваш проєкт з етапу ескізу до
                будівництва.
              </p>
            </div>
            {/* <div className="image">
              <img src={require("../../assets/img/about/mr-hui.jpg")} alt="" />
            </div> */}
          </div>
          <div className="details">
            <p>
              У нас є архітектори з великим стажем роботи, у сфері
              багатоповерхового будівництва та котеджів. Конструктори та
              інженери всіх спеціальностей необхідних для підготовки проєктної
              документації дому. Бригади будівельників та професіонали з ведення
              кошторисної документації, журналу ведення авторського нагляду.
              Проводимо чіткий нагляд за кожним етапом вашого будівництва..
            </p>
            <p>
              Команда, яка займається дизайном інтер'єрів має досвід роботи в
              дизайн студіях, а також у самостійному веденні об'єктів. Ми
              супроводжуємо клієнта по кожному куточку його майбутнього житла з
              детальним обговоренням кожної дрібниці, надаємо візуалізації та
              креслення всіх деталей вашої майбутньої квартири, офісу,
              ресторану.
            </p>
            <p>
              Маємо відділ по розробці предметного дизайну та брендінгу
              предметів вашої компанії. Разом з спеціалістом ви маєте змогу
              розробити дизайн ваших каталогів логотипів, візитних карток та
              іного. Ми надаємо зображення вашего дизайну на предметах та в
              форматі зручному для друку.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
