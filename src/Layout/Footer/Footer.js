import React, { useRef, useState } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import telega from "../../assets/img/icons/telegram-brands.svg";
import whatsapp from "../../assets/img/icons/whatsapp-brands.svg";
import viber from "../../assets/img/icons/viber-brands.svg";
// import facebook from "../../assets/img/icons/f_logo_RGB-Blue_72.png";
import emailjs from "@emailjs/browser";

export default function Footer(props) {
  const { setLanguage, language } = props;
  //to add indicator on the contact form about status
  const [emailSent, setEmailSent] = useState();

  function hideItOn5sec() {
    const btn = document.querySelector(
      "#root > div > footer > div.contact-form > form > div > button"
    );
    const statusSpan = document.querySelector(
      "#root > div > footer > div.contact-form > form > div > span"
    );

    try {
      clearTimeout(delay5s);
    } catch (error) {}

    try {
      statusSpan.style.display = "flex";
    } catch (error) {}

    btn.style.display = "none";
    btn.disabled = "true";

    const delay5s = setTimeout(() => {
      const statusSpan = document.querySelector(
        "#root > div > footer > div.contact-form > form > div > span"
      );

      try {
        statusSpan.style.display = "none";
      } catch (error) {}

      btn.style.display = "inline";
      btn.disabled = "false";
    }, 5000);
  }

  //#region to use EmailJS
  const refFooterForm = useRef();

  const sendFooterForm = (e) => {
    e.preventDefault();
    setEmailSent("sending");
    emailjs
      .sendForm(
        "service_MKTcontact",
        "template_wnb51dm",
        refFooterForm.current,
        "WjZjaniKPgV0ht-n1"
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          setEmailSent(false);
          console.log(error);
        }
      );
    hideItOn5sec();
  };
  //#endregion

  return (
    <>
      {language === "english" && (
        <footer className="container">
          <div className="site-contact">
            <Link to="/">
              <img className="logo" src="./logo.png" alt="logo" />
            </Link>
            <h3 className="contacts-title">Our contacts</h3>
            <a className="phone" href="tel:+380681134780">
              +380681134780
            </a>
            <a className="email" href="mailto:mktstudio.design@gmail.com">
              mktstudio.design@gmail.com
            </a>
            <div className="social-links">
              <a
                className="telega"
                href="https://t.me/+380681134780"
                target={"_blank"}
              >
                <img src={telega} alt="MKT studio telegram" />
              </a>
              <a
                className="whatsapp"
                href="https://api.whatsapp.com/send/?phone=380681134780"
                target={"_blank"}
              >
                <img src={whatsapp} alt="MKT studio whatsapp" />
              </a>
              <a
                className="viber"
                href="viber://chat/?number=%2B380681134780"
                target={"_blank"}
              >
                <img src={viber} alt="MKT studio viber" />
              </a>
              {/* <a className="facebook" href="#">
                <img src={facebook} alt="MKT studio facebook" />
              </a> */}
            </div>
          </div>
          <div className="contact-form">
            <form ref={refFooterForm} onSubmit={sendFooterForm}>
              <label htmlFor="client-name">
                <h3>Let's work together!</h3>
              </label>
              <input
                name="name"
                id="client-name"
                type="text"
                placeholder="Your name"
              />
              <input name="email" type="text" placeholder="E-mail and phone" />
              <textarea
                name="message"
                className="text-area"
                placeholder="Tasks or questions"
              ></textarea>
              <div className="contact-form_status">
                {emailSent === "sending" ? (
                  <span className="contact-form_status-sending">
                    Sending...
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="yellow"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      />
                    </svg>
                  </span>
                ) : emailSent ? (
                  <span className="contact-form_status-ok">
                    Sent
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="green"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"
                      />
                    </svg>
                  </span>
                ) : emailSent === undefined ? (
                  ""
                ) : (
                  <span className="contact-form_status-error">
                    Error
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="green"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"
                      />
                    </svg>
                  </span>
                )}
                <button>Send</button>
              </div>
            </form>
          </div>
        </footer>
      )}

      {language === "ukrainian" && (
        <footer className="container">
          <div className="site-contact">
            <Link to="/">
              <img className="logo" src="./logo.png" alt="МКТ студія лого" />
            </Link>
            <h3 className="contacts-title">Контакти</h3>
            <a className="phone" href="tel:+380681134780">
              +380681134780
            </a>
            <a className="email" href="mailto:mktstudio.design@gmail.com">
              mktstudio.design@gmail.com
            </a>
            <div className="social-links">
              <a
                className="telega"
                href="https://t.me/+380681134780"
                target={"_blank"}
              >
                <img src={telega} alt="МКТ студія телеграм" />
              </a>
              <a
                className="whatsapp"
                href="https://api.whatsapp.com/send/?phone=380681134780"
                target={"_blank"}
              >
                <img src={whatsapp} alt="МКТ студія ватсапп" />
              </a>
              <a
                className="viber"
                href="viber://chat/?number=%2B380681134780"
                target={"_blank"}
              >
                <img src={viber} alt="МКТ студія вайбер" />
              </a>
              {/* <a className="facebook" href="#"  target={"_blank"}>
                <img src={facebook} alt="" />
              </a> */}
            </div>
          </div>
          <div className="contact-form">
            <form ref={refFooterForm} onSubmit={sendFooterForm}>
              <label htmlFor="client-name">
                <h3>Працюємо разом!</h3>
              </label>
              <input
                name="name"
                id="client-name"
                type="text"
                placeholder="Ваше ім'я"
              />
              <input name="email" type="text" placeholder="E-mail та телефон" />
              <textarea
                name="message"
                className="text-area"
                placeholder="Задача або питання"
              ></textarea>
              <div className="contact-form_status">
                {emailSent === "sending" ? (
                  <span className="contact-form_status-sending">
                    Відравка...
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="yellow"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      />
                    </svg>
                  </span>
                ) : emailSent ? (
                  <span className="contact-form_status-ok">
                    Відправлено
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="green"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"
                      />
                    </svg>
                  </span>
                ) : emailSent === undefined ? (
                  ""
                ) : (
                  <span className="contact-form_status-error">
                    Помилка
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="30"
                      fill="green"
                      viewBox="0 0 100 100"
                    >
                      <path
                        width="100%"
                        height="auto"
                        transform="scale(0.2)"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"
                      />
                    </svg>
                  </span>
                )}
                <button>Відправити</button>
              </div>
            </form>
          </div>
        </footer>
      )}
    </>
  );
}
