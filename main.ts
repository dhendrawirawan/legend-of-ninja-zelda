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
    pause(500)
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
