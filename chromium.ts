import puppeteer from "puppeteer";

export const getScreenshot = async (html: string) => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ["--no-sandbox"],
	});

	const page = await browser.newPage();

	await page.setViewport({ width: 592, height: 592 });
	await page.setContent(html);
	await page.evaluateHandle("document.fonts.ready");

	const file = await page.screenshot({ type: "png" });

	return file;
};
