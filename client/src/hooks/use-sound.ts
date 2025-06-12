import { useCallback, useRef } from 'react';

// Sound effect URLs - These would be actual sound files in production
const SOUNDS = {
  click: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...', // Truncated for brevity
  hover: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...',
  success: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...',
  error: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...',
  pageLoad: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...',
  notification: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2vGsgBz2c3/O/cyMGK4Pm8tiJOAcae7rh8...'
};

export type SoundType = keyof typeof SOUNDS;

interface UseSoundOptions {
  volume?: number;
  enabled?: boolean;
}

export function useSound(options: UseSoundOptions = {}) {
  const { volume = 0.3, enabled = true } = options;
  const audioRefs = useRef<{ [key in SoundType]?: HTMLAudioElement }>({});

  const initAudio = useCallback((type: SoundType) => {
    if (!audioRefs.current[type]) {
      const audio = new Audio(SOUNDS[type]);
      audio.volume = volume;
      audio.preload = 'auto';
      audioRefs.current[type] = audio;
    }
    return audioRefs.current[type]!;
  }, [volume]);

  const playSound = useCallback((type: SoundType) => {
    if (!enabled) return;
    
    try {
      const audio = initAudio(type);
      audio.currentTime = 0;
      audio.play().catch(error => {
        // Silently handle audio play errors (user interaction required)
        console.debug('Audio play prevented:', error);
      });
    } catch (error) {
      console.debug('Sound play error:', error);
    }
  }, [enabled, initAudio]);

  const setVolume = useCallback((newVolume: number) => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) audio.volume = newVolume;
    });
  }, []);

  return {
    playSound,
    setVolume,
    click: () => playSound('click'),
    hover: () => playSound('hover'),
    success: () => playSound('success'),
    error: () => playSound('error'),
    pageLoad: () => playSound('pageLoad'),
    notification: () => playSound('notification')
  };
}

// Custom hook for enhanced UI sounds
export function useGameSounds() {
  const sound = useSound({ volume: 0.2 });

  return {
    ...sound,
    buttonClick: sound.click,
    buttonHover: sound.hover,
    cardHover: () => sound.playSound('hover'),
    pageTransition: sound.pageLoad,
    achievement: sound.success,
    error: sound.error
  };
}