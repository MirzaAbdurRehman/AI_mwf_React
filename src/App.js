import logo from './logo.svg';
import './App.css';
import JSX from './Components/JSX';
import ClickEvents from './Components/ClickEvents';
import States from './Components/ClassBased/States';
import { PropsFunctional } from './Components/FuntionalBased/PropsFunctional';
import PropsClass from './Components/ClassBased/PropsClass';
import GetInputData from './Components/FuntionalBased/GetInputData';
import HideToggleButton from './Components/FuntionalBased/HideToggleButton';
import FormHandling from './Components/FuntionalBased/FormHandling';
import FormValidation from './Components/FuntionalBased/FormValidation';
import AllComponentsDemo from './Components/MUI/FirstComponent';
import ProfileDashboard from './Components/MUI/SecondComponent';
import FeedbackDemo from './Components/MUI/Feedback';
import SurfacesDemo from './Components/MUI/Pagination';
import LayoutDemo from './Components/MUI/Layout';
import QuizApp from './Components/MUI/Quiz';
import LifeCycle from './Components/LifeCycleFunction/LifeCycle';
import Search from './Components/LifeCycleFunction/Search';
import GetApi from './ApiFetchData/GetApi';



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
    {/* <HideToggleButton/> */}
    {/* <FormHandling/> */}

    {/* <FormValidation/> */}
    <GetApi/>
    </div>
  );
}

export default App;
