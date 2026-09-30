const baseUrl = 'https://developer-project-starter.vonnewmandevs.chatgpt.site';
export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/testimonials/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/get-started/`, changeFrequency: 'monthly', priority: 0.9 }
  ];
}
