import React, {Component} from 'react';
import Film from './Film.js';

export default class FilmList extends Component {
  render(){

    const filmNodes = this.props.data.map((film) => {
      return <Film
        key={film.id}
        name={film.name}
        url={film.url}
      />
    });

    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }

}
