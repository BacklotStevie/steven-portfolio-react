import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header'
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={(props) => <HomePage {...props} />} />
      <Route exact path='/main' render={(props) => <MainPage {...props} />} />
    </div>
  );
}

export default App;
