import {
    Frame,
    SquareFrame,
    Map,
    SquareMap,
    CharacterState
} from './libs/PhaserHelpers/PhaserPlatformer.mjs'
import {
    CHARACTERS
} from 'Constants.mjs'



const heroine = {
    idle: new CharacterState('idle', new SquareFrame(64), CHARACTERS + 'heroine/idle.png'),
    walk: new CharacterState('walk', new Frame(64,128), CHARACTERS + 'heroine/walk.png')
}

export {
    heroine
}