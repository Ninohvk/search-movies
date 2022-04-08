import React, { Component } from "react";
import { URL, API_KEY } from "../cons/omdbapi.cons";

export class SeachForm extends Component {
  state = { inputMovie: "" };
  onSearch = this.props.onSearch;

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;

    fetch(`${URL}?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((results) => {
        // Ahora se pueden definir valores por defecto en la
        // desestructuración en js, si el valor devuelto es undefined quedara con el valor por defecto
        const { Search = [], totalResults = "0" } = results;
        this.onSearch(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div className="control">
            <button className="button is-info">Seach</button>
          </div>
        </div>
      </form>
    );
  }
}
