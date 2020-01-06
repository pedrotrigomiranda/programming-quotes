import React from "react";

const styles = {
  header: {
    width: '100vh',
    height: '7rem',
    textAlign: 'center',
    alignItems: 'center',
    padding: '2rem 2rem 2rem 2rem',

    title: {
      color: '#FFFF00',
      fontWeight: '600',
      fontSize: '50px',
    }
  }
};

const Header = () => (
  <div className="header" style={styles.header}>
    <p className="title" style={styles.header.title}>
      Programming Quote
    </p>
  </div>
);

export default Header;
