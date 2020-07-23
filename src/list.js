import React from "react";
import { connect } from "react-redux";
import { array } from "./redux/department/actions";
import logo from "./logo.svg";
import TileComponent from "./TileComponent";
import TileColumn from "./TileColumn";
import "./App.css";
class List extends React.Component {
  tileRows = [];
  heightTile = 0;
  colorTile = "";
  dynamicPadding = 0;
  timerId = 0;
  number = 0;

  constructor(props) {
    super(props);

    this.state = {
      mbAnimation: false,
      progress: 0,
      g: false,
    };

    this.tileClicked = this.tileClicked.bind(this);
    // this.animationFinished = this.animationFinished.bind(this);

    let rowCount = window.parseInt(window.innerWidth / 200);
    this.dynamicPadding = (window.innerWidth - rowCount * 200) / 2;

    let i;
    // we calculate the number of possible columns according to the user's screen
    for (i = 0; i < rowCount; i++) {
      let tiles = [];
      let rowHeight = 0;
      let i = 0;
      // this while allows us to have the exact cards number possibleaccording to the user's screen for each columns
      while (rowHeight < window.innerHeight) {
        this.number = this.number + 1;
        let tileHeight = 100 + 200 * Math.random();
        if (rowHeight + tileHeight > window.innerHeight) {
          tileHeight = window.innerHeight - rowHeight;
        }
        rowHeight += tileHeight;
        let color =
          "rgb(" +
          window.parseInt(Math.random() * 255) +
          "," +
          window.parseInt(Math.random() * 255) +
          "," +
          window.parseInt(Math.random() * 255) +
          ")";
        tiles[i] = (
          <TileComponent
            height={tileHeight}
            color={color}
            number={this.number}
            onClick={this.tileClicked}
          />
        );
        i++;
      }
      this.tileRows.push(tiles);
    }
  }

  // This function allows us to see the card that we have selected
  tileClicked(height, color) {
    this.heightTile = height;
    this.colorTile = color;
    if (this.state.g == false) {
      this.setState({ progress: 0 });
    } else {
      this.setState({ progress: 100 });
    }
    this.setState({ g: !this.state.g });
    this.timerId = setInterval(() => this.tick(), 100);
  }

  //This function allows us to fix the animation delay
  tick() {
    let prevProg = this.state.progress;
    if (this.state.g) {
      this.setState({ mbAnimation: true });
      if (prevProg == 500) {
        this.setState({ progress: 100 });
        return;
      }
      this.setState({ progress: prevProg + 5 });
    } else {
      console.log(prevProg);
      if (prevProg == 0) {
        this.setState({ progress: 0, mbAnimation: false });
        clearInterval(this.timerId);
        return;
      }
      this.setState({ progress: prevProg - 10 });
    }
  }

  render() {
    let aw = 0;
    let ah = 0;
    if (this.state.g) {
      aw = 200 + ((window.innerWidth - 200) * this.state.progress) / 50;
      ah =
        this.heightTile +
        ((window.innerHeight - this.heightTile) * this.state.progress) / 50;
    } else {
      if (this.state.progress <= 50) {
        this.props.array(this.tileRows);
        console.log(this.props.arrays);
        aw =
          window.innerWidth -
          ((window.innerWidth - 200) * (this.state.progress - 50)) / 50;
        ah =
          window.innerHeight -
          ((window.innerHeight - this.heightTile) *
            (this.state.progress - 50)) /
            50;
      }
    }

    return (
      <div
        className='App'
        style={{
          paddingLeft: this.dynamicPadding,
          paddingRight: this.dynamicPadding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {this.tileRows.map((item) => (
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {item}
          </div>
        ))}
        {this.state.mbAnimation && (
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(50, 50, 50, 0.8)",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              margin: 0,
            }}
            onClick={this.tileClicked}
          >
            <div
              style={{
                backgroundColor: "rgba(50, 50, 50, 0.8)",
                width: "90%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                margin: 0,
              }}
            >
              <div
                style={{
                  width: aw,
                  height: ah,
                  backgroundColor: this.colorTile,
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  array: (item) => dispatch(array(item)),
});

const mapStateToProps = ({ reducer: { arrays } }) => ({
  arrays,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
