import React from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    maxWidth: '37.7rem',

    card: {
      display: 'table',
      textAlign: 'center',
      alignItems: 'center !important',
      
      quote: {
        fontSize: '27px',
        fontWeight: '300',
        margin: 'auto',
        paddingLeft: '3rem',
        paddingTop: '1rem',
        paddingRight: '1rem',
        justifyContent: 'center'
      },
  
      title: {
        fontSize: '20px',
        paddingRight: '1rem',
        fontStyle: 'italic',
        fontWeight: '300',
        textAlign: 'right',
      }
    },

  }
};

const DisplayQuote = ({ author, quote }) => (
  <div className="content" style={styles.content}>
    <div className="card" style={styles.content.card}>
      <h1 className="quote" style={styles.content.card.quote}>
        {quote}
      </h1><br></br>
      <h2 className="title" style={styles.content.card.title}>
        {author}
      </h2>
    </div>
  </div>
);

DisplayQuote.defaultProps = {
  author: "Loading...",
  quote: "Loading..."
};

DisplayQuote.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string
};

export default DisplayQuote;
