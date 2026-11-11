import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import type { AppOutletContext } from '../AppLayout'
import { FilterPanel, TEMP_MIN } from '../components/FilterPanel/FilterPanel'
import { MonthCard } from '../components/MonthCard/MonthCard'
import { MONTHS_MOCK } from '../modules/mock'
import { ROUTES } from '../Routes'

// Плитка месяцев: фильтр по норме температуры и карточки.
// Данные только из mock, запросов к бэкенду нет.
const MonthsListPage: FC = () => {
  const { cards, setCards } = useOutletContext<AppOutletContext>()
  const navigate = useNavigate()

  const [tempFrom, setTempFrom] = useState(TEMP_MIN) // положение ползунка
  const [applied, setApplied] = useState<number | null>(null) // применённый фильтр

  // Каждый раз, когда меняется применённый фильтр, пересчитываем список
  // и кладём его в общий cards — по нему же лента листает «Далее».
  useEffect(() => {
    const filtered =
      applied === null
        ? MONTHS_MOCK
        : MONTHS_MOCK.filter((month) => month.norm_temp !== null && month.norm_temp >= applied)
    setCards(filtered)
  }, [applied, setCards])

  const handleReset = () => {
    setTempFrom(TEMP_MIN)
    setApplied(null)
  }

  return (
    <>
      <header className="topbar">
        <h1 className="page-title">Месяцы</h1>
        <p className="page-subtitle">Нормы температуры и осадков для сада яблонь</p>
      </header>

      <main className="content">
        <FilterPanel
          value={tempFrom}
          applied={applied}
          onChange={setTempFrom}
          onApply={() => setApplied(tempFrom)}
          onReset={handleReset}
        />

        {cards.length === 0 ? (
          <div className="empty">Месяцев с такой температурой нет</div>
        ) : (
          <div className="grid">
            {cards.map((month) => (
              <MonthCard
                key={month.id}
                month={month}
                onClick={() => navigate(`${ROUTES.FEED}/${month.id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default MonthsListPage
