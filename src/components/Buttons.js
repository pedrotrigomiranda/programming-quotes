import React, { memo } from "react";

import QuoteBtn from "./QuoteBtn";
import TweetBtn from "./TweetBtn";

const styles = {
  buttons: {
    gridArea: "buttons",
    marginTop: 40
  }
};

const Buttons = (componentDidMount) => (
    <div className="buttons" style={styles.buttons}>
    <QuoteBtn componentDidMount={componentDidMount} />
    <TweetBtn  />
  </div>
)

export default memo(Buttons)