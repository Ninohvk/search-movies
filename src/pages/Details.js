import { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "../hooks/router-hooks";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { URL, API_KEY } from "../cons/omdbapi.cons";

class Details extends Component {
  static propTypes = {
    router: PropTypes.shape({
      // Objeto que se recibe cuando se pasan parametros por ulr con react-router
      params: PropTypes.object,
    }),
  };

  state = { movie: {} };

  _fetchMovie = ({ id }) => {
    fetch(`${URL}?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log(movie);
        this.setState({ movie });
      });
  };

  _goBack = () => {
    window.history.back();
  };

  componentDidMount = () => {
    console.log(this.props);
    const { id } = this.props.router.params;
    this._fetchMovie({ id });
  };

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}

export default withRouter(Details);
