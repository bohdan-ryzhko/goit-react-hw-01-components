import "../../node_modules/node-normalize-scss/index";
import "../index.scss";
import user from '../user-info/user';
import data from "../user-info/data";
import friends from "../user-info/friends";
import Profile from './profile/Profile';
import Statistics from "./statistics/Statistics";
import FriendList from "./friend-list/FriendList";

const App = () => {
  return (
    <div className="wrapper">
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;