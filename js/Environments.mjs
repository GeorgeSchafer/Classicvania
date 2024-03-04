import { ENVIRONMENTS } from './Constants.mjs'
import {
    SquareFrame,
    EnvironmentImage,
    EnvironmentTileset,
    Environment
} from './libs/PhaserHelpers/PhaserPlatformer.mjs'




const cemetary = new Environment(
    new EnvironmentImage(
        ENVIRONMENTS + 'cemetary/background.png',
        384,
        224),
    new EnvironmentTileset(
        'cemetary decor',
        ENVIRONMENTS + 'cemetary/cemetary.tileset.json',
    new SquareFrame(16)),
    new EnvironmentTileset(
        'cemetary props',
        ENVIRONMENTS + 'cemetary/props.tileset.json',
        new Frame(192,16))
)

export {
    cemetary
}
