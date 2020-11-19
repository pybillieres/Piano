const keys = document.querySelectorAll(".key");
const soundSelectors = document.querySelectorAll('input[name="SoundProfil"]');

for (var i = 0; i < soundSelectors.length; i++) {
    soundSelectors[i].addEventListener('change', function(){selectedSound()})
}

function selectedSound(){
    if(soundSelectors[0].checked == true)
    {
        return 0;
    }
    else if(soundSelectors[1].checked == true)
    {
        return 1;
    }
    else if(soundSelectors[2].checked == true)
    {
        return 2;
    }
    else if(soundSelectors[3].checked == true)
    {
        return 3;
    }
}

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mousedown', function (e) { var key = e.target.id; createNote(key) })
}

function createNote(key) {
    if (key.length == 1) {
        Synth.play(selectedSound(), key, 3, 2)
    }
    else if (key.slice(1, 2) == 'S') {
        if (key.length == 3) {
            key = key.slice(0, 1);
            Synth.play(selectedSound(), key+'#', 4, 2);
        }
        else {
            key = key.slice(0, 1);
            Synth.play(selectedSound(), key+'#', 3, 2);
        }
    }
    else {
        key = key.slice(0, 1);
        Synth.play(selectedSound(), key, 4, 2);
    }
}
