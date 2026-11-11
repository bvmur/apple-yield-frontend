import { useState } from 'react'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TabBar } from './components/TabBar/TabBar'
import { MONTHS_MOCK } from './modules/mock'
import type { Month } from './modules/monthsApi'

// Что общий макет передаёт страницам через Outlet (без Redux и без React Context)
export interface AppOutletContext {
  cards: Month[] // месяцы, которые сейчас показаны на плитке (с учётом фильтра)
  setCards: (cards: Month[]) => void
}

// Общая оболочка: «экран телефона», страница по текущему адресу и нижняя панель
export const AppLayout: FC = () => {
  // Сразу кладём mock, чтобы лента работала, даже если плитку ещё не открывали
  const [cards, setCards] = useState<Month[]>(MONTHS_MOCK)

  return (
    <div className="screen">
      <Outlet context={{ cards, setCards } satisfies AppOutletContext} />
      <TabBar />
    </div>
  )
}
