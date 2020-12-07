import '../stylesheets/App.scss';
import NowPlayingBanner from './NowPlayingBanner.js';
import NowPlayingMain from './NowPlayingMain.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NowPlayingBanner />
      </header>
      <NowPlayingMain />
    </div>
  );
}

export default App;
