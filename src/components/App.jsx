import "../index.scss";
import user from '../user-info/user';
import Profile from './profile/Profile';

const App = () => {
  return (
    <div className="wrapper">
      <Profile userData={user} />
    </div>
  );
};

export default App;