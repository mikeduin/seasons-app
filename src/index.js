import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setstate!!!
        this.setState({ lat: position.coords.latitude })

        // DO NOT DO THIS!!!
        // this.state.lat = position.coords.latitude
        // The only exception to this is when we initialize our constructor function
      },
      (err) => {
        this.setState({
          errorMessage: err.message
        })
      }
    );
  }

  // React says we have to define render!! This is a requiremement in every React component
  render () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>;
    }
    return <div> Loading! </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
