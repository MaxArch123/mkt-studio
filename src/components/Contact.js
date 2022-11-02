import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact(props) {
  //to add indicator on the contact form about status
  const [emailSent, setEmailSent] = useState();
  const { toggleContact, language } = props;

  function delay3sec() {
    const btn = document.querySelector(
      "#root > div > div > form > div > button"
    );

    try {
      clearTimeout(delay3);
    } catch (error) {}

    console.log("start");
    btn.disabled = true;

    const delay3 = setTimeout(() => {
      console.log("end");
      btn.disabled = false;
    }, 3000);
  }

  //#region to use EmailJS
  const refContactForm = useRef();

  const sendContactForm = (e) => {
    e.preventDefault();
    setEmailSent("sending");
    emailjs
      .sendForm(
        "service_MKTcontact",
        "template_1tj884q",
        refContactForm.current,
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
    delay3sec();
  };
  //#endregion

  return (
    <>
      {language === "english" && (
        <div className="contact-modal">
          <div className="overlay" onClick={toggleContact}></div>
          <form ref={refContactForm} onSubmit={sendContactForm}>
            <label htmlFor="question">Don't waste your time, ask us:</label>
            <textarea
              name="message"
              id="question"
              rows="3"
              placeholder="What you want to know?"
              required
            ></textarea>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="What's your name?"
              required
            />
            <input
              type="text"
              name="email"
              id="answer"
              placeholder="E-mail, to get an answer"
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone to discuss"
            />

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
      )}
      {language === "ukrainian" && (
        <div className="contact-modal">
          <div className="overlay" onClick={toggleContact}></div>
          <form ref={refContactForm} onSubmit={sendContactForm}>
            <label htmlFor="question">Не витрачайте свій час, спитайте:</label>
            <textarea
              name="message"
              id="question"
              rows="3"
              placeholder="Що бажаете дізнатись?"
              required
            ></textarea>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Як до вас звертатись?"
              required
            />
            <input
              type="text"
              name="email"
              id="answer"
              placeholder="E-mail, щоб отримати відповідь"
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Телефон для діалогу"
            />
            <div className="contact-form_status">
              {emailSent === "sending" ? (
                <span className="contact-form_status-sending">
                  Відправка...
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
      )}
    </>
  );
}
