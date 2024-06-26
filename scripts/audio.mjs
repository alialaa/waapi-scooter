export const idleEnginePlayer = new Tone.Player({
  // url: "../assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav",
  url: "https://raw.githubusercontent.com/alialaa/waapi-scooter/main/assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav", // For GH Pages
  loop: true,
});

export const idleEnginePitchShift = new Tone.PitchShift({
  pitch: -20,
}).toDestination();

idleEnginePlayer.connect(idleEnginePitchShift);

export const enginePlayer = new Tone.Player({
  // url: "../assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav",
  url: "https://raw.githubusercontent.com/alialaa/waapi-scooter/main/assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav", // For GH Pages
  loop: true,
});

export const enginePitchShift = new Tone.PitchShift({
  pitch: -5,
}).toDestination();

enginePlayer.connect(enginePitchShift);
enginePlayer.volume.value = -20;

export const brakePlayer = new Tone.Player({
  // url: "../assets/brake-6315.mp3",
  url: "https://raw.githubusercontent.com/alialaa/waapi-scooter/main/assets/brake-6315.mp3", // For GH Pages
  loop: false,
}).toDestination();

export const backfirePlayer = new Tone.Player({
  // url: "../assets/backfire.mp3",
  url: "https://raw.githubusercontent.com/alialaa/waapi-scooter/main/assets/backfire.mp3", // For GH Pages
  loop: false,
}).toDestination();

export function playAllAudio() {
  idleEnginePlayer.start();
  enginePlayer.start();
}
export function pauseAllAudio() {
  idleEnginePlayer.stop();
  enginePlayer.stop();
}
