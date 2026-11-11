import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES, ROUTE_LABELS } from '../../Routes'
import { IconFeed, IconAdd, IconGrid, IconLogin } from '../Icons'
import './TabBar.css'

// Нижняя панель из 4 пунктов. В ЛР5 работают только «Лента» и «Плитка»,
// «Добавить» и «Вход» видны, но недоступны (disabled) — для них нужен бэкенд.
export const TabBar: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isFeed = pathname.startsWith(ROUTES.FEED)
  const isList = pathname === ROUTES.LIST

  return (
    <nav className="tabbar">
      <button
        type="button"
        className={`tab ${isFeed ? 'tab--active' : ''}`}
        onClick={() => navigate(ROUTES.FEED)}
      >
        <IconFeed />
        {ROUTE_LABELS.FEED}
      </button>

      <button type="button" className="tab" disabled title="Доступно после входа">
        <IconAdd />
        {ROUTE_LABELS.ADD}
      </button>

      <button
        type="button"
        className={`tab ${isList ? 'tab--active' : ''}`}
        onClick={() => navigate(ROUTES.LIST)}
      >
        <IconGrid />
        {ROUTE_LABELS.LIST}
      </button>

      <button type="button" className="tab" disabled title="Появится в ЛР6">
        <IconLogin />
        {ROUTE_LABELS.LOGIN}
      </button>
    </nav>
  )
}
