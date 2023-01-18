import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";

function Form() {
  return (
    <div>
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred"></div>
      <div
        class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
        style={{ color: "black" }}
      >
        <h2>
          <b>BIO DATA</b>
        </h2>
      </div>
      <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred"> </div>
      <div>
        <form>
          <label className="regular">
            NAME <span>*</span>
          </label>
          <div className="input-field">
            <input className="input-name" type="text" placeholder="First" />
            <input className="input-name" type="text" placeholder="Last" />
          </div>
          //email
          <div className="form-group">
            <label className="regular">
              {" "}
              EMAIL <span>*</span>{" "}
            </label>
            <div className="input-field">
              <input className="email" type="text" placeholder="E-mail" />
            </div>
          </div>
          //Phone
          <div className="form-group">
            <label className="regular">
              {" "}
              Phone Number <span>*</span>{" "}
            </label>
            <div className="input-field">
              <input
                className="phone"
                type="text"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>
          //Address
          <div className="form-group">
            <label className="regular">
              {" "}
              Address <span>*</span>{" "}
            </label>
            <div className="address-field1">
              <input
                type="text"
                className="form-address"
                placeholder="Line 1"
              />
            </div>
            <div className="address-field2">
              <input
                className="form-address"
                type="text"
                placeholder="Line 2"
              />
            </div>
          </div>
          <div className="city-field">
            <input className="form-city" type="text" placeholder="city" />
            <span>
              <input
                className="form-country"
                type="text"
                placeholder="country"
              />
            </span>
          </div>
          <div className="state-field">
            <input className="form-code" type="text" placeholder="Pin Code" />
            <span>
              <input className="form-state" type="text" placeholder="State" />
            </span>
          </div>
          //qualification
          <div className="form-group">
            <label className="regular">
              WRITE YOUR QUALIFICATION
              <span>*</span>
            </label>
            <div className="qualify-field">
              <input className="form-qualify" type="text" />
            </div>
          </div>
          //comment
          <div className="form-group">
            <label className="regular">
              COMMENT
              <span>*</span>
            </label>
            <div className="Comment-field">
              <textarea className="comment"></textarea>
            </div>
          </div>
          <div>
            <button type="submit"> Submit</button>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="table-responsive ">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name </th>
                <th>Email</th>
                <th>Phone </th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rual Octo</td>
                <td>Deban Steet</td>
                <td>Newyork</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Demark</td>
                <td>City Road.13</td>
                <td>Dubai</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Richa Deba</td>
                <td>Ocol Str. 57</td>
                <td>Berlin</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>James Cott</td>
                <td>Berut Road</td>
                <td>Paris</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Dheraj</td>
                <td>Bulf Str. 57</td>
                <td>Delhi</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>Maria James</td>
                <td>Obere Str. 57</td>
                <td>Tokyo</td>

                <td>
                  <a
                    href="#"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                    style={{ color: "#10ab80" }}
                  >
                    <i class="material-icons">&#xE417;</i>
                  </a>
                  <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    style={{ color: "red" }}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Form;
