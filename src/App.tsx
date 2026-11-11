import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { ROUTES } from './Routes'
import MonthsListPage from './pages/MonthsListPage'
import MonthFeedPage from './pages/MonthFeedPage'

// Роутер: общий AppLayout оборачивает обе страницы.
// /feed — первый месяц ленты, /feed/:id — конкретный месяц.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.LIST} element={<MonthsListPage />} />
          <Route path={ROUTES.FEED} element={<MonthFeedPage />} />
          <Route path={`${ROUTES.FEED}/:id`} element={<MonthFeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
