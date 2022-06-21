import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'

const App =  () => {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
    );
}

export default App;
