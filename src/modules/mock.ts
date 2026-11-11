import type { Month } from './monthsApi'

// Mock-коллекция: в ЛР5 карточки берутся только отсюда, без бэкенда.
// У Июля, Августа и Сентября медиа пустые — на них проверяется фото и видео по умолчанию.
const MINIO = 'http://localhost:9000/media'

export const MONTHS_MOCK: Month[] = [
  {
    id: 1,
    title: 'Апрель',
    norm_temp: 6,
    norm_precip: 40,
    description: 'Почки набухают и раскрываются. Главный риск — возвратные заморозки.',
    image_url: `${MINIO}/april.jpg`,
    video_url: `${MINIO}/april.mp4`,
    likes_count: 4,
  },
  {
    id: 2,
    title: 'Май',
    norm_temp: 13,
    norm_precip: 55,
    description: 'Цветение и завязь. Важны опылители и защита от заморозков.',
    image_url: `${MINIO}/may.jpg`,
    video_url: `${MINIO}/may.mp4`,
    likes_count: 1,
  },
  {
    id: 3,
    title: 'Июнь',
    norm_temp: 17,
    norm_precip: 80,
    description: 'Июньское осыпание лишней завязи, рост плодов. Нужен регулярный полив.',
    image_url: `${MINIO}/june.jpg`,
    video_url: `${MINIO}/june.mp4`,
    likes_count: 3,
  },
  {
    id: 4,
    title: 'Июль',
    norm_temp: 19,
    norm_precip: 90,
    description: 'Активный налив плодов. Главный риск — засуха и плодожорка.',
    image_url: '',
    video_url: '',
    likes_count: 2,
  },
  {
    id: 5,
    title: 'Август',
    norm_temp: 18,
    norm_precip: 75,
    description: 'Созревают летние сорта, закладываются цветковые почки на следующий год.',
    image_url: '',
    video_url: '',
    likes_count: 5,
  },
  {
    id: 6,
    title: 'Сентябрь',
    norm_temp: 12,
    norm_precip: 60,
    description: 'Сбор осенних и зимних сортов. Плоды нужно снять до первых заморозков.',
    image_url: '',
    video_url: '',
    likes_count: 0,
  },
]
