import React, { memo } from 'react';

const styles = {
    button: {
      margin: 12,
    },
  };

const TweetBtn = (componentDidMount) => (
   <button 
   style={styles.button}
   label="Twitter"
   onClick={componentDidMount}>Twitter</button>
);

/*
TweetBtn.propTypes = {
    componentDidMount: PropTypes.func.isRequired,
  };*/

export default memo(TweetBtn)