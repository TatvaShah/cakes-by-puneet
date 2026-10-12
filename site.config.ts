import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Cakes by Puneet",
  tagline: "Custom buttercream cakes and desserts in Brampton, made to order for your celebration.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://cakes-by-puneet.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#d86a91" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton, Ontario",
    headline: "Buttercream cakes made for your moment",
    subhead:
      "Custom cakes and desserts for birthdays, themed parties, and sweet celebrations. Order through Instagram or the forms below, and please allow two weeks' notice.",
    images: [
      { src: "/images/post-1.jpg", alt: "Green boho buttercream cake by Cakes by Puneet", width: 1080, height: 1440 },
      { src: "/images/post-7.jpg", alt: "Berry first birthday buttercream cake", width: 1080, height: 1440 },
      { src: "/images/post-4.jpg", alt: "Basketball themed cake and cupcakes", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom buttercream cakes",
    "Brampton pickup",
    "Two weeks' notice",
    "Orders by DM or form",
  ],

  about: {
    title: "Sweet, personal, and made for you",
    body: [
      "Cakes by Puneet creates custom buttercream cakes and desserts in Brampton, Ontario. From first birthdays to themed celebrations, each cake is designed around your idea.",
      "Orders and inquiries are welcome by Instagram DM, email, or the cake and dessert order forms. Please allow two weeks' notice so there is time to plan your design.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Berry themed first birthday cake with fresh fruit", width: 1080, height: 1350 },
  },

  menu: {
    title: "What you can order",
    intro: "Every cake is custom. Share your date, size, flavour, and design idea for a quote. No set prices are listed here.",
    variant: "cards",
    groups: [
      {
        title: "Custom cakes and desserts",
        note: "Quoted for your date and design",
        items: [
          {
            name: "Custom buttercream cakes",
            description: "Celebration cakes finished in buttercream, styled to your theme.",
            image: { src: "/images/post-1.jpg", alt: "Custom green boho buttercream cake" },
            href: "https://www.instagram.com/p/DeXi533qLdg/",
          },
          {
            name: "First birthday cakes",
            description: "Sweet smash and celebration cakes for little milestones.",
            image: { src: "/images/post-7.jpg", alt: "Berry first birthday cake" },
            href: "https://www.instagram.com/p/DcPMQ02KtUs/",
          },
          {
            name: "Themed cakes and cupcakes",
            description: "Sports, characters, and party themes with matching cupcakes.",
            image: { src: "/images/post-2.jpg", alt: "Basketball themed cake and cupcakes" },
            href: "https://www.instagram.com/p/DdzcfxSKYp8/",
          },
          {
            name: "Desserts",
            description: "Custom dessert orders through the dessert form.",
            image: { src: "/images/post-6.jpg", alt: "Berry first birthday buttercream cake detail" },
            href: "https://www.instagram.com/p/DcW4zQnK3jj/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at recent cakes",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1440,
        alt: "Green boho buttercream cake",
        caption: "Boho green cake",
        href: "https://www.instagram.com/p/DeXi533qLdg/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1440,
        alt: "Basketball themed cake with purple and gold cupcakes",
        caption: "Basketball theme",
        href: "https://www.instagram.com/p/DdzcfxSKYp8/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1440,
        alt: "Basketball cupcakes and cake setup",
        caption: "Cupcake inspo",
        href: "https://www.instagram.com/p/DdPSJWpqGFb/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1350,
        alt: "Berry first birthday cake with strawberries",
        caption: "Berry first birthday",
        href: "https://www.instagram.com/p/DcweLQNqjMZ/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1350,
        alt: "Buttercream berry birthday cake",
        caption: "Buttercream berries",
        href: "https://www.instagram.com/p/DcW4zQnK3jj/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1440,
        alt: "Berry First Birthday cake close up",
        caption: "Berry First Birthday",
        href: "https://www.instagram.com/p/DcPMQ02KtUs/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1350,
        alt: "Dark elegant buttercream cake",
        caption: "Custom celebration cake",
        href: "https://www.instagram.com/p/C74g79-RyQa/",
      },
      {
        src: "/images/post-3.jpg",
        width: 720,
        height: 1280,
        alt: "Basketball themed cake reel still",
        caption: "Lakers theme",
        href: "https://www.instagram.com/p/DdhLbGFq2yV/",
      },
    ],
  },

  instagram: {
    handle: "cakesbypuneet",
    embeds: [
      "https://www.instagram.com/p/DeXi533qLdg/",
      "https://www.instagram.com/p/DcPMQ02KtUs/",
      "https://www.instagram.com/p/DdzcfxSKYp8/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order by DM or form",
    intro:
      "Tap the button for a starter Instagram message, or use the cake and dessert order forms. Please allow two weeks' notice.",
    dmMessage:
      "Hi Cakes by Puneet! I would like to order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [
      { label: "Cake Order Form", href: "https://forms.gle/uSqF8M4vkaeUkcHJ8" },
      { label: "Dessert Order Form", href: "https://forms.gle/9Ai2fER45LxNoLmg9" },
    ],
    note: "Please allow two weeks' notice. You can also email cakesbypuneet@gmail.com.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send an Instagram DM with your date, servings or size, flavour, and design idea, or fill out the cake or dessert order form. You can also email cakesbypuneet@gmail.com.",
    },
    {
      q: "How much notice do you need?",
      a: "Please allow two weeks' notice so there is time to plan and bake your order.",
    },
    {
      q: "Where are you based?",
      a: "Cakes by Puneet is based in Brampton, Ontario.",
    },
    {
      q: "Do you post prices online?",
      a: "Quotes depend on size, design, and date. Share your details by DM or form and you will get a personal quote.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
    email: "cakesbypuneet@gmail.com",
    socials: [{ label: "Linktree", href: "https://linktr.ee/cakesbypuneet" }],
  },

  seo: {
    title: "Cakes by Puneet | Custom buttercream cakes in Brampton",
    description:
      "Custom buttercream cakes and desserts in Brampton, Ontario. Order by Instagram DM or Google Form. Please allow two weeks' notice.",
    keywords: [
      "custom cakes Brampton",
      "buttercream cakes Brampton",
      "birthday cakes Brampton",
      "custom desserts Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
