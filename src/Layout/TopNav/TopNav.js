import { React, useEffect, useState } from "react";
import "./topNav.scss";
import { Link } from "react-router-dom";
import useScreenMediaQuery from "../../customHooks/useScreenMediaQuery";
import useDocumentScrollY from "../../customHooks/useDocumentScrollY";
import useClickOutside from "../../customHooks/useClickOutside";
import Contact from "../../components/Contact";

export default function TopNav(props) {
  const { setLanguage, language } = props;
  const { isLessThan768, isMoreThan1200, isLessThan1200MoreThan768 } =
    useScreenMediaQuery();
  const scrolledY = useDocumentScrollY();
  const [openBurger, setOpenBurger] = useState(false);
  const [showTopNav, setShowTopNav] = useState(false);
  const [showContact, setShowContact] = useState(false);
  // const [language, setLanguage] = useState("english");

  useEffect(() => {
    if (scrolledY > 50) {
      if (showTopNav) return;
      setShowTopNav(true);
    } else {
      setShowTopNav(false);
      setOpenBurger(false);
    }
  }, [scrolledY]);

  // #region dropdown and burger button
  const dropdown = useClickOutside(() => {
    setOpenBurger(false);
  });

  function goToLinkCloseDropdown(e) {
    e.target.click();
    setOpenBurger(false);
  }
  // #region dropdown and burger button

  return (
    <>
      {language === "english" && (
        <>
          <nav
            className={`top-nav container ${showTopNav ? "top0" : "top-75"}`}
          >
            <Link to="/">
              <img className="logo" src="./logo.png" alt="logo" />
            </Link>

            {(isMoreThan1200 || isLessThan1200MoreThan768) && (
              <>
                <div
                  className="burger-box"
                  onClick={() => setOpenBurger(!openBurger)}
                >
                  <div
                    className={`burger-btn ${
                      openBurger ? "burger-active" : "burger-not-active"
                    }`}
                  >
                    <div className="title">Projects</div>
                    <div className="burger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`projects-dropdown ${
                    openBurger ? "flex" : "none"
                  }`}
                  ref={dropdown}
                >
                  <Link
                    to="/projects/interior_design"
                    onClick={goToLinkCloseDropdown}
                  >
                    Interior design
                  </Link>
                  <Link
                    to="/projects/architecture"
                    onClick={goToLinkCloseDropdown}
                  >
                    Architecture
                  </Link>
                  <Link
                    style={{ pointerEvents: "none", cursor: "default" }}
                    to="/projects/graphic_design"
                    onClick={goToLinkCloseDropdown}
                  >
                    Graphic Design (empty)
                  </Link>
                  <Link
                    style={{ pointerEvents: "none", cursor: "default" }}
                    to="/projects/visualisation"
                    onClick={goToLinkCloseDropdown}
                  >
                    Visualisation (empty)
                  </Link>
                  <Link
                    to="/projects/supervision"
                    onClick={goToLinkCloseDropdown}
                  >
                    Supervision
                  </Link>
                </div>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <a onClick={() => setShowContact(true)}>Contacts</a>
                <div className="language">
                  <a className="lang-en" onClick={() => setLanguage("english")}>
                    EN
                  </a>
                  /
                  <a
                    className="lang-ukr"
                    onClick={() => setLanguage("ukrainian")}
                  >
                    UA
                  </a>
                </div>
              </>
            )}

            {isLessThan768 && (
              <>
                <div className="burger-box">
                  <div
                    className={`burger-btn ${
                      openBurger ? "burger-active" : "burger-not-active"
                    }`}
                    onClick={() => setOpenBurger(!openBurger)}
                  >
                    <div className="title">Menu</div>
                    <div className="burger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`projects-dropdown ${
                    openBurger ? "flex" : "none"
                  }`}
                  ref={dropdown}
                >
                  Projects:
                  <div className="projects">
                    <Link
                      to="/projects/interior_design"
                      onClick={goToLinkCloseDropdown}
                    >
                      Interior design
                    </Link>
                    <Link
                      to="/projects/architecture"
                      onClick={goToLinkCloseDropdown}
                    >
                      Architecture
                    </Link>
                    <Link
                      style={{ pointerEvents: "none", cursor: "default" }}
                      to="/projects/graphic_design"
                      onClick={goToLinkCloseDropdown}
                    >
                      Graphic Design (empty)
                    </Link>
                    <Link
                      style={{ pointerEvents: "none", cursor: "default" }}
                      to="/projects/visualisation"
                      onClick={goToLinkCloseDropdown}
                    >
                      Visualisation (empty)
                    </Link>
                    <Link
                      to="/projects/supervision"
                      onClick={goToLinkCloseDropdown}
                    >
                      Supervision
                    </Link>
                  </div>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <a onClick={() => setShowContact(true)}>Contacts</a>
                  <div className="language">
                    <a
                      className="lang-en"
                      onClick={() => setLanguage("english")}
                    >
                      EN
                    </a>
                    /
                    <a
                      className="lang-ukr"
                      onClick={() => setLanguage("ukrainian")}
                    >
                      UA
                    </a>
                  </div>
                </div>
              </>
            )}
          </nav>
          {showContact && (
            <Contact
              toggleContact={() => setShowContact(false)}
              language={language}
            />
          )}
        </>
      )}
      {language === "ukrainian" && (
        <>
          <nav
            className={`top-nav container ${showTopNav ? "top0" : "top-75"}`}
          >
            <Link to="/">
              <img className="logo" src="./logo.png" alt="logo" />
            </Link>

            {(isMoreThan1200 || isLessThan1200MoreThan768) && (
              <>
                <div
                  className="burger-box"
                  onClick={() => setOpenBurger(!openBurger)}
                >
                  <div
                    className={`burger-btn ${
                      openBurger ? "burger-active" : "burger-not-active"
                    }`}
                  >
                    <div className="title">Проєкти</div>
                    <div className="burger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`projects-dropdown ${
                    openBurger ? "flex" : "none"
                  }`}
                  ref={dropdown}
                >
                  <Link
                    to="/projects/interior_design"
                    onClick={goToLinkCloseDropdown}
                  >
                    Дизайн інтер'єрів
                  </Link>
                  <Link
                    to="/projects/architecture"
                    onClick={goToLinkCloseDropdown}
                  >
                    Архітектура
                  </Link>
                  <Link
                    style={{ pointerEvents: "none", cursor: "default" }}
                    to="/projects/graphic_design"
                    onClick={goToLinkCloseDropdown}
                  >
                    Графічний дизайн (не заповнено)
                  </Link>
                  <Link
                    style={{ pointerEvents: "none", cursor: "default" }}
                    to="/projects/visualisation"
                    onClick={goToLinkCloseDropdown}
                  >
                    Візуалізація (не заповнено)
                  </Link>
                  <Link
                    to="/projects/supervision"
                    onClick={goToLinkCloseDropdown}
                  >
                    Авторський нагляд
                  </Link>
                </div>
                <Link to="/about">Про нас</Link>
                <Link to="/services">Послуги</Link>
                <a onClick={() => setShowContact(true)}>Контакти</a>
                <div className="language">
                  <a className="lang-en" onClick={() => setLanguage("english")}>
                    EN
                  </a>
                  /
                  <a
                    className="lang-ukr"
                    onClick={() => setLanguage("ukrainian")}
                  >
                    UA
                  </a>
                </div>
              </>
            )}

            {isLessThan768 && (
              <>
                <div className="burger-box">
                  <div
                    className={`burger-btn ${
                      openBurger ? "burger-active" : "burger-not-active"
                    }`}
                    onClick={() => setOpenBurger(!openBurger)}
                  >
                    <div className="title">Меню</div>
                    <div className="burger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div
                  className={`projects-dropdown ${
                    openBurger ? "flex" : "none"
                  }`}
                  ref={dropdown}
                >
                  Проєкти:
                  <div className="projects">
                    <Link
                      to="/projects/interior_design"
                      onClick={goToLinkCloseDropdown}
                    >
                      Дизайн інтер'єрів
                    </Link>
                    <Link
                      to="/projects/architecture"
                      onClick={goToLinkCloseDropdown}
                    >
                      Архітектура
                    </Link>
                    <Link
                      style={{ pointerEvents: "none", cursor: "default" }}
                      to="/projects/graphic_design"
                      onClick={goToLinkCloseDropdown}
                    >
                      Графічний дизайн (не заповнено)
                    </Link>
                    <Link
                      style={{ pointerEvents: "none", cursor: "default" }}
                      to="/projects/visualisation"
                      onClick={goToLinkCloseDropdown}
                    >
                      Візуалізація(не заповнено)
                    </Link>
                    <Link
                      to="/projects/supervision"
                      onClick={goToLinkCloseDropdown}
                    >
                      Авторський нагляд
                    </Link>
                  </div>
                  <Link to="/about">Про нас</Link>
                  <Link to="/services">Послуги</Link>
                  <a onClick={() => setShowContact(true)}>Контакти</a>
                  <div className="language">
                    <a
                      className="lang-en"
                      onClick={() => setLanguage("english")}
                    >
                      EN
                    </a>
                    /
                    <a
                      className="lang-ukr"
                      onClick={() => setLanguage("ukrainian")}
                    >
                      UA
                    </a>
                  </div>
                </div>
              </>
            )}
          </nav>
          {showContact && (
            <Contact
              toggleContact={() => setShowContact(false)}
              language={language}
            />
          )}
        </>
      )}
    </>
  );
}
