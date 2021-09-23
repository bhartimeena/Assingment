import React from "react";
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 50px auto 0 auto;
  border-color: black;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ClockLoader
          css={override}
          size={50}
          color={this.props.spinnerColor}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner
