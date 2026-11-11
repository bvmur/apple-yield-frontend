import { useState } from 'react'
import type { FC } from 'react'
import type { Month } from '../../modules/monthsApi'
import { DEFAULT_VIDEO, imageOrDefault, videoOrDefault } from '../../modules/media'
import { IconDrop, IconHeart, IconNext, IconTemp } from '../Icons'

interface Props {
  month: Month
  onNext: () => void // нажали «Следующий месяц»
}

// Один месяц ленты на весь экран: вертикальное видео, название, описание и колонка справа
export const MonthFeedItem: FC<Props> = ({ month, onNext }) => {
  const [videoSrc, setVideoSrc] = useState(videoOrDefault(month.video_url))
  const [expanded, setExpanded] = useState(false) // раскрыто ли описание («Ещё»)

  return (
    <main className="content content--feed">
      <video
        className="feed__video"
        src={videoSrc}
        poster={imageOrDefault(month.image_url)}
        onError={() => setVideoSrc(DEFAULT_VIDEO)}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="feed__shade" />

      <div className="feed__info">
        <h1 className="feed__title">{month.title}</h1>
        {month.description && (
          <>
            <p className={`more-text ${expanded ? 'more-text--open' : ''}`}>{month.description}</p>
            <button type="button" className="more-link" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Свернуть' : 'Ещё'}
            </button>
          </>
        )}
      </div>

      <div className="feed__side">
        <div className="side-item" title="Норма температуры">
          <span className="side-item__circle"><IconTemp /></span>
          {month.norm_temp !== null ? `${month.norm_temp > 0 ? '+' : ''}${month.norm_temp} °C` : '—'}
        </div>
        <div className="side-item" title="Норма осадков">
          <span className="side-item__circle"><IconDrop /></span>
          {month.norm_precip !== null ? `${month.norm_precip} мм` : '—'}
        </div>
        <div className="side-item side-item--like" title="Лайки">
          <span className="side-item__circle"><IconHeart /></span>
          {month.likes_count}
        </div>
        <button type="button" className="side-item side-item--next" title="Следующий месяц" onClick={onNext}>
          <span className="side-item__circle"><IconNext /></span>
        </button>
      </div>
    </main>
  )
}
