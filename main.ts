scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    mySprite.setPosition(14, 15)
    mySprite.sayText(":(", 500, true)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    mySprite.setPosition(14, 15)
    scene.cameraShake(5, 1000)
    mySprite.sayText(":(", 500, true)
    info.changeLifeBy(-1)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(1, 100)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . 1 . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . f 2 f . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . f 2 f . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . f 2 f . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(1, 100)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 2 . . . . . 
        . . 2 . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 2 . . . . . 
        . . 2 . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(1, 100)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 2 . . . . . 
        . . 2 . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 2 . . . . . 
        . . 2 . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . . 2 . . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . 2 . 2 . 2 . 2 . 2 . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . 2 . . . 2 . . . 2 . . . . . 
        . . 2 . . 2 2 2 . . 2 . . . . . 
        . . . 2 2 . 2 . 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 2 . 2 . 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . 2 . 2 2 2 . 2 . . . . . . 
        . . . 2 2 . 2 . 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . 2 2 . 2 . 2 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        . . . . 2 . . . 2 . . . . . . . 
        `],
    110,
    true
    )
})
info.onCountdownEnd(function () {
    effects.bubbles.endScreenEffect()
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(1, 100)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . 1 . . . . 
        . . . . 1 . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . 1 . . 2 2 . 2 2 . . . . . . . 
        . . . 2 . . . . . 2 . 1 . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . 1 . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . 1 . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . . 2 . . 1 . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . 1 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . . 2 . . 1 . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . 1 2 . . . . . 2 . . . . . . 
        . . . 2 . . 1 . . 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . 2 . . 2 . . 2 . . . . . . 
        . . . . . . 2 . . 1 . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        `],
    100,
    true
    )
})
info.onLifeZero(function () {
    mySprite.sayText("AAAAHHH", 500, true)
    for (let index = 0; index < 500; index++) {
        mySprite.startEffect(effects.fire, 5000)
    }
    mySprite.sayText("NO DE NUEVO", 1000, true)
    info.startCountdown(3)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `],
    500,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . f 2 f . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . 2 . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        . . . . . 2 . 2 . . . . . . . . 
        `],
    500,
    true
    )
})
let mySprite: Sprite = null
effects.confetti.startScreenEffect(5000)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . f 2 f . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 . 2 . 2 . . . . . . . 
    . . . . 2 . 2 . 2 . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`nivel2`)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
forever(function () {
    music.play(music.stringPlayable("C F G D B C5 E D ", 150), music.PlaybackMode.InBackground)
})
