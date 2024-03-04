import {
    ENVIRONMENTS
} from './Constants.mjs'
import {
    Frame,
    Map
} from './libs/PhaserHelpers/PhaserHelpers.mjs'

/*** Preload Images ***/
function loadImages()
{
    this.load.image('background', ENVIRONMENTS.cemetary.background)
    this.load.image('layer1', ENVIRONMENTS.cemetary.layer1)
    this.load.image('layer2', ENVIRONMENTS.cemetary.layer2)
    
}


