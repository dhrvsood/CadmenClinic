import { Client } from "@notionhq/client";
import NodeCache from "node-cache";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const cache = new NodeCache({ stdTTL: 3600 }); // Cache TTL: 1 hour

export default async function handler(req, res) {
  const { limit = 6, cursor } = req.query;
  const cacheKey = `pages_${limit}_${cursor || "start"}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      page_size: parseInt(limit, 10),
      start_cursor: cursor || undefined,
    });

    const minimalData = response.results.map((page) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text,
      icon: page.icon?.file?.url || null, // Handle missing icon
    }));

    const dataToCache = {
      results: minimalData,
      nextCursor: response.next_cursor,
      hasMore: response.has_more,
    };
    cache.set(cacheKey, dataToCache);

    return res.status(200).json(dataToCache);
  } catch (error) {
    console.error("Notion API error:", error.message); // Add logging for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
}
