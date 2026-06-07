import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sub-lift.vercel.app',
      lastModified: new Date(),
    },
  ]
}
