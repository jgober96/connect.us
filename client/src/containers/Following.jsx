import React from 'react';

import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import FollowEntry from './FollowEntry.jsx';
import {List} from 'material-ui/List';


const Following = (props) => {

  return (
  // console.log("Following container is called!");

    <List>
      {
        props.following
          ?
          props.following.map((follows) => {
            return <FollowEntry key={follows.id} follows={follows}/>;
          })
          :
          <Loading />
      }
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    following: state.following
  };
};


// export default Following;
export default connect(mapStateToProps)(Following);
