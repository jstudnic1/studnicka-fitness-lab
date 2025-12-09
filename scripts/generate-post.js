import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Setup __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	if (!process.env.GEMINI_API_KEY) {
		console.error('Error: GEMINI_API_KEY is missing.');
		process.exit(1);
	}

	const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });

	console.log('Generating new blog post with Gemini...');

	try {
		const prompt = `
      You are a professional fitness and health journalist. Write a blog post in Czech about a trending topic in fitness or nutrition (e.g., new research, popular diet trends, effective training methods).

      The current date is ${new Date().toLocaleDateString()}.

      Return a VALID JSON object with this exact structure:
      {
        "title": "Czech Title",
        "slug": "url-friendly-slug",
        "excerpt": "Short summary (max 150 chars)",
        "description": "SEO description (max 160 chars)",
        "content": "Full concise article content (approx 3 paragraphs, formatted with newlines)",
        "image": "/images/blog/default.jpg"
      }

      For the image, pick one of these random options:
      "/images/blog/BRP_img.jpeg", "/images/blog/suplements.jpg", "/images/blog/super_series.avif"
    `;

		const result = await model.generateContent(prompt);
		const response = await result.response;
		let text = response.text();

		// Cleanup: Gemini often wraps JSON in markdown blocks like ```json ... ```
		text = text.replace(/```json/g, '').replace(/```/g, '').trim();

		const newPostData = JSON.parse(text);

		// Add generated fields
		const newPost = {
			id: Date.now(),
			date: new Date().toLocaleDateString('cs-CZ'),
			...newPostData
		};

		// Read existing posts
		const postsPath = path.join(__dirname, '../src/data/posts.json');
		const existingPostsRaw = fs.readFileSync(postsPath, 'utf8');
		const existingPosts = JSON.parse(existingPostsRaw);

		// Add new post to the beginning
		const updatedPosts = [newPost, ...existingPosts];

		// Write back to file
		fs.writeFileSync(postsPath, JSON.stringify(updatedPosts, null, 2), 'utf8');

		console.log(`Successfully generated and added post: ${newPost.title}`);

	} catch (error) {
		console.error('Failed to generate post:', error);
		process.exit(1);
	}
}

main();
