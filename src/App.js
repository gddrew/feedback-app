import React from 'react';

function App() {
  // JSX
  return (
    <div className='container'>
      <h1>My App</h1>
      <p>Hello World!</p>
    </div>
  );

  // Javascript - it can get messy, that's why we use JSX
  // return React.createElement(
  //   'div',
  //   { className: 'container' },
  //   React.createElement('h1', {}, 'My App'),
  //   React.createElement('p', {}, 'Hello World!')
  // );
}
export default App;
