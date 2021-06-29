let ASTROWORLD = document.getElementById("ASTROWORLD");
let JACKBOYS = document.getElementById("JACKBOYS");
let RODEO = document.getElementById("RODEO");
let audio = new Audio();

let music_ASTROWORLD = [];
let music_JACKBOYS = [];
let music_RODEO = [];


/* ADD MUSIC */




//ASTROWORLD

music_ASTROWORLD = addMusic(music_ASTROWORLD, "STARGAZING", "stargazing.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "CAROUSEL", "carousel.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "SICKO MODE", "sicko-mode.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "R.I.P.SCREW", "r-i-p-screw.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "STOP TRYING TO BE GOD", "travis-scott_stop-trying-to-be-god.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "NO BYSTANDERS", "travis-scott_no-bystanders.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "SKELETONS", "skeletons.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "WAKE UP", "08 Wake Up (feat. The Weeknd).mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "5% TINT", "5-tint.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "NC-17", "nc-17.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "ASTROTHUNDER", "11 Astrothunder.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "YOSEMITE", "yosemite.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "CAN'T SAY", "can-t-say.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "WHO?WHAT!", "who-what.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "BUTTERFLY EFFECT", "butterfly-effect.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "HOUSTONFORNICATION", "houstonfornication.mp3");
music_ASTROWORLD = addMusic(music_ASTROWORLD, "COFFEE BEAN", "17 COFFEE BEAN 1.mp3");



//JACKBOYS

music_JACKBOYS = addMusic(music_JACKBOYS, "HIGHEST IN THE ROOM", "  HIGHEST IN THE ROOM.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "JACKBOYS", "JACKBOYS-INTRO.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "GANG GANG", "gang gang.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "HAD ENOUGH", "had-enough.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "OUT WEST", "OUT WEST.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "WHAT TO DO?", "what-to-do.mp3");
music_JACKBOYS = addMusic(music_JACKBOYS, "GATTI", "Jackboys & Pop Smoke & Travis Scott - Gatti.mp3");




//RODEO

music_RODEO = addMusic(music_RODEO, "THE ENDS", "Travis Scott - the ends (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "WAY BACK", "Travis Scott - way back (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "COORDINATE", "Travis Scott - coordinate (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "THROUGH THE LIGHT NIGHT", "Travis Scott - through the late night (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "BEIBS IN THE TRAP", "Travis Scott - beibs in the trap (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "SDP INTERLUDE", "Sdp Interlude.mp3");
music_RODEO = addMusic(music_RODEO, "SWEET SWEET", "Travis Scott - sweet sweet (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "OUTSIDE", "Travis Scott - outside (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "GOOSEBUMPS", "Travis Scott - goosebumps (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "FIRST TAKE", "Travis Scott - first take (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "PICK UP THE PHONE", "Young Thug, Travis Scott - pick up the phone (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "LOSE", "Travis Scott - lose (muzzo.ru).mp3");
music_RODEO = addMusic(music_RODEO, "GUIDANCE", "Guidance .mp3");
music_RODEO = addMusic(music_RODEO, "WONDERFUL", "Travis Scott - wonderful (muzzo.ru).mp3");




/* END */

if(ASTROWORLD != null) {
    for (let i = 0; i < music_ASTROWORLD.length; i++) {
        ASTROWORLD.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_ASTROWORLD[i].file + "\")'>" + music_ASTROWORLD[i].name + "</a><br><br>";
    }
}

if(JACKBOYS != null) {
    for (let i = 0; i < music_JACKBOYS.length; i++) {
        JACKBOYS.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_JACKBOYS[i].file + "\")'>" + music_JACKBOYS[i].name + "</a><br><br>";
    }
}

if(RODEO != null) {
    for (let i = 0; i < music_RODEO.length; i++) {
        RODEO.innerHTML += "<a class='musicPlay' onclick='sound(\"" + music_RODEO[i].file + "\")'>" + music_RODEO[i].name + "</a><br><br>";
    }
}

function addMusic(obj, name, file){
    obj.push(
        {
            "name": name,
            "file": file
        }
    )

    return obj;
}


function sound(src) {
    audio.src = "audio/" + src;
    audio.autoplay = true;
}