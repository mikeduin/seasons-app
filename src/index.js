import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    // This callback above is referred to as the 'success callback' as it gets called every time everything goes as planned
    (err) => console.log(err)
    // This is the error callback if something breaks
  );

  return (
    <div> Hi there! </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
