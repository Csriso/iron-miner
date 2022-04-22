drawAllTiles = () => {
  drawGrass();
  drawRocks();
};

drawGrass = () => {
  const tileAtlas = new Image();
  tileAtlas.src = "../assets/serene.png";
  let tileSize = 16;
  let tileOutputSize = 1;
  let updatedTileSize = tileSize * tileOutputSize;

  let atlasCol = 19;
  let atlasRow = 48;
  let mapCols = 40;
  let mapRows = 40;
  let mapHeight = mapRows * tileSize;
  let mapWidth = mapCols * tileSize;
  let level1Map = arrTileData[0].data;
  let mapIndex = 0;
  let sourceX = 0;
  let sourceY = 0;

  for (let col = 0; col < mapHeight; col += tileSize) {
    for (let row = 0; row < mapWidth; row += tileSize) {
      let tileVal = level1Map[mapIndex];
      if (tileVal != 0) {
        tileVal -= 1;
        sourceY = Math.floor(tileVal / atlasCol) * tileSize;
        sourceX = (tileVal % atlasCol) * tileSize;
        context.drawImage(
          tileAtlas,
          sourceX,
          sourceY,
          tileSize,
          tileSize,
          row * tileOutputSize,
          col * tileOutputSize,
          updatedTileSize,
          updatedTileSize
        );
      }
      mapIndex++;
    }
  }
};
drawRocks = () => {
  const tileAtlas = new Image();
  tileAtlas.src = "../assets/rock.png";
  let tileSize = 16;
  let tileOutputSize = 1;
  let updatedTileSize = tileSize * tileOutputSize;

  let atlasCol = 1;
  let atlasRow = 1;
  let mapCols = 40;
  let mapRows = 40;
  let mapHeight = mapRows * tileSize;
  let mapWidth = mapCols * tileSize;
  let level1Map = arrTileData[1].data;
  let mapIndex = 0;
  let sourceX = 0;
  let sourceY = 0;

  for (let col = 0; col < mapHeight; col += tileSize) {
    for (let row = 0; row < mapWidth; row += tileSize) {
      let tileVal = level1Map[mapIndex];
      if (tileVal != 0) {
        tileVal -= 1;
        sourceY = Math.floor(tileVal / atlasCol) * tileSize;
        sourceX = (tileVal % atlasCol) * tileSize;
        context.drawImage(
          tileAtlas,
          sourceX,
          sourceY,
          tileSize,
          tileSize,
          row * tileOutputSize,
          col * tileOutputSize,
          updatedTileSize,
          updatedTileSize
        );
      }
      mapIndex++;
    }
  }
};
