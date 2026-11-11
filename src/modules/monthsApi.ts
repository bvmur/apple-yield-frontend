// Месяц так, как его отдаёт наш веб-сервис: GET /api/months/feed/{id}.
// Поля названы так же, как в API, чтобы в ЛР6 подключить бэкенд без переделок.
export interface Month {
  id: number
  title: string
  norm_temp: number | null // норма температуры, °C
  norm_precip: number | null // норма осадков, мм
  description: string | null
  image_url: string // пустая строка — фото нет, покажем фото по умолчанию
  video_url: string // пустая строка — видео нет, покажем видео по умолчанию
  likes_count: number
}
