import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import applicationDetails from "../content/applicationDetails.json";

const BRAND = "Orama Solutions";
const DEFAULT_IMAGE = "/logo-sq.png";
const DEFAULT_KEYWORDS =
  "industrial automation, computer vision, ai visual inspection, industry 4.0, digitization, smart manufacturing, shop floor digitization, machine vision, quality inspection ai";

const ROUTE_SEO = [
  {
    pattern: "/",
    pageName: "Home",
    title: `Industrial Automation & Computer Vision Solutions | ${BRAND}`,
    description:
      "Accelerate Industry 4.0 transformation with AI-powered automation, computer vision inspection, and shop floor digitization solutions for manufacturing.",
    keywords:
      "industrial automation solutions, computer vision manufacturing, industry 4.0 solutions, manufacturing digitization, ai inspection",
  },
  {
    pattern: "/company",
    pageName: "Company",
    title: `About ${BRAND} | Industry 4.0 Automation Partner`,
    description:
      "Learn how Orama Solutions delivers end-to-end automation, computer vision, and digitization systems that improve quality, speed, and operational control.",
    keywords:
      "about orama solutions, manufacturing automation company, computer vision experts, industry 4.0 partner",
  },
  {
    pattern: "/products",
    pageName: "Products",
    title: `Automation & Computer Vision Products | ${BRAND}`,
    description:
      "Explore AI products for visual inspection, OCR, counting, predictive analytics, and factory automation built for scalable Industry 4.0 deployments.",
    keywords:
      "computer vision products, ai inspection software, ocr barcode reading, predictive maintenance ai, manufacturing quality control",
  },
  {
    pattern: "/industries",
    pageName: "Industries",
    title: `Industry 4.0 Solutions by Industry | ${BRAND}`,
    description:
      "See automation and computer vision use cases across automotive, pharma, electronics, food and EV battery manufacturing environments.",
    keywords:
      "industry 4.0 use cases, automotive inspection ai, pharma visual inspection, electronics quality control, ev battery inspection",
  },
  {
    pattern: "/applications",
    pageName: "Applications",
    title: `Computer Vision Applications for Manufacturing | ${BRAND}`,
    description:
      "Discover real-world applications including defect detection, assembly verification, OCR, counting, and process digitization for smart factories.",
    keywords:
      "computer vision applications, defect detection ai, assembly verification, label inspection, manufacturing digitization applications",
  },
  {
    pattern: "/applications/:applicationSlug",
    pageName: "Application",
    title: `Industrial AI Application | ${BRAND}`,
    description:
      "Explore dedicated industrial AI application pages for defect detection, OCR, classification, digitization, and sound analysis workflows.",
    keywords:
      "industrial ai application, defect detection, object detection, ocr barcode, classification ai, sound analysis, digitization",
  },
  {
    pattern: "/resources",
    pageName: "Resources",
    title: `Resources: Blogs & Case Studies | ${BRAND}`,
    description:
      "Read blogs and case studies on industrial automation, computer vision, Industry 4.0, and manufacturing digitization outcomes.",
    keywords:
      "automation case studies, computer vision blog, industry 4.0 resources, manufacturing digitization examples",
  },
  {
    pattern: "/no-code-platform",
    pageName: "No-Code Platform",
    title: `No-Code AI Vision Platform | ${BRAND}`,
    description:
      "Deploy computer vision faster with a no-code platform for model training, validation, and production deployment in industrial automation workflows.",
    keywords:
      "no-code computer vision, no-code ai for manufacturing, ai model deployment, factory ai platform",
  },
  {
    pattern: "/blogs",
    pageName: "Blogs",
    title: `Automation & Computer Vision Blog | ${BRAND}`,
    description:
      "Read insights on industrial automation, computer vision, Industry 4.0, and digitization strategies for engineering and manufacturing teams.",
    keywords:
      "computer vision blog, industry 4.0 blog, automation blog, manufacturing ai articles",
  },
  {
    pattern: "/blog/:blogId",
    pageName: "Blog",
    title: `Computer Vision Article | ${BRAND}`,
    description:
      "Technical and practical articles on AI automation, machine vision, and digital transformation in manufacturing.",
    keywords:
      "computer vision article, industrial ai insights, machine vision engineering blog",
  },
];

function upsertMeta({ name, property, content }) {
  if (!content) return;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let script = document.head.querySelector(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function resolveSeo(pathname) {
  const dynamicAppMatch = matchPath({ path: "/applications/:applicationSlug", end: true }, pathname);
  if (dynamicAppMatch) {
    const slug = dynamicAppMatch.params.applicationSlug;
    const detail = applicationDetails[slug];
    if (detail) {
      return {
        pageName: detail.title,
        title: `${detail.title} for Manufacturing | ${BRAND}`,
        description: detail.description,
        keywords: [
          detail.title.toLowerCase(),
          "industrial automation",
          "computer vision",
          "industry 4.0",
          "manufacturing ai"
        ].join(", "),
      };
    }
  }

  return ROUTE_SEO.find((entry) => matchPath({ path: entry.pattern, end: true }, pathname)) ?? ROUTE_SEO[0];
}

function breadcrumbsFor(pathname, origin) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const nameMap = {
    company: "Company",
    products: "Products",
    industries: "Industries",
    applications: "Applications",
    "no-code-platform": "No-Code Platform",
    blogs: "Blogs",
    blog: "Blog",
  };

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${origin}/`,
    },
  ];

  let pathAccumulator = "";
  segments.forEach((segment, idx) => {
    pathAccumulator += `/${segment}`;
    const friendlyName =
      nameMap[segment] ??
      decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    items.push({
      "@type": "ListItem",
      position: idx + 2,
      name: friendlyName,
      item: `${origin}${pathAccumulator}`,
    });
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const canonical = `${origin}${pathname}`;
    const seo = resolveSeo(pathname);

    document.title = seo.title;

    upsertMeta({ name: "description", content: seo.description });
    upsertMeta({ name: "keywords", content: seo.keywords || DEFAULT_KEYWORDS });
    upsertMeta({ name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" });

    upsertMeta({ property: "og:type", content: "website" });
    upsertMeta({ property: "og:site_name", content: BRAND });
    upsertMeta({ property: "og:title", content: seo.title });
    upsertMeta({ property: "og:description", content: seo.description });
    upsertMeta({ property: "og:url", content: canonical });
    upsertMeta({ property: "og:image", content: `${origin}${DEFAULT_IMAGE}` });

    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: seo.title });
    upsertMeta({ name: "twitter:description", content: seo.description });
    upsertMeta({ name: "twitter:image", content: `${origin}${DEFAULT_IMAGE}` });

    upsertLink("canonical", canonical);

    const graph = [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: BRAND,
        url: origin,
        logo: `${origin}${DEFAULT_IMAGE}`,
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: BRAND,
        url: origin,
        potentialAction: {
          "@type": "SearchAction",
          target: `${origin}/blogs?search={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: seo.pageName,
        description: seo.description,
        isPartOf: { "@id": `${origin}/#website` },
      },
    ];

    if (pathname === "/") {
      graph.push(
        {
          "@type": "Service",
          name: "Industrial Automation Solutions",
          provider: { "@id": `${origin}/#organization` },
          serviceType: "Industrial Automation",
          areaServed: "Global",
          description:
            "Automation systems for manufacturing operations, quality control, and productivity optimization.",
        },
        {
          "@type": "Service",
          name: "Computer Vision Inspection",
          provider: { "@id": `${origin}/#organization` },
          serviceType: "Computer Vision",
          areaServed: "Global",
          description:
            "AI-based defect detection, assembly verification, OCR, and visual quality assurance for production lines.",
        },
        {
          "@type": "Service",
          name: "Industry 4.0 Digitization",
          provider: { "@id": `${origin}/#organization` },
          serviceType: "Digital Transformation",
          areaServed: "Global",
          description:
            "Shop floor digitization and real-time analytics to modernize manufacturing processes.",
        }
      );
    }

    const breadcrumbSchema = breadcrumbsFor(pathname, origin);
    if (breadcrumbSchema) {
      graph.push(breadcrumbSchema);
    }

    upsertJsonLd("orama-seo-ld", {
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [pathname]);

  return null;
};

export default SeoManager;
