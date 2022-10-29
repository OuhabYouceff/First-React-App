// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Container';

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    // <div className="row g-3">
    //   <img
    //     className="logo"
    //     src="https://icons.getbootstrap.com/assets/icons/person-circle.svg"
    //     alt="logo"
    //   ></img>

    //   <label className="label">First Name</label>
    //   <div className="col">
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="First name"
    //       aria-label="First name"
    //     ></input>
    //   </div>
    //   <label className="label">Last Name</label>
    //   <div className="col">
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Last name"
    //       aria-label="Last name"
    //     ></input>
    //   </div>
    //   <div>
    //         <label for="tel">tel</label>
    //         <input type="tel" id="tel" name="tel" maxlength="20" required placeholder="+216 24 383 894"></input>
    //     </div>
    // </div>

    <form className="div1" class="row g-3">
      <img
        className="logo"
        src="https://icons.getbootstrap.com/assets/icons/person-circle.svg"
        alt="logo"
      ></img>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4"></input>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4"></input>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">
          Address
        </label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        ></input>
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">
          Address 2
        </label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        ></input>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">
          City
        </label>
        <input type="text" class="form-control" id="inputCity"></input>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">
          State
        </label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">
          Zip
        </label>
        <input type="text" class="form-control" id="inputZip"></input>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
          ></input>
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default App;
