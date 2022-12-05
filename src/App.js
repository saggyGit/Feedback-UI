import './App.css';
import Header from './components/Header';
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {FeedbackContextProvider} from "./context/FeedbackContext"
 
function App() {

  return (
    <>
    <FeedbackContextProvider>
    <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats/>
        <FeedbackList/>
      </div>
      </FeedbackContextProvider>
      </>
  );
}

export default App;
