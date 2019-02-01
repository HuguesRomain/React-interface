import React, { Fragment, Component } from 'react'; 
import LogoApp from './LogoApp'; 

class Bottom extends Component {
  render() {
    return(
      <div className='Bottom'>
      <div className='Bottom__app'>
      <LogoApp />
      <LogoApp />
      <LogoApp />
      <LogoApp />
      </div>
      </div>
    );
  }
}

export default Bottom;