import Alpine from 'alpinejs'
import {
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toCapitalizedCase,
  toAlternatingCase,
  toTitleCase,
  toInverseCase,
  toSlugCase,
} from './caseConverter.js'
import './style.css'

document.addEventListener('alpine:init', () => {
  // ─── Theme Store ───────────────────────────────────────────────────────────
  Alpine.store('theme', {
    current: (localStorage.getItem('theme')) || 'system',

    init() {
      this._apply(this.current)
      // Watch for OS-level preference changes when in system mode
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.current === 'system') this._apply('system')
      })
    },

    toggle() {
      const map = { light: 'dark', dark: 'system', system: 'light' }
      this.current = map[this.current]
      localStorage.setItem('theme', this.current)
      this._apply(this.current)
    },

    _apply(t) {
      const root = document.documentElement
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (t === 'dark' || (t === 'system' && prefersDark)) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    },

    get icon() {
      return {
        light: 'fa-sun text-orange-500',
        dark: 'fa-moon text-blue-400',
        system: 'fa-desktop text-slate-400',
      }[this.current]
    },

    get title() {
      const next = { light: 'dark', dark: 'system', system: 'light' }[this.current]
      return `Switch to ${next} mode`
    },
  })

  // ─── Converter Store ───────────────────────────────────────────────────────
  Alpine.store('converter', {
    text: '',
    copied: false,
    _copyTimer: null,

    get charCount() {
      return this.text.length
    },
    get wordCount() {
      return this.text.trim() === '' ? 0 : this.text.trim().split(/\s+/).length
    },
    get lineCount() {
      return this.text.trim() === '' ? 0 : this.text.split('\n').length
    },

    convert(type) {
      if (!this.text && type !== 'clear') return
      const map = {
        sentence: toSentenceCase,
        lower: toLowerCase,
        upper: toUpperCase,
        capitalized: toCapitalizedCase,
        alternating: toAlternatingCase,
        title: toTitleCase,
        inverse: toInverseCase,
        slug: toSlugCase,
      }
      if (type === 'clear') {
        this.text = ''
      } else if (map[type]) {
        this.text = map[type](this.text)
      }
    },

    async copy() {
      if (!this.text) return
      try {
        await navigator.clipboard.writeText(this.text)
        this.copied = true
        clearTimeout(this._copyTimer)
        this._copyTimer = setTimeout(() => { this.copied = false }, 2000)
      } catch (err) {
        console.error('Failed to copy text:', err)
      }
    },

    download() {
      if (!this.text) return
      const a = document.createElement('a')
      const file = new Blob([this.text], { type: 'text/plain' })
      a.href = URL.createObjectURL(file)
      a.download = 'caseconvertor-text.txt'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
  })
})

Alpine.start()

// Initialize theme after Alpine starts
Alpine.store('theme').init()
