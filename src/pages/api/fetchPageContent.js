import { Client } from "@notionhq/client";
import NodeCache from "node-cache";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const cache = new NodeCache({ stdTTL: 3600 }); // 1-hour cache TTL

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing page ID" });
  }

  const cacheKey = `page_content_${id}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  try {
    const page = await notion.pages.retrieve({ page_id: id });

    let cursor = undefined;
    let hasMore = true;
    let blocks = [];

    const fetchBlocks = async () => {
      const blockRequests = [];
      while (hasMore) {
        blockRequests.push(
          notion.blocks.children.list({
            block_id: id,
            start_cursor: cursor,
          })
        );
        hasMore = false;
      }
      return await Promise.all(blockRequests);
    };

    const blockResponses = await fetchBlocks();
    blockResponses.forEach(response => {
      blocks.push(...response.results);
      cursor = response.next_cursor;
    });

    const dataToCache = { page, blocks };
    cache.set(cacheKey, dataToCache);

    return res.status(200).json(dataToCache);
  } catch (error) {
    console.error("Notion API error:", error.message); // Improved error logging
    return res.status(500).json({ error: "Internal server error" });
  }
}
