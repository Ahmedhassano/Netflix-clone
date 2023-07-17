/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:"image.tmdb.org"
        }]
    },
    env: {
        Key_Api:"ef8975130d86ec69de418966ee31cde1"
      },
}

module.exports = nextConfig
