
<p align="center">
  <img src="https://github.com/Csriso/iron-miner/blob/main/banner.png?raw=true" />
</p>


# Iron-Miner

2D game 16 bits sprite game for the first proyect of IronHack.


## Screenshots

![App Screenshot](https://github.com/Csriso/iron-miner/blob/main/screenshot.png?raw=true)


## MVP

- Add basic collisions.

- Add enemies that spawn at randomly locations.

- Enemies follow you and can attack you.

- Player can attack enemies and mine ores.
 
- Player animations of idle, walk and attack.
 
- Enemies animations of walk.
 
- Enemies run to your position to damage you.
 
- Iron ores spawn at random location and you get coins if you mine them.
 

## Backlog

- Shop to improve health and attributes.

- Trees with the same functionality of iron ores.

- Sounds/music.

## Proyect layout

`main.js -> startgame and gameLoop`

`assetsInit.js -> initialization of images and audios`

`Player.js -> main character class`

`Enemy.js -> enemies class`

`tileData.js -> data for the generation of the scenario`

`tileDrawer.js -> functions and loops to generate the scenario from the data recived in tileData.js`

`utils.js -> data for the generation of the scenario`

`events.js -> keyboard events`

`collision.js -> collision related functions`


