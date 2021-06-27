import LogoTypeSelection from './components/LogoTypeSelection';
import TabMenu from './components/TabMenu'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <LogoTypeSelection />
      <div id="menu">
        <TabMenu />
      </div>
    </div>
  );
}

export default App;
