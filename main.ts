input.onButtonPressed(Button.A, function () {
    Adventr.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Adventr.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Adventr.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Adventr.change(LedSpriteProperty.X, 1)
})
let Adventr: game.LedSprite = null
Adventr = game.createSprite(2, 2)
game.setLife(5)
basic.forever(function () {
	
})
