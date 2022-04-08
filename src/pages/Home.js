import { Title } from "../components/Title";
import { SeachForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList.txt";

import React, { Component } from "react";

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  _handleSearch = (results) => {
    this.setState({ results, usedSearch: true });
    console.log("_handleSearch", this.state.results);
  };

  _renderResults = () =>
    this.state.results.length === 0 ? (
      <p>Sorry 😢 Results not found </p>
    ) : (
      <MoviesList movies={this.state.results} />
    );

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SeachForm onSearch={this._handleSearch} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}
