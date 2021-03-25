import sanityClient from "@sanity/client";

const options = {
    projectId: "c66fvj65",
    dataset: "production"
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE === 'production',
});

export default client;