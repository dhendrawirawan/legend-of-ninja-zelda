// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`40001000030404040404040404040404040404040404040404040404040404040404040404040404040404040400000000000000000000000000000000000000000000000301010101010101010203010101010101010102030101010101010101020301010101010101010202000000000000000000000000000000000000000000000003010101010101010102030101010101010101020301010101010101010203010101010101010102020000000000000000000000000000000000000000000000030101010101010101020301010101010101010203010101010101010102030101010101010101020200000000000000000000000000000000000000000000000301010101050101010c0b01010101060101010b090101010107010101090a010101010801010102020000000000000000000000000000000000000000000000030101010101010101020301010101010101010203010101010101010102030101010101010101020200000000000000000000000000000000000000000000000301010101010101010203010101010101010102030101010101010101020301010101010101010202000000000000000000000000000000000000000000000003040404040404040402030404040404040404020304040404040404040203040404040a0404040204000000000000000000000000000000000000000000000003040404040404040404040404040404040404040404040404040404040404040404040d04040404000000000000000000000000000000000000000000000000030101010101010101020301010101010101010203010101010101010102030101010101010101020000000000000000000000000000000000000000000000000301010101010101010203010101010101010102030101010101010101020301010101010101010200000000000000000000000000000000000000000000000003010101010101010102030101010101010101020301010101010101010203010101010101010102000000000000000000000000000000000000000000000000030101010105010101100f01010101060101010f0e01010101070101010e0d010101010801010102000000000000000000000000000000000000000000000000030101010101010101020301010101010101010203010101010101010102030101010101010101020000000000000000000000000000000000000000000000000301010101010101010203010101010101010102030101010101010101020301010101010101010200000000000000000000000000000000000000000000000003040404040404040402030404040404040404020304040404040404040203040404040404040402000000000000000000000000000000000000000000000000`, img`
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
................................................................
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleSwitchUp,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
