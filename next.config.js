/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // Pexels
      { protocol: "https", hostname: "images.pexels.com" },

      // Cloudinary
      { protocol: "https", hostname: "res.cloudinary.com" },

      // Skill Icons
      { protocol: "https", hostname: "go-skill-icons.vercel.app" },

      // GitHub Raw
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "www.raw.githubusercontent.com" },

      // BlackMagic (DaVinci Resolve)
      { protocol: "https", hostname: "www.blackmagicdesign.com" },

      // CapCut CDN
      { protocol: "https", hostname: "lf16-capcut.bytedanceapi.com" },

      // Apple assets
      { protocol: "https", hostname: "www.apple.com" },

      // Filmora (Wondershare)
      { protocol: "https", hostname: "www.wondershare.com" },

      // Canva
      { protocol: "https", hostname: "static.canva.com" },
      { protocol: "https", hostname: "www.canva.com" },

      // Adobe assets
      { protocol: "https", hostname: "www.adobe.com" },

      // Wikimedia (Premiere / After Effects / Illustrator SVG icons)
      { protocol: "https", hostname: "upload.wikimedia.org" },

      // Blender icons
      { protocol: "https", hostname: "www.blender.org" },

      // YouTube thumbnails
      { protocol: "https", hostname: "i.ytimg.com" },

      // Instagram CDN
      { protocol: "https", hostname: "scontent.cdninstagram.com" },

      // Avid Pro Tools
      { protocol: "https", hostname: "www.avid.com" },

      // InShot
      { protocol: "https", hostname: "inshot.com" },

      // VSCO
      { protocol: "https", hostname: "vsco.co" },

      // Frame.io
      { protocol: "https", hostname: "frame.io" },

      // Dropbox
      { protocol: "https", hostname: "cfl.dropboxstatic.com" },

      // Google Drive (gstatic)
      { protocol: "https", hostname: "ssl.gstatic.com" },
    ],

    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "go-skill-icons.vercel.app",
      "raw.githubusercontent.com",
      "www.raw.githubusercontent.com",
      "www.blackmagicdesign.com",
      "lf16-capcut.bytedanceapi.com",
      "www.apple.com",
      "www.wondershare.com",
      "static.canva.com",
      "www.canva.com",
      "www.adobe.com",
      "upload.wikimedia.org",
      "www.blender.org",
      "i.ytimg.com",
      "scontent.cdninstagram.com",
      "www.avid.com",
      "inshot.com",
      "vsco.co",
      "frame.io",
      "cfl.dropboxstatic.com",
      "ssl.gstatic.com",
    ],
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
