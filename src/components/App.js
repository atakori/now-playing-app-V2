import '../stylesheets/App.scss';
import MovieSearchForm from './MovieSearchForm.js';
import NowPlayingBanner from './NowPlayingBanner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NowPlayingBanner />
      </header>
      <MovieSearchForm />
    </div>
  );
}

export default App;
