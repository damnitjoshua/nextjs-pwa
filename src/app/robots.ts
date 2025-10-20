import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [],
			},
		],
		sitemap: `https://nextjs15-pwa.vercel.app/sitemap.xml`,
	};
}
