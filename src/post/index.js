
// This file exports available shaders to the GUI.

// don't worry about this one. This is just to apply no filter
export function None(renderer, scene, camera) {
    return {
        initGUI: function(gui) {

        },

        render: function() {
            renderer.render(scene, camera);
        }
    }
}

// follow this syntax to make your shaders available to the GUI
export {default as Grayscale} from './grayscale'
export {default as Sepia} from './sepia'        
export {default as GaussianBlur} from './gaussianblur'        
export {default as Vignette} from './vignette'        
export {default as Warp} from './warp'       
export {default as Pointilism} from './pointilism'       
        