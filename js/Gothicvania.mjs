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
    addCharacterIdle,
    addEnvironment
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
    addEnvironment(cemetary)
    addCharacterIdle(heroine.idle)
}

export {
    loadImages,
    addSprites
}