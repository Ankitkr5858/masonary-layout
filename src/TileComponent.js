import React from "react";

class TileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    this.props.onClick(window.parseInt(this.props.height), this.props.color);
  }

  render() {
    return (
      <div
        style={{
          width: 200,
          height: this.props.height,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          textAlign: "center",
          borderColor: "white",
          borderWidth: 10,
          boxSizing: "content-box",
        }}
        onClick={this.onClicked}
      >
        <div
          style={{
            width: 190,
            height: this.props.height - 10,
            backgroundColor: this.props.color,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              margin: "auto 0",
            }}
          >
            {this.props.number}
          </span>
        </div>
      </div>
    );
  }
}

export default TileComponent;
