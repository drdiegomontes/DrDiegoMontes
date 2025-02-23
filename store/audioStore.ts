import { create } from "zustand"

interface AudioStore {
  audio: HTMLAudioElement | null
  isPlaying: boolean
  initAudio: () => void
  togglePlay: () => Promise<void>
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  audio: null,
  isPlaying: false,
  initAudio: () => {
    if (typeof window === "undefined") return
    if (!get().audio) {
      const audioElement = new Audio(
        "https://pub-0ae00b868fc94e56b9cb2d2348c4e492.r2.dev/Dr.DiegoMontes-Website-Music.mp3",
      )
      audioElement.loop = true // Make the audio loop
      set({ audio: audioElement })
    }
  },
  togglePlay: async () => {
    const { audio } = get()
    if (!audio) return

    try {
      if (audio.paused) {
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          await playPromise
          set({ isPlaying: true })
        }
      } else {
        audio.pause()
        set({ isPlaying: false })
      }
    } catch (error) {
      console.error("Audio playback error:", error)
      set({ isPlaying: false })
    }
  },
}))

