import { Client } from "@notionhq/client";
import NodeCache from "node-cache";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const n2m = new NotionToMarkdown({ notionClient: notion });
const cache = new NodeCache({ stdTTL: 3600 }); // 1 hour cache

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
    // Fetch page metadata
    const page = await notion.pages.retrieve({ page_id: id });

    // Convert page blocks → markdown
    const mdBlocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    const dataToCache = { page, markdown: mdString.parent }
    cache.set(cacheKey, dataToCache);

    return res.status(200).json(dataToCache);
  } catch (error) {
    console.error("Notion API error:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
