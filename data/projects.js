// /data/projects.js
export const projects = [
  {
    slug: "performance-boost-for-all-about-aicom",
    title: "Performance Boost for All About AI.com – How-to Guide",
    category: "Performance Optimization",
    image: "/projects/all-about-ai.webp",
    description: "A case study and guide on improving Core Web Vitals for All About AI.com using advanced speed optimization techniques.",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "This blog post shares a real-world case study on how I improved the performance score of All About AI.com from a failing grade to a fast, responsive, and SEO-friendly site."
      },
      {
        type: "image",
        src: "/projects/lighthouse-before.png",
        alt: "Lighthouse score before optimization"
      },
      {
        type: "paragraph",
        text: "The website initially had issues with poor LCP (Largest Contentful Paint), unused JavaScript, and unoptimized images."
      },

      {
        type: "heading",
        text: "Before & After Performance"
      },
      {
        type: "image",
        src: "/projects/lighthouse-after.png",
        alt: "Lighthouse score after optimization"
      },
      {
        type: "paragraph",
        text: "Here’s a look at the results after optimization:"
      },

      {
        type: "heading",
        text: "Optimization Strategy"
      },
      {
        type: "paragraph",
        text: "✅ Used lazy loading for all images to reduce initial load time."
      },
      {
        type: "paragraph",
        text: "✅ Removed unused CSS and JavaScript using PurgeCSS."
      },
      {
        type: "paragraph",
        text: "✅ Compressed images using next-gen formats like WebP."
      },
      {
        type: "paragraph",
        text: "✅ Implemented server-side caching and CDN distribution for faster global access."
      },
      {
        type: "paragraph",
        text: "✅ Reduced third-party scripts and deferred non-critical JS."
      },

      {
        type: "heading",
        text: "Results"
      },
      {
        type: "paragraph",
        text: "The result was a 90+ score on desktop and a significant improvement on mobile performance."
      },
      {
        type: "image",
        src: "/projects/performance-graph.png",
        alt: "Performance improvement graph"
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "These changes not only improved user experience but also helped in SEO rankings and increased conversion rates."
      },
      {
        type: "paragraph",
        text: "Feel free to follow this guide to optimize your own blog or business site. Performance is a key ranking factor today."
      }
    ]
  },
  {
    slug: "google-ads-lead-funnel",
    title: "Google Ads Lead Funnel",
    category: "PPC",
    image: "/projects/google-ads-leads.jpg",
    description:
      "Built a high-converting Google Ads funnel with optimized landing pages, generating 200+ qualified leads per month.",
    content: [
      { type: "paragraph", text: "This blog explains the lead funnel approach..." },
      { type: "image", src: "/blog/ads-detail.jpg", alt: "Google Ads strategy" },
    ],
  },
  // Add more entries here
]
