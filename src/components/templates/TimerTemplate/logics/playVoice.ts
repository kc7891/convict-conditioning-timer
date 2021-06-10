export const playVoice = (text: string) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}
