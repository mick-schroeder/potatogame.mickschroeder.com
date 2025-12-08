export const siteConfig = {
  title: "Potato Game",
  description:
    "Potato Game is a cozy, gravity-based emoji puzzle. Tilt, combine matching emojis, and merge your way to make a potato.",
  siteUrl: "https://potatogame.mickschroeder.com",
  image: "/Potato Game-iOS-Default-1024x1024@1x.png",
  social: {
    twitter: "@mick_schroeder",
    github: "mick-schroeder",
  },
  appStoreUrl: "https://apps.apple.com/us/app/potato-game/id6477922776",
  macAppStoreUrl: "https://apps.apple.com/us/app/potato-game/id6477922776?platform=mac",
  githubUrl: "https://github.com/mick-schroeder/potatogame",
  authorUrl: "https://www.mickschroeder.com",
} as const;

export type SiteConfig = typeof siteConfig;
