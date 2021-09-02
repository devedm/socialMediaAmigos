import React from 'react';
import SignInCard from './component/SignInCard'
import NavigationBar from './component/NavigationBar'
import tachyons from 'tachyons';

class App extends React.Component {
  render() {
    return (
      <div className='avenir'>
        <NavigationBar/>
        <SignInCard/>
      </div>
    )
  }
}

export default App;
