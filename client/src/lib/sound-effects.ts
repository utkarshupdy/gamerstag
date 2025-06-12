/**
 * Sound effects utility for GAMERS TAG website
 * Manages click sounds and other audio feedback
 */

class SoundManager {
  private clickSound: HTMLAudioElement | null = null;
  private isEnabled: boolean = true;
  private volume: number = 0.3;

  constructor() {
    this.initializeClickSound();
  }

  private initializeClickSound() {
    try {
      // Create audio element for click sound
      this.clickSound = new Audio();
      this.clickSound.preload = 'auto';
      this.clickSound.volume = this.volume;
      
      // Use a web-hosted click sound or create a simple beep
      this.createClickSound();
    } catch (error) {
      console.warn('Failed to initialize click sound:', error);
    }
  }

  private createClickSound() {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createClickBuffer = () => {
      const sampleRate = audioContext.sampleRate;
      const duration = 0.1; // 100ms
      const samples = Math.floor(sampleRate * duration);
      const buffer = audioContext.createBuffer(1, samples, sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < samples; i++) {
        // Create a quick click sound with frequency sweep
        const t = i / sampleRate;
        const frequency = 1000 * Math.exp(-t * 20); // Frequency drops quickly
        const amplitude = Math.exp(-t * 30); // Amplitude fades quickly
        data[i] = Math.sin(2 * Math.PI * frequency * t) * amplitude * 0.3;
      }
      
      return buffer;
    };

    // Store the buffer for later use
    this.clickBuffer = createClickBuffer();
  }

  private clickBuffer: AudioBuffer | null = null;

  public playClickSound() {
    if (!this.isEnabled) return;

    try {
      if (this.clickBuffer) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();
        
        source.buffer = this.clickBuffer;
        gainNode.gain.value = this.volume;
        
        source.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        source.start(0);
      }
    } catch (error) {
      console.warn('Failed to play click sound:', error);
    }
  }

  public setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.clickSound) {
      this.clickSound.volume = this.volume;
    }
  }

  public toggleSound() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  public iseSoundEnabled() {
    return this.isEnabled;
  }
}

// Create global sound manager instance
const soundManager = new SoundManager();

// Export functions for use throughout the application
export const playClickSound = () => soundManager.playClickSound();
export const setSoundVolume = (volume: number) => soundManager.setVolume(volume);
export const toggleSound = () => soundManager.toggleSound();
export const isSoundEnabled = () => soundManager.iseSoundEnabled();

// Add click sound to any interactive element
export const addClickSoundToElement = (element: HTMLElement) => {
  element.addEventListener('click', playClickSound);
  element.addEventListener('touchstart', playClickSound); // For mobile
};

// Add click sound to button component (legacy compatibility)
export const addClickSoundToButton = (element: HTMLElement) => {
  addClickSoundToElement(element);
};

// Remove click sound from any interactive element
export const removeClickSoundFromElement = (element: HTMLElement) => {
  element.removeEventListener('click', playClickSound);
  element.removeEventListener('touchstart', playClickSound);
};

// Remove click sound from button component (legacy compatibility)
export const removeClickSoundFromButton = (element: HTMLElement) => {
  removeClickSoundFromElement(element);
};

// Auto-add click sounds to all interactive elements on page load
export const initializeGlobalClickSounds = () => {
  // Enhanced selector for all clickable elements
  const clickableSelectors = [
    'button',
    '[role="button"]',
    '.clickable',
    'a',
    '[onClick]',
    '.cursor-pointer',
    'input[type="button"]',
    'input[type="submit"]',
    'input[type="reset"]',
    '.btn',
    '.button',
    '[data-clickable]',
    '.nav-link',
    '.menu-item',
    '.card[onClick]',
    '.interactive'
  ];

  // Function to add click sound to any element
  const addSoundToElement = (element: HTMLElement) => {
    element.addEventListener('click', playClickSound);
    element.addEventListener('touchstart', playClickSound);
  };

  // Add click sounds to existing elements
  const clickableElements = document.querySelectorAll(clickableSelectors.join(', '));
  clickableElements.forEach(element => {
    if (element instanceof HTMLElement && !element.hasAttribute('data-sound-added')) {
      addSoundToElement(element);
      element.setAttribute('data-sound-added', 'true');
    }
  });

  // Observer for dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          // Check if the node itself is clickable
          const isClickable = clickableSelectors.some(selector => {
            try {
              return node.matches(selector);
            } catch (e) {
              return false;
            }
          });
          
          if (isClickable && !node.hasAttribute('data-sound-added')) {
            addSoundToElement(node);
            node.setAttribute('data-sound-added', 'true');
          }
          
          // Check for clickable elements within the added node
          const clickableElements = node.querySelectorAll(clickableSelectors.join(', '));
          clickableElements.forEach(element => {
            if (element instanceof HTMLElement && !element.hasAttribute('data-sound-added')) {
              addSoundToElement(element);
              element.setAttribute('data-sound-added', 'true');
            }
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

// Initialize on DOM load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGlobalClickSounds);
  } else {
    initializeGlobalClickSounds();
  }
}