import React from "react"

import "./form.css"

export default props => (
  <form
    className="contact-form"
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <h3>{props.courseTitle}</h3>
      <select name="products" id="products-select" required multiple>
        <option selected="default">Select</option>
        <option value={props.productOne[0]}>
          {props.productOne[0]} | {props.productOne[1]} | {props.productOne[2]}
        </option>
        <option value={props.productTwo[0]}>
          {props.productTwo[0]} | {props.productTwo[1]} | {props.productTwo[2]}
        </option>
        <option value={props.productThree[0]}>
          {props.productThree[0]} | {props.productThree[1]} |
          {props.productThree[2]}
        </option>
        <option value={props.productFour[0]}>
          {props.productFour[0]} | {props.productFour[1]} |
          {props.productFour[2]}
        </option>
        <option value={props.productFive[0]}>
          {props.productFive[0]} | {props.productFive[1]} |
          {props.productFive[2]}
        </option>
      </select>
      <label htmlFor="products-select">Products</label>
    </div>

    <div className="section">
      <h3>{props.courseInfoTitle}</h3>
      <div>
        <input type="text" name="student-name" id="student-name" />
        <label htmlFor="student-name">
          Student Name / Nombre del estudiante
        </label>
      </div>
      <div>
        <input type="text" name="parent-name" id="parent-name" />
        <label htmlFor="parent-name">Parent Name / Nombre de los padres</label>
      </div>
      <div>
        <input required type="email" name="email" id="email" />
        <label htmlFor="email">email</label>
      </div>
    </div>
    <div>
      <select
        name="has-taken-drivers-ed"
        id="has-taken-drivers-ed"
        required
        multiple
      >
        <option value="" selected="selected">
          Select / Seleccione
        </option>
        <option value="yes">Yes / Si</option>
        <option value="no">No</option>
        <option value="not-applicable">Not Applicable / No aplica</option>
      </select>
      <label htmlFor="has-taken-drivers-ed">
        Has the student taken in-class drivers education, and can you provide
        proof of completion? **Only Teens <br /> ¿Ha tomado el estudiante
        educación para conductores en su clase y puede proporcionarle
                prueba de finalización? ** Solo adolescentes
      </label>
      <div>
        <input type="text" name="student-cell" id="student-cell" />
        <label htmlFor="student-cell">Student Cell / Estudiantes Celular</label>
      </div>
      <div>
        <input type="text" name="parent-cell" id="parent-cell" />
        <label htmlFor="parent-cell">Parent Cell / Padres Celular</label>
      </div>
      <div>
        <input type="text" name="address-line-1" id="address-line-1" />
        <label htmlFor="address-line-1">Address 1 / Dirección 1</label>
        <input type="text" name="address-line-2" id="address-line-2" />
        <label htmlFor="address-line-2">Address 2 / Dirección 2</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="city">City / Ciudad</label>
        <div className="section">
          <select className="state" id="state" name="state" required>
            <option value="" selected="default">
              Select / Seleccione
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <label htmlFor="state">State / Estado</label>
          <div></div>
          <div className="section">
            <select id="how-many-hours" name="how-many-hours" required multiple>
              <option value="" selected="selected">
                Select / Seleccione
              </option>
              <option value="0-hours">0 Hours / Horas</option>
              <option value="5-10-hours">5 to 10 Hours / Horas</option>
              <option value="10-20-hours">10 to 20 Hours / Horas</option>
              <option value="20-hours">20+ Hours / Horas</option>
              <option value="20-hours">
                Completed The 45hr Journal – Teenagers / Completado La Revista
                De 45 Horas – Adolescentes
              </option>
            </select>
            <label htmlFor="how-many-hours">
              Please identify the number of hours you have driven so far? /
              ¿Identifica el número de horas que ha conducido hasta ahora?
            </label>
          </div>
        </div>
        <div>
          <select id="desired-times" name="desired-times" required>
            <option selected="default">Select / Seleccione</option>
            <option value="session-1">Session / Sesión 1: 6am - 10am</option>
            <option value="session-2">Session / Sesión 2: 10am - 2pm</option>
            <option value="session-3">Session / Sesión 3: 2pm - 6pm</option>
            <option value="session-4">Session / Sesión 4: 6am - 6pm</option>
            <option value="session-5">Flexible</option>
          </select>
          <label htmlFor="desired-times">
            Desired Times / Tiempos Deseados
          </label>
        </div>
      </div>
      <div className="section">
        <select id="days" name="days" required multiple>
          <option value="" selected="selected">
            Select / Seleccione
          </option>
          <option value="monday">Monday / Lunes</option>
          <option value="tuesday">Tuesday / Martes</option>
          <option value="wednesday">Wednesday / Miércoles</option>
          <option value="thursday">Thursday / Jueves</option>
          <option value="friday">Friday / Viernes</option>
          <option value="saturday">Saturday / Sábado</option>
          <option value="sunday">Sunday / Domingo</option>
        </select>
        <label htmlFor="days">Days / Dias</label>
      </div>
      <div>
        <input type="text" name="reference" id="reference" />
        <label htmlFor="reference">
          How did you hear about our school? | ¿Cómo se enteró de nuestra
          escuela?
        </label>
      </div>
      <div>
        <h3>{props.coursePaymentOptionTitle}</h3>
        <select id="payment" name="payment" required>
          <option value="" selected="selected">
            Select / Seleccione
          </option>
          <option value="check">Check / Cheque</option>
          <option value="credit">Credit / Crédito</option>
          <option value="cash">Card / Tarjeta</option>
        </select>
        <label htmlFor="payment">Payment / Pago</label>
      </div>
      <div>
        <label htmlFor="signature">
          <h3>{props.termsTitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: props.agreement }} />
        </label>
        <input type="text" name="signature" id="signature" required />
        <p>Signature / Firma</p>
      </div>
      <div>
        <input type="date" name="date" id="date" required />
        <label htmlFor="date">Date / Fecha</label>
      </div>
    </div>
    <div className="section">
      <input
        style={{ marginRight: "10px" }}
        className="btn"
        type="submit"
        value={props.registrationSubmit}
      />
      <input className="btn" type="reset" value={props.eraserSubmit} />
    </div>
  </form>
)
