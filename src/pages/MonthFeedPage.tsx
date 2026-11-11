import type { FC } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import type { AppOutletContext } from '../AppLayout'
import { MonthFeedItem } from '../components/MonthFeedItem/MonthFeedItem'
import { MONTHS_MOCK } from '../modules/mock'
import { ROUTES } from '../Routes'

// Лента. /feed — первый месяц из текущего списка, /feed/3 — месяц с id 3.
const MonthFeedPage: FC = () => {
  const { id } = useParams() // id из адреса строкой, например "3"
  const navigate = useNavigate()
  const { cards } = useOutletContext<AppOutletContext>()

  // Ищем сначала в текущем списке плитки, потом во всём mock (если открыли ссылку напрямую)
  const month = id
    ? cards.find((item) => String(item.id) === id) ?? MONTHS_MOCK.find((item) => String(item.id) === id)
    : cards[0]

  // «Далее» — следующий месяц в том порядке, что на плитке; после последнего снова первый,
  // как метод GET /api/months/feed/{id}?next=true на нашем бэкенде
  const handleNext = () => {
    if (!month || cards.length === 0) return
    const index = cards.findIndex((item) => item.id === month.id)
    const next = cards[(index + 1) % cards.length]
    navigate(`${ROUTES.FEED}/${next.id}`)
  }

  if (!month) {
    return <main className="content"><div className="empty">Месяц не найден</div></main>
  }

  // key={month.id}: при переходе на другой месяц компонент создаётся заново,
  // и его состояние (раскрытое описание, видео по умолчанию) сбрасывается
  return <MonthFeedItem key={month.id} month={month} onNext={handleNext} />
}

export default MonthFeedPage
