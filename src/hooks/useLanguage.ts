import { getLanguageFromLocalStorage, saveLanguageToLocalStorage } from '@/libs/utils'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useLanguage = () => {
  const queryClient = useQueryClient()
  const language = getLanguageFromLocalStorage() || 'en'

  const handleLanguageClick = (lang: string) => {
    saveLanguageToLocalStorage(lang)
  }

  useEffect(() => {
    async function refetchQueries() {
      await queryClient.invalidateQueries({ stale: true })
    }

    refetchQueries()
  }, [language])

  return { language, handleLanguageClick }
}