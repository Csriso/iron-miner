
<p align="center">
  <img src="https://github.com/Csriso/iron-miner/blob/main/banner.png?raw=true" />
</p>


# Iron-Miner

2D game 16 bits sprite game for the first proyect of IronHack.


## Screenshots

![App Screenshot](https://github.com/Csriso/iron-miner/blob/main/screenshot.png?raw=true)

![App Screenshot](https://github.com/Csriso/iron-miner/blob/main/screenshot2.png?raw=true)

## MVP

- Add basic collisions. ✔️

- Add enemies that spawn at randomly locations. ✔️

- Enemies follow you and can attack you. ✔️

- Player can attack enemies and mine ores. ✔️
 
- Player animations of idle, walk and attack. ✔️
 
- Enemies animations of walk. ✔️
 
- Enemies run to your position to damage you. ✔️
 
- Iron ores spawn at random location and you get coins if you mine them. ✔️
 
- Sounds/music. ✔️

## Backlog

- Shop to improve health and attributes.✔️

- Local leaderboard.✔️

- Improve collisions.

- Add a boss and new enemies


## Proyect layout

`main.js -> startgame and gameLoop`

`assetsInit.js -> initialization of images and audios`

`Player.js -> main character class`

`Enemy.js -> enemies class`

`MapObject.js -> ore, heart and coin creator class`

`MapCollision.js -> collision class to save collision points of the player`

`soundController.js -> functions to manage the sound`

`tileData.js -> data for the generation of the scenario`

`tileDrawer.js -> functions and loops to generate the scenario from the data recived in tileData.js`

`utils.js -> general functions`

`events.js -> keyboard events`

`collision.js -> collision related functions`


