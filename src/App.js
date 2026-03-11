import logo from './logo.svg';
import './App.css';
import JSX from './Components/JSX';
import ClickEvents from './Components/ClickEvents';
import States from './Components/ClassBased/States';
import { PropsFunctional } from './Components/FuntionalBased/PropsFunctional';
import PropsClass from './Components/ClassBased/PropsClass';
import GetInputData from './Components/FuntionalBased/GetInputData';
import HideToggleButton from './Components/FuntionalBased/HideToggleButton';


function App() {
  return (
    <div className="App">
    {/* <JSX/>
    <ClickEvents/> */}


    {/* <States/> */}
    {/* <States/> */}

    {/* <PropsFunctional name='Fuzail' email = "fuzail12@gmail.com" pno = '23545346543'/> */}

    {/* <PropsClass name='Fuzail' /> */}
    {/* <GetInputData/> */}
    <HideToggleButton/>
    </div>
  );
}

export default App;
