import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';
import IntroSection from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App () {
  return (
    <div>
      <div className='myBackground' id="/">
        <NavigationBar/>

        <IntroSection/>
      </div>

      <div className='trending' id='trending'>
        <Trending/>
      </div>

      <div className='superhero' id='superhero'>
        <Superhero/>
      </div>
    </div>
  );
}

export default App;