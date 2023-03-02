import React from 'react'

function Contact() {
  return (
    <div className="titou">
    <div className='doudou'>
<h3>CONTACT</h3>
      <form action="" method="post" className="fomu" noValidate="novalidate">
      <div style={{display: 'none'}}>
      <input  type="hidden" name="wawa1" />
      <input  type="hidden" name="waw" />
      <input  type="hidden" name="waw3"/>
      <input  type="hidden" name="waw2"/>
      <input  type="hidden" name="waw4"/>
      <input  type="hidden" name="waw5" />
      <input  type="hidden" name="response" /></div><p id='papi'><label id="label"> Votre nom (obligatoire)<br /> <span className="wpcf7-form-control-wrap your-name"><input id="vie" type="text" name="your-name" size={40} className="wpcf7-form-control wpcf7-text" /></span> </label></p><p id='papi'><label> Votre email (obligatoire)<br /> <span className="wpcf7-form-control-wrap your-email">
        <input id="vie" type="email" name="your-email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" /></span> </label></p><p id='papi'><label> Votre Numero de téléphone (obligatoire)<br />
       <span className="number">
        <input id="vie" type="tel" name="your-number" size={40} className="eltel" />
       </span> </label></p>
       <p id='papi'><label id="label"> Date de l'évènement (obligatoire)<br /> 
       <span className="your-date">
        </span> </label></p><p id='papi'><label id="label"> Budget Décoration<br /><span className="wpcf7-form-control-wrap Budget">
          <select  id="la" name="Budget" className="validates">
            <option   value="380-500DT">380-500DT</option><option value="500-800DT">500-800DT</option><option value="800-1000DT">800-1000DT</option><option value="1100 et +">1100 et +</option></select></span> </label></p><p id='papi' >
              <label> Nombre invités (obligatoire)<br /><span className="Nombreinvits">
            <select id="la" name="Nombreinvits" className="select">
              <option  value="- 10 personnes">- 10 personnes</option>
              <option  value="10-50 personnes">10-50 personnes</option>
              <option value="+50 personnes">+50 personnes</option></select></span> </label></p>
              <p id='papi'><label> Prénom de l'enfant ou l'adulte pour l'évènement<br /> 
              <span className="party"><input id="vie" type="text" name="your-nameparty" size={40} className="form-control-text"  /></span> </label></p>
              <p id='papi'><label> Ville de l'évènement<br /> 
              <span className="city">
                <input type="text" id="vie" name="your-city" size={40} className=" wpcf7" /></span> </label></p>
                <p id='papi'><label> Votre Numero de téléphone<br /> <span className="wpcf7-form-control-wrap your-number">
                  <input id="vie" type="text" name="your-number" size={40} className="wpcf7"/></span> </label></p><p id='papi'><label> Sujet<br /> <span className=" your-subject"><input id="vie" type="text" name="your-subject" size={40} className="wpcf7-text"/></span> </label></p>
                  <p id='papi'><label> Votre message<br /> <span  className="wpcf7-form-control-wrap your-message">
                    <textarea name="your-message" cols={40} rows={10} className="textarea"  /></span> </label></p><p id='papi'><input type="submit" className="submit" /><span className="loader" /></p>
                    <div className="output" />
      </form>
      <div className="lopo">
<h3>INFORMATIONS</h3>
<div className="instagram">
<svg  id="inst"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
<h4>Téléphone</h4>
<p>75 360 693</p>
</div>
<div className="color">
<svg id="messaat" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
<h4>Email</h4>
<p>Neventsdecor@gmail.com</p>
</div>
      </div>
    </div>
    </div>
  )
}

export default Contact