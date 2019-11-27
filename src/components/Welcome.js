import React, { Component } from 'react';
import './welcome.css';



function showFootball() {
  const tv = document.querySelector('.liveTV');
  tv.innerHTML = `<img src="../images/football.png" alt="football"/>`;
}


function showBaseball() {
  const tv = document.querySelector('.liveTV');
  tv.innerHTML = `<img src="../images/baseball.png" alt="football"/>`;
}

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1> Chose game to watch </h1>
        <div className="tvButtons">
          <div className="channel-1">
            <button onClick={showFootball}> FOOTBALL</button>
          </div>

          <div className="channel-2">
            <button onClick={showBaseball}> BASEBALL</button>
          </div>
        </div>
        <div className="liveTV">
          <img src="../images/tv.png" alt="" />
        </div>
      </div>
    )
  }
}

export default Welcome
