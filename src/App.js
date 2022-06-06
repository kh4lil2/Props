import logo from './logo.svg';
import './App.css';
import Profil from './Profile/profil';
import image from './Profile/img.jpg'
function App() {
  var bio="Welcome to my profil"; var profession="I'am a Web Developer"; var fullName="Khalil Rafrafi"; 
  return (
    <div className='back'>
    <div className="App">
     <Profil fullName={fullName} bio={bio} profession={profession} image={image}/>
    
    </div>
    </div>
  );
}

export default App;
