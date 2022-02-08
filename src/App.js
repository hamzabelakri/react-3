import logo from './logo.svg';
import './App.css';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div> 
        <FullName />
        <Address />
        <ProfilePhoto />
    </div>
  );
}

export default App;
