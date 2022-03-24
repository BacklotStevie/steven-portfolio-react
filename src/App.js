import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={(props) => <HomePage {...props} />} />
      <Route exact path='/main' render={(props) => <MainPage {...props} />} />
      <Route exact path='/about' render={(props) => <AboutPage {...props} />} />
      <Route exact path='/work' render={(props) => <WorkPage {...props} />} />
      <Footer />
    </div>
  );
}

export default App;
