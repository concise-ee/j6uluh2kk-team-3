import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Header'
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'
import Hakk from './Kaur';
import Margus from './Margus';
import Anti from './Anti';
import Allan from './Allan';
import Rene from './Rene';
import Kurmo from './Kurmo';
import Kaur from './Kaur';

class App extends Component {

  state = {
    christmas: {}
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
  }

  render() {

    return (
      <>
       <Margus />
       <Anti />
       <Allan />
       <Rene />
       <Kurmo />
       <Kaur />
      </>
    )
  }
}

export default App;