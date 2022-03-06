import axios from "axios";
import express from "express";
import { createClient } from "pexels";
import { getHtml } from "./imageTemplate";
import { getScreenshot } from "./chromium";

const app = express();
const isDev = !process.env.AWS_REGION;

let port: string | number | undefined = process.env.PORT;
if (port == null || port == "") {
	port = 3300;
}

app.get("/", async (req, res) => {
	const verticle = await axios
		.get("https://www.abibliadigital.com.br/api/verses/nvi/random")
		.then((data) => data.data)
		.catch((err) => console.error(err));

	const client = createClient(
		"563492ad6f9170000100000137c51c35be9e495d805d553b0ecaba16"
	);

	const photos = await client.photos
		.search({
			query: "sun landscape",
			per_page: 1,
			page: Math.floor(Math.random() * (732 - 1) + 1),
		})
		.then((photos) => JSON.parse(JSON.stringify(photos)));

	const html = getHtml(
		{
			book: verticle.book.name,
			chapter: verticle.chapter,
			number: verticle.number,
			text: verticle.text,
		},
		photos.photos[0].src.original
	);

	if (false) {
		res.setHeader("Content-Type", "text/html");
		res.end(html);

		return;
	}

	const image = await getScreenshot(html);

	res.statusCode = 200;

	res.setHeader("Content-Type", `image/png`);
	res.setHeader(
		"Cache-Control",
		"public, immutable, no-transform, s-maxage=100, max-age=100"
	);

	return res.end(image);
});

app.listen(port, () => {
	console.log(`🚀 Server running on port ${port}`);
});
