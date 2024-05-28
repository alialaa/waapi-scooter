export const idleEnginePlayer = new Tone.Player({
  url: "../assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav",
  loop: true,
});

export const idleEnginePitchShift = new Tone.PitchShift({
  pitch: -20,
}).toDestination();

idleEnginePlayer.connect(idleEnginePitchShift);

export const enginePlayer = new Tone.Player({
  url: "../assets/344923-Vespa1962-125cc-Loop_03-Drive_low_rpm-ENGINE-DPA4061-OTFA.wav",
  loop: true,
});

export const enginePitchShift = new Tone.PitchShift({
  pitch: -5,
}).toDestination();

enginePlayer.connect(enginePitchShift);
enginePlayer.volume.value = -20;

export const brakePlayer = new Tone.Player({
  url: "../assets/brake-6315.mp3",
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
