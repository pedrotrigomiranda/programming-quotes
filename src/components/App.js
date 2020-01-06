import React from "react";
import axios from "axios";

import DisplayQuote from "./DisplayQuote";
import Header from "./Header";

import "../styles/index.css";

const styles = {
  app: {
    height: '100vh',
    margin: '0 auto',
    display: 'table',
  },

  btnContainer: {
    display: 'flex',
    margin: 'auto',

    button: {
      justifyContent: 'center',
      padding: '11px 23px',
      height: '3rem',
      width: '10rem',
      fontSize: '1rem',
      fontColor: '#111426',
      fontFamily: 'Aldrich, sans-serif',
      textShadow: '0px -1px 0px #111426',
      boxShadow: 'inset 0px 1px 3px 0px #111426',
      borderRadius: '5px',
      margin: 'auto'
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      tweetURL: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
    this.play = this.play.bind(this)
  }

  async fetchData() {
    await axios
      .get("http://quotes.stormconsultancy.co.uk/random.json")

      .then(response => {
        const randomQuote = response.data;
        this.setState({
          quote: randomQuote.quote,
          author: randomQuote.author
        });
      })

      .then(() => {
        const url = `https://twitter.com/intent/tweet?text="${this.state.quote}"
          - ${this.state.author}.`;
        this.setState({
          tweetURL: url
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  tweetQuote() {
    window.open(this.state.tweetURL, "noopener");
  }

  componentDidMount() {
    this.fetchData();
  }
  
  play(){
    const audio = document.getElementById("audio");
    audio.play()
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div className="app" style={styles.app}>
        <Header />
        <DisplayQuote key={quote} state={quote} author={author} quote={quote}>
          {quote}
        </DisplayQuote>
        <div className="buttonContent" style={styles.btnContainer}>
          <button
            className="quoteBtn"
            onClick={this.fetchData}
            style={styles.btnContainer.button}
          >
            <audio id="audio">
              <source src="../src/paper-sound.mp3" type="audio/mpeg"></source>
            </audio>
            Get Quote
          </button>
          <button
            className="tweetBtn"
            style={styles.btnContainer.button}
            onClick={this.tweetQuote}
          >
            Tweet it!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
