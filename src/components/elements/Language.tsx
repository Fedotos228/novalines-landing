import { useLanguage } from '@/hooks/useLanguage'

export default function Language() {
  const { handleLanguageClick } = useLanguage()

  return (
    <>
      <button onClick={() => handleLanguageClick('ro')} className="text-white/50 text-red-500">Ro</button>
      <button onClick={() => handleLanguageClick('en')} className="text-white">En</button>
    </>
  )
}