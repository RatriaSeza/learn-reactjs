import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile'

function App() {
  return (
    <div>
      <Profile/>
      <Introduction name="Ratria"/>
      <Introduction name="Seza"/>
    </div>
  );
}

export default App;
