import './App.css';
import FetchRepoHook from './components/FetchRepoHook';
import FetchRepoHoc from './components/FetchRepoHoc';

function App() {
  return (
    <div className="App">
      <FetchRepoHook/>
      <FetchRepoHoc/>
    </div>
  );
}

export default App;
