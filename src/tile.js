import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Tile extends React.Component {
  tiles = [];
  color = "";
  constructor(props) {
    super(props);
    // The props.arrays is a bidimensional array so we tiles, a simple array to save all props.arrays' data.
    //then we can know the exact psition  for each element.
    this.props.arrays.map((item) => {
      item.map((tile) => {
        this.tiles.push(tile.props);
      });
    });
  }

  render() {
    return (
      <Link
        to='/'
        style={{
          display: "block",
          backgroundColor: this.tiles[this.props.match.params.place - 1].color,
          margin: " 20px auto",
          transform: "scale(1.1)",
          transition: "transform 13s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
          width: "700px",
          height: "700px",
        }}
      ></Link>
    );
  }
}

const mapStateToProps = ({ reducer: { arrays } }) => ({
  arrays,
});
export default connect(mapStateToProps)(Tile);
