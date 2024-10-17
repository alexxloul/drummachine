// Δημιουργία audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Φόρτωση ήχων
const sounds = {
    kick: new Audio('C:\Users\alexa\OneDrive\Υπολογιστής\site\sounds\kick.wav'),
    snare: new Audio('sounds/snare.wav'),
    hihat: new Audio('sounds/hihat.wav')
};

// Συνάρτηση για αναπαραγωγή ήχου
function playSound(sound) {
    const audio = sounds[sound];
    audio.currentTime = 0; // Επαναφορά του ήχου στην αρχή
    audio.play();
}

// Συνδέουμε τα κουμπιά με την αναπαραγωγή των ήχων
document.getElementById('kick').addEventListener('click', () => playSound('kick'));
document.getElementById('snare').addEventListener('click', () => playSound('snare'));
document.getElementById('hihat').addEventListener('click', () => playSound('hihat'));

// Προαιρετικά: Λειτουργία play/stop για tempo (μπορεί να επεκταθεί)
let isPlaying = false;
let intervalId;

document.getElementById('play').addEventListener('click', () => {
    if (!isPlaying) {
        const tempo = document.getElementById('tempo').value;
        const interval = (60 / tempo) * 1000; // Υπολογισμός διαστήματος
        intervalId = setInterval(() => {
            // Προσθέστε εδώ τη λογική για την αναπαραγωγή των χτυπημάτων
            playSound('kick'); // Παράδειγμα αναπαραγωγής
        }, interval);
        isPlaying = true;
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    isPlaying = false;
});
