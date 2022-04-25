
<p align="center">
  <img src="https://github.com/Csriso/iron-miner/blob/main/banner.png?raw=true" />
</p>


# Iron-Miner

2D game 16 bits sprite game for the first proyect of IronHack.


## Screenshots

![App Screenshot](https://github.com/Csriso/iron-miner/blob/main/screenshot.png?raw=true)


## MVP

- Add basic collisions. DONE

- Add enemies that spawn at randomly locations. DONE

- Enemies follow you and can attack you. DONE

- Player can attack enemies and mine ores. DONE
 
- Player animations of idle, walk and attack. DONE
 
- Enemies animations of walk. DONE
 
- Enemies run to your position to damage you. DONE
 
- Iron ores spawn at random location and you get coins if you mine them. DONE
 
- Sounds/music. DONE

## Backlog

- Shop to improve health and attributes.

- Trees with the same functionality of iron ores.

- Improve collisions.


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


