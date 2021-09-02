import React from 'react';
import SignInCard from './component/SignInCard'
import NavigationBar from './component/NavigationBar'
import FooterBar from './component/FooterBar'
import tachyons from 'tachyons';
import backgroundImage from './img/girlBG.jpg';

class App extends React.Component {
  render() {
    const bodyStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: `cover`,
      margin: "0",
  }
    
    return (
      <div className='avenir vh-100 flex flex-column '>
        <div >
          <NavigationBar/>
        </div>
        <body style={bodyStyle}>
          <div className="fr w-50 pr5 pv6">
            <SignInCard/>
          </div>
        </body>
        <footer>
          <div>
            <FooterBar/>
          </div>
        </footer>
        
      </div>
    )
  }
}

export default App;
