import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null

    };
  }


  // React says we have to define render!! This is a requiremement in every React component
  render () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      // This callback above is referred to as the 'success callback' as it gets called every time everything goes as planned
      (err) => console.log(err)
      // This is the error callback if something breaks
    );

    return (
      <div> Latitude: </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
