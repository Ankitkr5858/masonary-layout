import React from 'react';
import TileComponent from './TileComponent';

class TileColumn extends React.Component {
  tiles = [];
  constructor(props) {
    super(props)

    let rowHeight = 0;
    let i = 0;
    while (rowHeight < window.innerHeight) {
      let tileHeight = 100 + 200 * Math.random();
      if (rowHeight + tileHeight > window.innerHeight) {
        tileHeight = window.innerHeight - rowHeight;
      }
      rowHeight += tileHeight;
      let color = 'rgb(' + window.parseInt(Math.random() * 255) + ',' + window.parseInt(Math.random() * 255) + ',' + window.parseInt(Math.random() * 255) + ')';
      this.tiles[i] = <TileComponent height={tileHeight} color={color} onClick={this.props.onClick} />
      i++;
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.tiles}
      </div>
    );
  }
}

export default TileColumn;