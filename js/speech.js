/**
 * Gerenciador de Síntese de Voz (Web Speech API)
 * 100% Nativo, Gratuito e sem latência.
 * Otimizado para entonação calorosa, suave e maternal em Português do Brasil.
 */

export const Speech = {
  synth: typeof window !== 'undefined' ? window.speechSynthesis : null,
  utterance: null,
  isSpeaking: false,
  selectedVoice: null,

  init() {
    if (!this.synth) return;

    const loadVoices = () => {
      const voices = this.synth.getVoices();
      // Prioriza vozes brasileiras femininas ou naturais do Google/Microsoft/Apple
      const ptBrVoices = voices.filter(v => v.lang === 'pt-BR' || v.lang.startsWith('pt'));
      const naturalVoice = ptBrVoices.find(v => 
        v.name.includes('Luciana') || 
        v.name.includes('Francisca') || 
        v.name.includes('Maria') || 
        v.name.includes('Google português do Brasil') ||
        v.name.toLowerCase().includes('female')
      );
      this.selectedVoice = naturalVoice || ptBrVoices[0] || voices[0];
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  },

  speak(text, { onStart, onEnd, onError, rate = 0.92, pitch = 1.05 } = {}) {
    if (!this.synth) {
      if (onError) onError('Síntese de voz não suportada neste navegador.');
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = rate;   // Levemente mais compassado para acolhimento e clareza
    utterance.pitch = pitch; // Entonação serena e maternal

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      if (onError) onError(e);
    };

    this.utterance = utterance;
    this.synth.speak(utterance);
  },

  stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
  },

  toggle(text, callbacks) {
    if (this.isSpeaking) {
      this.stop();
      if (callbacks && callbacks.onEnd) callbacks.onEnd();
    } else {
      this.speak(text, callbacks);
    }
  }
};
