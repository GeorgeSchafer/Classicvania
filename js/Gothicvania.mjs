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
    loadEnvironment,
    loadCharacterIdle,
    addEnvironment
} from './libs/PhaserHelpers/PhaserHelpers.mjs'

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