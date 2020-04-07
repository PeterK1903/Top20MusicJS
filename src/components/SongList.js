import React, { Component } from "react";
import SongDetail from "./SongDetail";

class SongList extends Component {
  render(){
    const songNodes = this.props.songs.map(song => {
      return (
        <SongDetail song={song}>
        song.indexOf(song)
        </SongDetail>
      );
    });

    return (
      <div className="song-list">
      {songNodes}
      </div>
    )
  }
}

export default SongList;
