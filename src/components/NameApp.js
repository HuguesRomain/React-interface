import React, { Fragment, Component } from 'react'

const apps = {
  app1: {
    name: 'Messenger',
  },
  app2: {
    name: 'YouTube',
  },
  app3: {
    name: 'Pinterest',
  },
  app4: {
    name: 'Discord',
  },
  app5: {
    name: 'Steam',
  },
  app6: {
    name: 'Snapchat',
  },
  app6: {
    name: 'Twitter',
  },
  app7: {
    name: 'Instagram',
  },
  app8: {
    name: 'Amazon',
  },
  app9: {
    name: 'WhatsApp',
  },
  app10: {
    name: 'Reddit',
  },
  app11: {
    name: 'LinkedIn',
  },
  app12: {
    name: 'Netflix',
  },
  app13: {
    name: 'Facebook',
  },
  app14: {
    name: 'Tinder',
  },
  app15: {
    name: 'SoundCloud',
  },
  app16: {
    name: 'Dribbble',
  },
  app17: {
    name: 'Uber',
  },
  app18: {
    name: 'PayPal',
  },
  app19: {
    name: 'Calm',
  },
  app20: {
    name: 'test',
  },
  app21: {
    name: 'test',
  },
  app22: {
    name: 'test',
  },
  app23: {
    name: 'test',
  },
}

class NameApp extends Component{
  state = {
    apps,
    }
  render(){
   const { apps } = this.state;


    const AppInterface = Object.keys(apps)
    .map(i  => (
       <Fragment key={i}> {apps[i].name} </Fragment>
    ))

      {for(var i = 0; i < AppInterface.length; i++){
        var AppNameInterface = AppInterface[i];
      }}

    return(
    <div className='nameApp'> { AppNameInterface } </div>
    )
  }
}

export default NameApp;