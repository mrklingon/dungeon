function RoomDex (X: number, Y: number) {
    return 0 * 3 + Y
}
function moveogre (sprite: game.LedSprite) {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    Adventr.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Adventr.change(LedSpriteProperty.X, -1)
})
function placeOgre (sprite: game.LedSprite) {
    sprite.set(LedSpriteProperty.X, randint(0, 4))
    sprite.set(LedSpriteProperty.Y, randint(0, 4))
    sprite.turn(Direction.Right, randint(0, 359))
}
function NewRoom (X: number, Y: number) {
    placeOgre(Ogre1)
    placeOgre(Ogre2)
    placeOgre(Ogre3)
}
input.onButtonPressed(Button.B, function () {
    Adventr.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Adventr.change(LedSpriteProperty.X, 1)
})
let Adventr: game.LedSprite = null
let Ogre3: game.LedSprite = null
let Ogre2: game.LedSprite = null
let Ogre1: game.LedSprite = null
let TreasureBox = game.createSprite(4, 4)
Ogre1 = game.createSprite(0, 0)
Ogre2 = game.createSprite(0, 0)
Ogre3 = game.createSprite(0, 0)
Adventr = game.createSprite(2, 2)
game.setLife(5)
let RoomX = 1
let RoomY = 1
let Gold = [0, 1, 0, 0, 0, 0, 0, 0, 0]
let Ogres = [0, 1, 0, 0, 0, 0, 0, 0, 0]
for (let index = 0; index <= 8; index++) {
    Gold[index] = randint(0, 5)
}
for (let index = 0; index <= 8; index++) {
    Ogres[index] = randint(0, 3)
    NewRoom(2, 2)
}
basic.forever(function () {
    moveogre(Ogre1)
    moveogre(Ogre2)
    moveogre(Ogre3)
})
