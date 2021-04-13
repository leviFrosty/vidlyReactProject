import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "./../services/fakeGenreService";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().integer().min(0).max(5).required().label("Rate"),
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          <select className="custom-select" id="genre">
            <option defaultValue="selected"></option>
            {getGenres().map((genre) => {
              return <option key={genre._id}>{genre.name}</option>;
            })}
            ;
          </select>
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate", "number")}
          <button
            disabled={this.validate()}
            onClick={() => this.props.history.push("/movies")}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NewMovie;
