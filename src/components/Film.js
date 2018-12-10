import React, {Component, Fragment} from 'react';

export default class Film extends Component {
  render(){
    return(
      <Fragment>
        <ol>Film Title: <a href={this.props.url}>{this.props.name}</a></ol>
      </Fragment>
    )
  }
}
