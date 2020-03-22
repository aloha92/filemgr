import React from 'react';
import os from 'os';
import fs from 'fs';



export default class App extends React.Component {


  clickHandler = () => {
    console.log('hello');
    console.log(os.hostname());

    fs.readdir("/tmp/", function (err, files) {
      if (err) {
        return console.error(err);
      }
      files.forEach(function (file) {
        console.log(file);
      });
    });
  }

  render() {
    return (
      <div className="App">
        Hello world<br></br>
        <button onClick={this.clickHandler}>clickme</button>
      </div>
    );
  }
}
