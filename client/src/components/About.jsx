import React, {PureComponent} from 'react';

export default class About extends PureComponent {
  render () {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Old School Games</h1>
        <p className="lead">Old School Games is a video game library meant for the old school gamers out there. I have a fairly large collection of video games made in the late 80s all the way up to the early 2000s. The bulk of my video game collection is made up of Nintendo 64 and Sega Genesis games, although I also have many games for the Nintendo Game Cube and Playstation 2. All of my games are in great condition, and include the original box, manual and inserts which are preserved in plastic containers for each game. I grew up playing the Nintendo 64 and it will always be my favorite console of all time.

        This app uses the MERN stack (MongoDB, Express.js, React-Redux and Node.js) and uses the Filestack API to store images. While it doesn't really have practical use for the average person, it can be used for individuals who want to see a visual representation of their video game collection displayed on their computer or mobile devices. You can add video games to the database, as well as add some information and cover art for them. This project was fun for me to create because it has a video game theme, font, and wallpapers and just looks great. While adding games to the database is not quite as fun as playing the actual games, it still fun to see your video game collection displayed on the screen.</p>
      </div>
    );
  }
}
