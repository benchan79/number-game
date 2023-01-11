import React from "react";

const styles = {
  marginLeft: 20,
  fontSize: 25
};

export default function About() {
  return (
    <div style={styles}>
      <p>
        Testing .env
        {process.env.NODE_ENV === 'development' && <h3>{process.env.REACT_APP_DEVTMESSAGE}</h3>}
        {process.env.NODE_ENV === 'production' && <h3>{process.env.REACT_APP_PRODMESSAGE}</h3>}
      </p>
    </div>
  );
}