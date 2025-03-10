import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <div>
      <h1 className='text-red-700'>{t('title')}</h1>
      <Link href='/about'>{t('about')}dvsg</Link>
    </div>
  )
}
