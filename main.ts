input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
sprite.ifOnEdgeBounce()
basic.pause(2000)
basic.forever(function () {
    sprite.move(1)
})
