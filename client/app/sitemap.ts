import { MetadataRoute } from 'next'

export const baseUrl = 'https://cristimiloiu.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/work/genezio',
    '/work/genezio-intern',
    '/work/lse',
    '/work/huawei',
    '/education/master',
    '/education/bachelor',
    '/projects/bachelor-project',
    '/projects/portfolio',
    '/projects/audio-analysis',
    '/projects/facial-emotion-recognition',
    '/projects/comparative-modeling',
    '/awards/bachelor-thesis',
    '/awards/api-in-seconds',
    '/awards/electron-hackathon',
    '/awards/scientific-communications-2023',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
