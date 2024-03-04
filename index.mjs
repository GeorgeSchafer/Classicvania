import { addSprites, loadImages } from "./js/Gothicvania.mjs";


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {

    }
};

var game = new Phaser.Game(config);

function preload ()
{
    loadImages()
}

function create ()
{
    addSprites()
}

function update ()
{
}