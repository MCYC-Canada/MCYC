// import { getAllEntries, getBlogListRes } from '../helper';
// import { Context, Pages, PostPage } from "../typescript/pages";

export type Context = {
  resolvedUrl: string;
  setHeader: Function;
  write: Function;
  end: Function;
}

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: {res: Context}) => {

  // const baseUrl = process.env.NEXT_PUBLIC_HOSTED_URL || 'http://localhost:3000';

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://mcyc-silk.vercel.app/</loc>
  <lastmod>2024-08-16T16:31:23+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://mcyc-silk.vercel.app/team</loc>
  <lastmod>2024-08-16T16:31:23+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://mcyc-silk.vercel.app/monthly_theme</loc>
  <lastmod>2024-08-16T16:31:23+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://mcyc-silk.vercel.app/past_events</loc>
  <lastmod>2024-08-16T16:31:23+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://mcyc-silk.vercel.app/sponsors</loc>
  <lastmod>2024-08-16T16:31:23+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;