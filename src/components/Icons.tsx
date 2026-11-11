import type { FC } from 'react'

// SVG-иконки из шаблонов ЛР1 (те же path, что в months_feed.html), оформленные как маленькие компоненты
export const IconFeed: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3" /></svg>
)

export const IconAdd: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
)

export const IconGrid: FC = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

export const IconLogin: FC = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
  </svg>
)

export const IconTemp: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /></svg>
)

export const IconDrop: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>
)

export const IconHeart: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
)

export const IconNext: FC = () => (
  <svg className="icon" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
)
