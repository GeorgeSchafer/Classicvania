import { ENVIRONMENTS } from './Constants.mjs'
import { SquareFrame } from './libs/PhaserHelpers/Frame.mjs'



class EnvironmentImage
{
    constructor(path, width, height)
    {
        this.path = path
        this.width = width
        this.height = height
    }
}

class EnvironmentTileset
{
    constructor()
    {
        this.alias = alias
        this.path = path
        this.fram = frame
    }
}

class Environment
{
    constructor(background=null, decor=null, layers=[], props=null)
    {
        this.background = background
        this.decor = decor
        this.layers = layers
        this.props = props
    }
}

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
