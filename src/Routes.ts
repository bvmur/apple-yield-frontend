// Адреса страниц приложения в одном месте, чтобы не писать строки по всему коду.
export const ROUTES = {
  FEED: '/feed',
  ADD: '/add',
  LIST: '/',
  LOGIN: '/login',
}

export type RouteKeyType = keyof typeof ROUTES

// Подписи пунктов нижней панели
export const ROUTE_LABELS: { [key in RouteKeyType]: string } = {
  FEED: 'Лента',
  ADD: 'Добавить',
  LIST: 'Плитка',
  LOGIN: 'Вход',
}
