import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tektonics.africa'
  
  const routes = [
    '',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
    '/product/flux',
    '/product/notifications-gateway',
    '/product/netbotz',
    '/product/octaipipe',
    '/product/thingsboard-pe',
    '/product/netxms',
    '/product/ecostruxure-it-expert',
    '/product/ecostruxure-it-advisor',
    '/product/ecostruxure-data-center-expert',
    '/product/ecostruxure-power-monitoring-expert',
    '/use-cases/dcim',
    '/use-cases/environmental-monitoring',
    '/use-cases/tektonics-flux',
    '/use-cases/notifications-gateway',
    '/use-cases/dry-contact-monitoring',
    '/use-cases/netxms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly' as any,
    priority: route === '' ? 1 : 0.8,
  }))
}
