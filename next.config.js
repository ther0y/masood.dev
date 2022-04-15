module.exports = {
  swcMinify: true,
  future: {
    webpack5: true
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400000, must-revalidate'
          }
        ]
      }
    ];
  }
};
