// Фото и видео по умолчанию лежат в папке public/ самого проекта.
// Браузер получает их по адресу от корня сайта: /DefaultImage.jpg и /DefaultVideo.mp4.
export const DEFAULT_IMAGE = '/DefaultImage.jpg'
export const DEFAULT_VIDEO = '/DefaultVideo.mp4'

// Пустое поле в услуге → подставляем медиа по умолчанию
export const imageOrDefault = (url: string) => url || DEFAULT_IMAGE
export const videoOrDefault = (url: string) => url || DEFAULT_VIDEO
