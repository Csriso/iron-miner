class MapObject {
  constructor(posX, posY, type) {
    this.posX = posX;
    this.posY = posY;
    this.w = 16;
    this.h = 16;
    this.type = type;
  }
  spawnObject = () => {
    this.create();
  };

  create = () => {
    let imgToUse;

    // TAMAÑO TILE DEFECTO
    let tileHeight = 16;
    let tileWidth = 16;
    let tileOutputSize = 1;

    let atlasHeight = tileHeight;
    let atlasWidth = tileWidth;

    let updatedTileSizeWx = tileWidth * tileOutputSize;
    let updatedTileSizeHy = tileHeight * tileOutputSize;
    let widthIterator = atlasWidth;

    if (this.type === "heart") {
      imgToUse = heartSprite;
      tileHeight = 23;
      tileWidth = 28;
      updatedTileSizeWx = 16;
      updatedTileSizeHy = 16;
    } else if (this.type === "goldenOre") {
      imgToUse = goldenOreSprite;
    } else if (this.type === "coin") {
      imgToUse = coinSprite;
    }
    context.drawImage(
      imgToUse,
      0, //ORIGIN TILESET X
      0, //ORIGIN TILESET Y
      tileWidth, // TILESET WIDTH
      tileHeight, // TILESET HEIGHT
      this.posX, //POSITION CANVAS X
      this.posY, //POSITION CANVAS Y
      updatedTileSizeWx, // SIZE OUTPUT MODIFIER X
      updatedTileSizeHy // SIZE OUTPUT MODIFIER Y
    );
  };
}
