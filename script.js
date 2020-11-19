const keys = document.querySelectorAll(".key");


for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('mousedown', function (e) { var key = e.target.id; createNote(key) })
}

function createNote(key) {
    if (key.length == 1) {
        Synth.play(0, key, 3, 2)
    }
    else if (key.slice(1, 2) == 'S') {
        if (key.length == 3) {
            key = key.slice(0, 1);
            Synth.play(0, key+'#', 4, 2);
        }
        else {
            key = key.slice(0, 1);
            Synth.play(0, key+'#', 3, 2);
        }
    }
    else {
        key = key.slice(0, 1);
        Synth.play(0, key, 4, 2);
    }
}
