import React, { memo } from 'react';

const styles = {
    button: {
      margin: 12,
    },
  };

const QuoteBtn = (componentDidMount) => (
   <button 
   style={styles.button}
   label="Next Quote"
   onClick={componentDidMount}>Next Quote</button>
);

/*
QuoteBtn.propTypes = {
    componentDidMount: PropTypes.func.isRequired,
  };
*/
export default memo(QuoteBtn)