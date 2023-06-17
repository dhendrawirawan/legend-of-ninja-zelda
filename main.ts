namespace SpriteKind {
    export const AttackingPlayer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.cameraFollowSprite(Center4)
    Enemy4_Active = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    scene.cameraFollowSprite(Center2)
    Enemy2_Active = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.cameraFollowSprite(Center5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraFollowSprite(Center3)
    Enemy3_Active = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Attacking == 0) {
        Attacking = 1
        mySprite.setImage(img`
            ......d.ccccccccc.d.....
            ....ddcc.........ccdd...
            ...d.c......ff.....c.d..
            ..d.c.....ff22ff....c.d.
            ..dc....fff2222fff...cd.
            .dc....fff222222fff...cd
            d.c....fff222222fff...c.
            dc.....feeeeeeeeeef....c
            dc....ffe22222222ef....c
            dc....fffffeeeeffff....c
            dc...fdfefbf44fbfef....c
            dc...fbfe41fddf14ef....c
            dc...fbffe4dddd4efe....c
            dc...fcfef22222f4e.....c
            dc....ff4f44554f4e.....c
            dc.......ffffffdde.....c
            d.c.......ffffedde....c.
            .dc............ee.....cd
            ..dc..........ccc....cd.
            ..d.c........cc1cc..c.d.
            ...d.c........c1c..c.d..
            ....ddcc......c1cccdd...
            ......d.ccccccccc.d.....
            .......ddddddddddd......
            `)
        mySprite.setKind(SpriteKind.AttackingPlayer)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    scene.cameraFollowSprite(Center7)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    scene.cameraFollowSprite(Center8)
})
sprites.onOverlap(SpriteKind.AttackingPlayer, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity((otherSprite.x - sprite.x) * 5, (otherSprite.y - sprite.y) * 5)
    pause(500)
    sprites.destroy(otherSprite, effects.warmRadial, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    scene.cameraFollowSprite(Center1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    scene.cameraFollowSprite(Center6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    sprite.setVelocity((sprite.x - otherSprite.x) * 5, (sprite.y - otherSprite.y) * 5)
    pause(1000)
    sprite.setVelocity(0, 0)
    controller.moveSprite(mySprite, 100, 100)
    info.changeLifeBy(-1)
})
let Enemy_Projectile: Sprite = null
let Enemy3_Active = 0
let Enemy2_Active = 0
let Enemy4_Active = 0
let Attacking = 0
let Center8: Sprite = null
let Center7: Sprite = null
let Center6: Sprite = null
let Center5: Sprite = null
let Center4: Sprite = null
let Center3: Sprite = null
let Center2: Sprite = null
let Center1: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
Center1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center1, tiles.getTileLocation(4, 3))
Center2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center2, tiles.getTileLocation(14, 3))
Center3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center3, tiles.getTileLocation(24, 3))
Center4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center4, tiles.getTileLocation(34, 3))
Center5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center5, tiles.getTileLocation(4, 11))
Center6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center6, tiles.getTileLocation(14, 11))
Center7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center7, tiles.getTileLocation(24, 11))
Center8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Center8, tiles.getTileLocation(34, 11))
scene.cameraFollowSprite(Center1)
let Enemy1 = sprites.create(img`
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111dbf......
    ......fd1111111ddf......
    ......fdff1111dddf......
    ......fdff1ddddddf......
    ......fd111ddddddf......
    ......fd1dddddddbf......
    ......fdfdfbddbbff......
    ......fbfdfcdbbcf.......
    .....ffffccddbfff.......
    ....fcb1bbbfcffff.......
    ....f1b1dcffffffff......
    ....fdfdf..ffffffffff...
    .....f.f.....ffffff.....
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let Enemy2 = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let Enemy3 = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
let Enemy4 = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    .........cccc...........
    .....ccccccc...cc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555551ff555555bccc.....
    c55d55ff55555555bcc.....
    c5555555555555555b......
    .cbb31bb55555d555b..c...
    .c5333bb55ddddd55dccc...
    .c533b55ddddddddddbc....
    .c5555ddddb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bcdddddddbcccc
    .....cbbccbd55dddddddddc
    .....ccbbbd555ddddddddbc
    ...ccbdcbb555ddbbdddbcc.
    ...cbdddcc55ddbbbbccc...
    ...cccccccbdddbccc......
    ........cd555ddc........
    `, SpriteKind.Enemy)
tiles.placeOnTile(Enemy1, tiles.getTileLocation(7, 5))
tiles.placeOnTile(Enemy2, tiles.getTileLocation(17, 5))
tiles.placeOnTile(Enemy3, tiles.getTileLocation(27, 5))
tiles.placeOnTile(Enemy4, tiles.getTileLocation(37, 5))
Enemy1.follow(mySprite, 20)
Attacking = 0
music.play(music.createSong(hex`003c0004080c0300001c00010a006400f401640000040000000000000000000000000005000004bc0100000800011d0a000e0001180e001000011d10001e00011b2000280001192a002e0001142e003000011930003e00011840004400011144004a00010c4a004c0001114c004e0001144e005000011650005a0001185a005c0001185c005e0001195e006000011b60006a00011d6a006c00011d6c006e00011b6e007000011970007200011b72007400011974007c0001187c008000011880008200011682008400011884008c0001198c008e0001188e009000011690009200011492009400011694009c0001189c009e0001169e00a0000114a000a2000112a200a4000114a400ac000116ac00b0000119b000c0000118c000c4000111c400ca00010cca00cc000111cc00ce000114ce00d0000116d000da000118da00dc000118dc00de000119de00e000011be000ec00011dec00f000011df000f400011bf400fc000118fc000001011800010c0101190c011001011d10011401011b14011c0101181c012001011820012c0101192c013001011d30013401011b34013c0101183c014001011440014c0101164c015001011950015401011854015c0101145c016001011160016201011262016401011464016c0101166c017001011970018001011801001c000f05001202c102c20100040500280000006400280003140006020004d60200000c0001110c000e0001110e001000011110001200011112001400010f14001c0001111c001e0001111e002000011120002200011122002400010f24002c0001112c002e0001112e003000011130003200011134003600010c38003a00010c3c003e00010c40004200010542004400010546004800010548004a0001054a004c0001054e005000010550005200010552005400010556005800010558005a0001055a005c0001055e006000010560006200010d62006400010d66006800010d68006a00010d6a006c00010d6e007000010d70007200010c72007400010c76007800010c78007a00010c7a007c00010c7e008000010c80008200010a82008400010a86008800010a88008a00010a8a008c00010a8e009000010a90009200010892009400010896009800010898009a0001089a009c0001089e00a0000108a000a2000106a200a4000106a600a8000106a800aa000106aa00ac000106ae00b0000106b000b2000111b200b4000111b600b8000111b800ba00010fba00bc00010fbe00c000010fc000c2000105c200c4000105c600c8000105c800ca000105ca00cc000105ce00d0000105d000d200010cd200d400010cd600d800010cd800da00010cda00dc00010cde00e000010ce000e200010de200e400010de600e800010de800ea00010dea00ec00010dee00f000010df000f2000108f200f4000108f600f8000108f800fa000108fa00fc000108fe000001010800010201010a02010401010a06010801010a08010a01010a0a010c01010a0e011001010a10011201010512011401010516011801010518011a0101051a011c0101051e012001010520012201010622012401010626012801010628012a0101062a012c0101062e013001010630013201010532013401010536013801010538013a0101053a013c0101053e01400101054001420101064401460101064c014e0101065001520101055401560101055c015e01010560017001010a70018001010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80005020800090001141800190001142800290001143800390001144000410001064400450001064800490001064c004d0001065000510001065400550001065800590001065c005d0001066000610001066400650001066800690001066c006d0001067000710001067400750001067800790001067c007d0001068000810001068400850001068800890001068c008d0001069000910001069400950001069800990001069c009d000106a000a1000106a400a5000106a800a9000106ac00ad000106b000b1000106b400b5000106b800b9000106ba00bb000106bc00bd000106be00bf000106c000c1000106c400c5000106c600c7000106c800c900021406cc00cd000106ce00cf000106d000d1000106d400d5000106d600d7000106d800d900021406dc00dd000106de00df000106e000e1000106e400e5000106e600e7000106e800e900021406ec00ed000106ee00ef000106f000f1000106f400f5000106f600f7000106f800f900021406fc00fd000106fe00ff000106000101010106040105010106060107010106080109010214060c010d0101060e010f0101061001110101061401150101061601170101061801190102140620012101010628012901021406300131010106380139010214064001410101064801490102140650015101010658015901021406600161010106680169010214067001710102140678017901021406`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(25, function () {
    if (Enemy2_Active == 1) {
        Enemy2.ax = (mySprite.x - Enemy2.x) * 2
        Enemy2.ay = (mySprite.y - Enemy2.y) * 2
    }
})
game.onUpdateInterval(500, function () {
    if (Enemy3_Active == 1 && Enemy3.vx == 0) {
        Enemy_Projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Enemy3, (mySprite.x - Enemy3.x) * 1, (mySprite.y - Enemy3.y) * 1)
        Enemy_Projectile.setKind(SpriteKind.Enemy)
    } else {
        sprites.destroy(Enemy_Projectile, effects.spray, 100)
    }
    if (Enemy4_Active == 1 && Enemy4.sx <= 4) {
        Enemy4.changeScale(0.5, ScaleAnchor.BottomRight)
    } else {
    	
    }
})
game.onUpdateInterval(500, function () {
    if (Attacking == 1) {
        pause(500)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.setKind(SpriteKind.Player)
        Attacking = 0
    }
})
