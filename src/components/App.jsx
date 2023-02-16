import "../index.scss";
import user from '../user-info/user';
import data from "../user-info/data";
import Profile from './profile/Profile';
import Statistics from "./statistics/Statistics";

const App = () => {
  return (
    <div className="wrapper">
      {/* <Profile userData={user} /> */}
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
};

export default App;