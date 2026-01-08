import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'oac9czp0',
    dataset: 'production',
    useCdn: false, // Ensure fresh data
    apiVersion: '2023-05-03',
});

const query = '*[_type in ["homePage", "aboutPage", "structurePage"]]';

try {
    const result = await client.fetch(query);
    console.log(JSON.stringify(result, null, 2));
} catch (error) {
    console.error("Error fetching data:", error);
}
