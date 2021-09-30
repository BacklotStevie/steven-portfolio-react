import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header'
import HomePage from './pages/HomePage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={(props) => <HomePage {...props} />} />
    </div>
  );
}

export default App;
