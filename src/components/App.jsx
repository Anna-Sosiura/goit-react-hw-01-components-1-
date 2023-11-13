// import { Profile, Statistics, FriendList, TransactionHistory,} from 'components';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        // margin: 'auto',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
        Profile
      </h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
        Statistics
      </h1>
      <Statistics title="Upload stats" stats={data} />
      <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
        FriendList
      </h1>
      <FriendList friends={friends[0]} />
      <FriendList friends={friends[1]} />
      <FriendList friends={friends[2]} />
      <FriendList friends={friends[3]} />
      <h1 style={{ marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
        TransactionHistory
      </h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};
