export function GET() {
  return new Response(
    ['User-agent: *', 'Allow: /', 'Sitemap: https://www.misaelmoreno.com/sitemap-index.xml'].join('\n'),
    { headers: { 'Content-Type': 'text/plain' } },
  );
}
