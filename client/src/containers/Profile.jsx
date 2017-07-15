import React from 'react';
import ProfileNotExists from '../components/ProfileNotExists.jsx';
import { Tabs, Tab } from 'react-bootstrap'
import { connect } from 'react-redux';
import Header from './header.jsx';
import Timeline from './Timeline.jsx';
import About from './About.jsx';
import Likes from './Likes.jsx'

class Profile extends React.Component {

  constructor (props) {
    super(props);
  }

  profileExists () {
    return this.props.username === this.props.user.username;
  }

  render () {
    return (
        <div className="container">
          {
            !this.profileExists() 
            ?
            <ProfileNotExists />
            :
            <div>
              <Header username={this.props.username} />
              <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                <Tab eventKey={1} title="Timeline">
                  <br />
                  <Timeline />
                </Tab>
                <Tab eventKey={2} title="About">
                  <br />
                  <About />
                </Tab>
                <Tab eventKey={3} title="Likes">
                  <br />
                  <Likes />
                </Tab>
              </Tabs>
            </div>
          }
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);