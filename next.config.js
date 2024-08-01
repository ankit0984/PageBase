module.exports = {
    distDir: 'build',
    // cacheHandler: require.resolve('./cache-handler.js'),
    // cacheHandler: require.resolve('./cache-handler.js'),
    // cacheMaxMemorySize: 0, // disable default in-memory caching
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',

            },
        ],
    },
}

