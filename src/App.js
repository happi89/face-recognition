import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition />  */}
      </div>
    );
  }
}

export default App;
