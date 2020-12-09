function RoomDex (X: number, Y: number) {
    return 0 * 3 + Y
}
function moveogre (sprite: game.LedSprite) {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(500)
    if (Adventr.isTouching(sprite)) {
        game.removeLife(1)
    }
}
input.onButtonPressed(Button.A, function () {
    Adventr.move(1)
})
function placeOgre (sprite: game.LedSprite) {
    sprite.set(LedSpriteProperty.X, randint(0, 4))
    sprite.set(LedSpriteProperty.Y, randint(0, 4))
    sprite.turn(Direction.Right, randint(0, 359))
}
function NewRoom (X: number, Y: number) {
    Adventr.set(LedSpriteProperty.Direction, 0)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    RoomX = X
    RoomY = Y
    placeOgre(Ogre1)
    placeOgre(Ogre2)
    placeOgre(Ogre3)
    SetTreasure(TreasureBox)
    Treasure = Gold[RoomDex(X, Y)]
    Gold[RoomDex(X, Y)] = 0
}
input.onButtonPressed(Button.B, function () {
    Adventr.turn(Direction.Right, 45)
})
function SetTreasure (sprite: game.LedSprite) {
    sprite.set(LedSpriteProperty.X, randint(1, 3))
    sprite.set(LedSpriteProperty.Y, randint(1, 3))
}
let Treasure = 0
let Gold: number[] = []
let RoomY = 0
let RoomX = 0
let Adventr: game.LedSprite = null
let Ogre3: game.LedSprite = null
let Ogre2: game.LedSprite = null
let Ogre1: game.LedSprite = null
let TreasureBox: game.LedSprite = null
TreasureBox = game.createSprite(4, 4)
Ogre1 = game.createSprite(0, 0)
Ogre2 = game.createSprite(0, 0)
Ogre3 = game.createSprite(0, 0)
Adventr = game.createSprite(2, 2)
game.setLife(5)
RoomX = 1
RoomY = 1
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
Gold = [0, 1, 0, 0, 0, 0, 0, 0, 0]
let Ogres = [0, 1, 0, 0, 0, 0, 0, 0, 0]
for (let index = 0; index <= 8; index++) {
    Gold[index] = randint(100, 500)
}
for (let index = 0; index <= 8; index++) {
    Ogres[index] = randint(0, 3)
}
NewRoom(2, 2)
basic.forever(function () {
    moveogre(Ogre1)
    moveogre(Ogre2)
    moveogre(Ogre3)
    if (Adventr.isTouching(TreasureBox)) {
        game.addScore(Treasure)
        music.playTone(131, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        Treasure = 0
        game.addLife(1)
    }
    if (Adventr.isTouchingEdge()) {
        Gold[RoomDex(RoomX, RoomY)] = Treasure
        NewRoom(randint(0, 2), randint(0, 2))
        Adventr.set(LedSpriteProperty.X, 2)
        Adventr.set(LedSpriteProperty.Y, 2)
    }
})
