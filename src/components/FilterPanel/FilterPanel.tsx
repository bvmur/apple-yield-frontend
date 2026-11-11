import type { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import './FilterPanel.css'

// Границы слайдера — как в ЛР1
export const TEMP_MIN = -10
export const TEMP_MAX = 25

interface Props {
  value: number // где сейчас стоит ползунок
  applied: number | null // какой фильтр применён (null — показаны все месяцы)
  onChange: (value: number) => void // ползунок сдвинули
  onApply: () => void // нажали «Показать»
  onReset: () => void // нажали «Сбросить»
}

const formatTemp = (t: number) => `${t > 0 ? '+' : ''}${t} °C`

// Фильтр по норме температуры. Своего состояния не хранит:
// значения приходят от страницы через props, а изменения уходят обратно через функции-колбэки.
export const FilterPanel: FC<Props> = ({ value, applied, onChange, onApply, onReset }) => (
  <Form
    className="filter"
    onSubmit={(event) => {
      event.preventDefault() // не перезагружать страницу, как сделала бы обычная форма
      onApply()
    }}
  >
    <Form.Label className="filter__label" htmlFor="temp_from">
      Температура от: <span className="filter__value">{formatTemp(value)}</span>
    </Form.Label>

    <Form.Range
      id="temp_from"
      className="range"
      min={TEMP_MIN}
      max={TEMP_MAX}
      step={1}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    />
    <div className="filter__scale">
      <span>{formatTemp(TEMP_MIN)}</span>
      <span>{formatTemp(TEMP_MAX)}</span>
    </div>

    <div className="filter__buttons">
      <Button className="btn--outline" type="button" onClick={onReset}>
        Сбросить
      </Button>
      <Button type="submit">Показать</Button>
    </div>

    <p className="filter__applied">
      {applied === null ? 'Показаны все месяцы' : `Показаны месяцы от ${formatTemp(applied)}`}
    </p>
  </Form>
)
