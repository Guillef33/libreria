import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contacto() {

  function sendEmail (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_iurxj7h",
        e.target,
        "user_vqPFxAk62xt1529ZNfLfd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };


  return (
    <>
      <div className="title">
        <h1>Pagina Contacto</h1>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label for="nameImput">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="nameImput"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="emailImput">Emails</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="emailImput"
              placeholder="email@domain.com"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default Contacto;
