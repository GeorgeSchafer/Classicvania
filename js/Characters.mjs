import { 
    Frame,
    SquareFrame,
    Map,
    SquareMap
} from './libs/PhaserHelpers/PhaserHelpers.mjs'
import {
    CHARACTERS
} from 'Constants.mjs'



class CharacterState {
    constructor(aliasStr, frame, pngStr){
        this.alias = aliasStr
        this.frame = frame
        this.png = pngStr
    }
}

const heroine = {
    idle: new CharacterState('idle', new SquareFrame(64), CHARACTERS + 'heroine/idle.png'),
    walk: new CharacterState('walk', new Frame(64,128), CHARACTERS + 'heroine/walk.png')
}

export {
    heroine
}