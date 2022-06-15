import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userData: null};
  }
  loadUserData(){
    this.setState({userData: null})
    this.fetchID = fetchUserData(this.props.username, (userData) => {
    this.setState({ userData });
    }); 
  }

  componentDidMount() {
    this.loadUserData();
  }
  // If you open a profile, then quickly return to the directory, then go to a different pet’s profile, there will be some jitter. (This requires some quick clicking.) Add a lifecycle method for when the component unmounts, and call cancelFetch(this.fetchID) inside.
  componentWillUnmount() {
    cancelFetch(this.fetchID)
  }
 //  If you click on a pet’s friends, only the username updates. We don’t fetch new data. when the component updates. If the username has changed (in other words, if this.props.username !== prevProps.username), we should do two things: Cancel the fetch currently in progress with cancelFetch(this.fetchID). Call this.loadUserData() again.
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
    cancelFetch(this.fetchID);
    this.loadUserData();
    }
  }

  render() {
    const isLoading = (this.state.userData === null ? true : false);
    const name = isLoading ? 'Loading...' : this.state.userData.name;
    const bio = isLoading ? 'sample' : this.state.userData.bio;
    const friends = isLoading ? [] : this.state.userData.friends;

    let className = 'Profile';
    if (isLoading) {
      className += 'loading';
    }

    return (
      <div className={className}>
  {/* update the user’s profile picture.*/}
        <div className="profile-picture">{!isLoading && (
    <img src={this.state.userData.profilePictureUrl} alt="" />
  )}</div>
        <div className="profile-body">
  {/* displaying the user’s name*/}
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}