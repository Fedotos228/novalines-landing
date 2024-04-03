export function saveLanguageToLocalStorage(lang: string) {
  localStorage.setItem('language', lang)
}

export function getLanguageFromLocalStorage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language')
  }

  return null
}