import React from "react";

const SongDetail = (props) => {

  return (
    <div>
<ul className="display-list">
<li><b>Artist:</b> {props.song["im:artist"].label}</li>
   <li><b> Title: </b> {props.song["im:name"].label}</li>
   <li> <img className="pic-display" src={props.song["im:image"][2].label} />  </li>
   <hr/>
</ul>
     </div>
  );
}


export default SongDetail;
