import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import FloatingMenu from './components/FloatingMenu';
import Search from './components/Search';
import FullMoviePage from './components/FullMoviePage';
import LiveMovie from './components/LiveMovie';
import Loading from './components/Loading';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#333633');
    axios.get(`https://sahilflix-backend-api.onrender.com/`)
      .then(res => console.log(res))
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Loading />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/liveMovie" component={LiveMovie} />
          <Route exact path="/fullpage" component={FullMoviePage} />
        </Switch>


        <FloatingMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
