import { useState } from 'react'
import type { FC } from 'react'
import { Card } from 'react-bootstrap'
import type { Month } from '../../modules/monthsApi'
import { DEFAULT_IMAGE, imageOrDefault } from '../../modules/media'
import { IconDrop, IconHeart, IconTemp } from '../Icons'

interface Props {
  month: Month // данные месяца из mock
  onClick: () => void // что делать при нажатии на карточку (страница передаёт переход в ленту)
}

// Карточка месяца на плитке
export const MonthCard: FC<Props> = ({ month, onClick }) => {
  // Пустое поле → сразу фото по умолчанию; ссылка есть, но файл не загрузился → тоже оно
  const [src, setSrc] = useState(imageOrDefault(month.image_url))

  return (
    <Card className="month-card" onClick={onClick}>
      <Card.Img
        className="card__photo"
        src={src}
        alt={month.title}
        onError={() => setSrc(DEFAULT_IMAGE)}
      />
      <Card.Title className="card__title">{month.title}</Card.Title>

      <div className="params">
        {month.norm_temp !== null && (
          <span className="param">
            <IconTemp /> {month.norm_temp > 0 ? '+' : ''}{month.norm_temp} °C
          </span>
        )}
        {month.norm_precip !== null && (
          <span className="param">
            <IconDrop /> {month.norm_precip} мм
          </span>
        )}
        <span className="param param--like">
          <IconHeart /> {month.likes_count}
        </span>
      </div>
    </Card>
  )
}
