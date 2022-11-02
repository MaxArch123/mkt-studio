import "./services.scss";
import React, { useEffect } from "react";
import BigServiceCard from "./BigServiceCard";
import useScreenMediaQuery from "../../customHooks/useScreenMediaQuery";
import SimpleSlider from "./SimpleSlider";
import useISHeightSmall from "../../customHooks/useISHeightSmall";

export default function Services(props) {
  const { language } = props;
  const { isLessThan768 } = useScreenMediaQuery();
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
        document.querySelector("nav.top-nav").style.position = "fixed";
      }
    }
  }, [isSmall]);

  return (
    <>
      {language === "english" && (
        <section className="services">
          {isLessThan768 ? (
            <>
              <SimpleSlider
                language={language}
                title={"Design project"}
                rows={[
                  "Plans and views",
                  "Conceptual visualizations",
                  "Realistic renderings",
                  "Selection of finishing materials",
                  "Selection of furniture and lighting",
                  "Author supervision",
                ]}
                // min
                minCardTitle={"Minimal Pack"}
                rowsInMin={1}
                minTime={"3 - 5 weeks"}
                priceMin={12}
                // standart
                standartСardTitle={"Standart pack"}
                rowsInStandart={3}
                time={"5 - 8 weeks"}
                price={25}
                // max
                maxCardTitle={"Maximal pack"}
                maxTime={"4 - 10 months"}
                priceMax={55}
              />
              <SimpleSlider
                language={language}
                title={"Architect project"}
                rows={[
                  "General plan",
                  "Floor plans, roofs",
                  "Sections 2-3 pcs.",
                  "Facades",
                  "Realistic visualization",
                  "Installation and marking plans",
                  "Sections of relief, house 5-6 pcs.",
                  "Improvement of the territory",
                  "Information on filling window and door openings",
                  "Explication of floors, walls, etc.",
                  "Nodes",
                  "Volume of materials",
                  "Facades (passport of facades)",
                ]}
                // min
                minCardTitle={"Minimal Pack"}
                rowsInMin={5}
                minTime={"2 - 5 weeks"}
                priceMin={15}
                // standart
                standartСardTitle={"Standart Pack"}
                rowsInStandart={10}
                time={"3 - 10 weeks"}
                price={50}
                // max
                maxCardTitle={"Maximal Pack"}
                // maxTime={"4 - 10 months"}
                // priceMax={55}
              />
            </>
          ) : (
            <>
              <BigServiceCard
                language={language}
                title={"Design project"}
                rows={[
                  "Plans and views",
                  "Conceptual visualizations",
                  "Realistic renderings",
                  "Selection of finishing materials",
                  "Selection of furniture and lighting",
                  "Author supervision",
                ]}
                // min
                minCardTitle={"Minimal Pack"}
                rowsInMin={1}
                minTime={"3 - 5 weeks"}
                priceMin={12}
                // standart
                standartСardTitle={"Standart pack"}
                rowsInStandart={3}
                time={"5 - 8 weeks"}
                price={25}
                // max
                maxCardTitle={"Maximal pack"}
                maxTime={"4 - 10 months"}
                priceMax={55}
              />
              <BigServiceCard
                language={language}
                title={"Architect project"}
                rows={[
                  "General plan",
                  "Floor plans, roofs",
                  "Sections 2-3 pcs.",
                  "Facades",
                  "Realistic visualization",
                  "Installation and marking plans",
                  "Sections of relief, house 5-6 pcs.",
                  "Improvement of the territory",
                  "Information on filling window and door openings",
                  "Explication of floors, walls, etc.",
                  "Nodes",
                  "Volume of materials",
                  "Facades (passport of facades)",
                ]}
                // min
                minCardTitle={"Minimal Pack"}
                rowsInMin={5}
                minTime={"2 - 5 weeks"}
                priceMin={15}
                // standart
                standartСardTitle={"Standart Pack"}
                rowsInStandart={10}
                time={"3 - 10 weeks"}
                price={50}
                // max
                maxCardTitle={"Maximal Pack"}
                // maxTime={"4 - 10 months"}
                // priceMax={55}
              />
            </>
          )}
          <div className="services-note">
            <h3>
              *The price for graphic design projects and individual
              visualizations can be specified after discussing with us, the
              price and the deadline depends on the task.
            </h3>
          </div>
        </section>
      )}

      {language === "ukrainian" && (
        <section className="services">
          {isLessThan768 ? (
            <>
              <SimpleSlider
                language={language}
                title={"Дизайн проэкт"}
                rows={[
                  "Плани та розгортки",
                  "Концептуальні візуалізації",
                  "Реалістичні візуалізації",
                  "Підбір матеріалів оздоблення",
                  "Підбір меблів та освітлення",
                  "Авторський нагляд",
                ]}
                // min
                minCardTitle={"Мінімальний набір"}
                rowsInMin={1}
                minTime={"3 - 5 тижнів"}
                priceMin={12}
                // standart
                standartСardTitle={"Середній набір"}
                rowsInStandart={3}
                time={"5 - 8 тижнів"}
                price={25}
                // max
                maxCardTitle={"Максимальний набір"}
                maxTime={"4 - 10 місяців"}
                priceMax={55}
              />
              <SimpleSlider
                language={language}
                title={"Архітектурний проэкт"}
                rows={[
                  "Генеральний план",
                  "Плани поверхів, покрівлі",
                  "Перерізи 2-3 шт.",
                  "Фасади",
                  "Реалістична візуалізація",
                  "Плани монтажу та маркування",
                  "Перерізи рельєфу, будинку 5-6 шт.",
                  "Благоустрій території",
                  "Відомість заповнення віконних та дверних отворів",
                  "Експлікація підлог, стін тощо.",
                  "Вузли",
                  "Об'єм матеріалів",
                  "Фасади(Паспорт опорядження фасадів)",
                ]}
                // min
                minCardTitle={"Мінімальний набір"}
                rowsInMin={5}
                minTime={"2 - 5 тижнів"}
                priceMin={15}
                // standart
                standartСardTitle={"Середній набір"}
                rowsInStandart={10}
                time={"3 - 10 тижнів"}
                price={50}
                // max
                maxCardTitle={"Максимальний набір"}
                // maxTime={"4 - 10 місяців"}
                // priceMax={55}
              />
            </>
          ) : (
            <>
              <BigServiceCard
                language={language}
                title={"Дизайн проэкт"}
                rows={[
                  "Плани та розгортки",
                  "Концептуальні візуалізації",
                  "Реалістичні візуалізації",
                  "Підбір матеріалів оздоблення",
                  "Підбір меблів та освітлення",
                  "Авторський нагляд",
                ]}
                // min
                minCardTitle={"Мінімальний набір"}
                rowsInMin={1}
                minTime={"3 - 5 тижнів"}
                priceMin={12}
                // standart
                standartСardTitle={"Середній набір"}
                rowsInStandart={3}
                time={"5 - 8 тижнів"}
                price={25}
                // max
                maxCardTitle={"Максимальний набір"}
                maxTime={"4 - 10 місяців"}
                priceMax={55}
              />
              <BigServiceCard
                language={language}
                title={"Архітектурний проэкт"}
                rows={[
                  "Генеральний план",
                  "Плани поверхів, покрівлі",
                  "Перерізи 2-3 шт.",
                  "Фасади",
                  "Реалістична візуалізація",
                  "Плани монтажу та маркування",
                  "Перерізи рельєфу, будинку 5-6 шт.",
                  "Благоустрій території",
                  "Відомість заповнення віконних та дверних отворів",
                  "Експлікація підлог, стін тощо.",
                  "Вузли",
                  "Об'єм матеріалів",
                  "Фасади(Паспорт опорядження фасадів)",
                ]}
                // min
                minCardTitle={"Мінімальний набір"}
                rowsInMin={5}
                minTime={"2 - 5 тижнів"}
                priceMin={15}
                // standart
                standartСardTitle={"Середній набір"}
                rowsInStandart={10}
                time={"3 - 10 тижнів"}
                price={50}
                // max
                maxCardTitle={"Максимальний набір"}
                // maxTime={"4 - 10 місяців"}
                // priceMax={55}
              />
            </>
          )}
          <div className="services-note">
            <h3>
              *Ціну за проєкти графічного дизайну та окремих візуалізацій
              уточнювати за контактними даними, ціна та термін виконання
              залежить від завдання на проєктування
            </h3>
          </div>
        </section>
      )}
    </>
  );
}
