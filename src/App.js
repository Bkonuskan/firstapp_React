import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn.js';

function Logom(props) {
  const myPic=<img src={logo} width={250} height={250} alt='Logo'  />;
  return myPic;
}
function App(props) {
   return (
   <div>
   <h1>{props.title}</h1>
   <Logom />
   <Btn />
   </div>
   );
}

export default App;
