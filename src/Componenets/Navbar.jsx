import React from "react";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useDispatch } from "react-redux";
import {setSearch} from "../slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div>
              <h4 className="text-muted">
                {new Date().toUTCString().slice(0, 16)}
              </h4>
              <h2 className="fw-bold">Flavoro Foods</h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
            <input
                     type="search"
                     name="search"
                     id=""
                     placeholder="Search here"
                     autoComplete="off"
                     onChange={(e) => dispatch(setSearch(e.target.value))}
                 className="form-control serach-bar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
