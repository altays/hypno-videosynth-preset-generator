const fs = require('node:fs/promises');

async function readwrite (filePath, outputFileName) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        await fs.writeFile(outputFileName,data);
    } 
    catch (error){
        console.error(error)
    }
}

function createJSON() {
    let newPreset = {
        "alt_pot_0_0":0.5,
        "alt_pot_0_1":0.9373834133148193,
        "alt_pot_0_2":0.0,
        "alt_pot_0_3":0.9977359175682068,
        "alt_pot_0_4":0.5518121123313904,
        "alt_pot_0_5":0.5,
        "alt_pot_0_6":0.5,
        "alt_pot_0_7":0.9944819211959839,
        "alt_pot_1_0":0.0,
        "alt_pot_1_1":0.9373834133148193,
        "alt_pot_1_2":0.0,
        "alt_pot_1_3":0.5,
        "alt_pot_1_4":0.5,
        "alt_pot_1_5":0.5,
        "alt_pot_1_6":0.5,
        "alt_pot_1_7":0.5,
        "alt_pot_2_0":0.0,
        "alt_pot_2_1":0.5,
        "alt_pot_2_2":0.02698097564280033,
        "alt_pot_2_3":1.0,
        "alt_pot_2_4":0.6645201444625854,
        "alt_pot_2_5":0.5739750266075134,
        "alt_pot_2_6":0.2930566072463989,
        "alt_pot_2_7":0.5685631036758423,
        "button0":5, //num between 0 and 5
        "button1":0, //num between 0 and 5
        "button2":2, //num between 0 and 5
        "filename_a":"/sleepy/sleepy_loop.mp4",
        "firmware_version":"2.3",
        "last_hue_offset":0.944383442401886,
        "last_hue_offset_2":0.5070000290870667,
        "last_root_hue":0.944383442401886,
        "last_root_saturation":0.699999988079071,
        "last_saturation_1":0.9977359175682068,
        "last_saturation_2":1.0,
        "mod_matrix_0_0":0.0, //binary between 0.0 and 1.0
        "mod_matrix_0_1":1.0, //binary between 0.0 and 1.0
        "mod_matrix_0_2":0.0, //binary between 0.0 and 1.0
        "mod_matrix_1_0":0.0, //binary between 0.0 and 1.0
        "mod_matrix_1_1":0.0, //binary between 0.0 and 1.0
        "mod_matrix_1_2":0.0, //binary between 0.0 and 1.0
        "mod_matrix_2_0":1.0, //binary between 0.0 and 1.0
        "mod_matrix_2_1":0.0, //binary between 0.0 and 1.0
        "mod_matrix_2_2":0.0, //binary between 0.0 and 1.0
        "modulations_Feedback":{},
        "modulations_Mixer":{},
        "modulations_Recording":{},
        "modulations_Shape A":{
            "phase":0.0,
            "y_phase":0.0},
        "modulations_Shape B":{
            "phase":-131.18739318847656,
            "y_phase":28.697084426879883},
        "modulations_SplashScreen":{},
        "pot_0":0.01862327568233013,
        "pot_1":0.9373834133148193,
        "pot_2":0.07656040042638779,
        "pot_3":0.998540461063385,
        "pot_4":0.01559305191040039,
        "pot_5":0.008950114250183105,
        "pot_6":0.5,
        "pot_7":0.5,
        "preset_pot_0_0":0.5,
        "preset_pot_0_1":0.0,
        "preset_pot_0_2":0.5,
        "preset_pot_0_3":1.0,
        "preset_pot_0_4":0.5,
        "preset_pot_0_5":0.286433607339859,
        "preset_pot_0_6":0.0,
        "preset_pot_0_7":0.1001260057091713,
        "preset_pot_1_0":0.0,
        "preset_pot_1_1":0.0,
        "preset_pot_1_2":0.0,
        "preset_pot_1_3":0.0,
        "preset_pot_1_4":0.0,
        "preset_pot_1_5":0.0,
        "preset_pot_1_6":0.0,
        "preset_pot_1_7":0.0,
        "preset_pot_2_0":0.0,
        "preset_pot_2_1":0.2411455661058426,
        "preset_pot_2_2":0.0,
        "preset_pot_2_3":0.9938430190086365,
        "preset_pot_2_4":0.9930626749992371,
        "preset_pot_2_5":0.5,
        "preset_pot_2_6":0.0,
        "preset_pot_2_7":0.0,
        "rotations_Feedback":{"fb_rotation_matrix_":0.0,"rotation_mat1":0.0},
        "rotations_Mixer":{},
        "rotations_Recording":{},
        "rotations_Shape A":{"mirror_rotation_mat":41.06171798706055,"rotation_mat":1.0184180736541748},
        "rotations_Shape B":{"mirror_rotation_mat":-5.34084939956665,"rotation_mat":47.60868453979492},
        "rotations_SplashScreen":{}
    }
}

module.exports = { readwrite }
