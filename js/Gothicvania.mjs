import {
    ENEMIES,
    ENVIRONMENTS,
    CHARACTERS,
    FX,
    ITEMS,
    heroine,
    cemetary
} from 'Constants.mjs'
import {
    loadCharacterIdle,
    loadEnvironment,
    createCharacterIdle,
    createEnvironment
} from './libs/PhaserHelpers/Platformer.mjs'

/*** Preload Images ***/
function loadImages()
{
    loadEnvironment(cemetary)
    loadCharacterIdle(heroine.idle)
}



/*** Create Images ***/
function addSprites()
{
    createEnvironment(cemetary)
    createCharacterIdle(heroine.idle)
}

export {
    loadImages,
    addSprites
}