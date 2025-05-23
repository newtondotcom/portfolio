import { DATA } from '@/data/resume';
import { test} from '@playwright/test';

const websites = DATA.projects;

async function recordVideo(page, project) {
    // Navigate to the website URL
    await page.goto(project.href);

    // Perform actions on the page
    // Scroll down by 1000px
    await page.evaluate(() => window.scrollBy(0, 1000));

    // Wait for a few seconds
    await page.waitForTimeout(5000);

    // Scroll up by 1000px
    await page.evaluate(() => window.scrollBy(0, -1000));

    // Wait for a few seconds
    await page.waitForTimeout(5000);

    // Close the page
    await page.close();

    // Stop recording the video
    const video = await page.video();

    // Save the video
    if (video) {
        await video.saveAs(`videos/${project.key}.webm`);
    }
}

for (const website of websites) {
    test(`record video for ${website.key}`, async ({ page }) => {
        await recordVideo(page, website);
    });
}
