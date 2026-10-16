// ============================================================
// LOGOOGLE WEBSITE - SIMPLE VANILLA JAVASCRIPT
// No React, no framework, no build tool.
// EDIT GUIDE:
// 1. Change business contact/payment details inside SITE.
// 2. Edit project card and detail modal content in index.html.
// 3. Change selected order defaults inside state.
// 4. Portfolio filters, modals, menu and forms are wired below.
// ============================================================

const SITE = {
  "name": "Logoogle",
  "owner": "MD. AL AMIN",
  "whatsapp": "8801615639722",
  "phoneDisplay": "+880 1615 639722",
  "phoneLink": "+8801615639722",
  "emailPrimary": "itsmralamin@gmail.com",
  "emailSecondary": "logoogle_@hotmail.com",
  "addressLine": "137/1 Pasha Colony, Nager Para, Melandah-2010, Jamalpur",
  "addressMapUrl": "https://maps.google.com/?q=137%2F1+Pasha+Colony,+Nager+Para,+Melandah-2010,+Jamalpur",
  "hours": "Sat–Thu, 10:00 – 19:00 (GMT+6)",
  "paymentNumber": "01309081496",
  "paymentMethods": {
    "bKash": "01309081496",
    "Nagad": "01309081496",
    "Rocket": "01309081496"
  },
  "bank": {
    "bankName": "Dutch-Bangla Bank PLC",
    "accountNumber": "2061030205255",
    "accountName": "MD. AL AMIN",
    "routingNumber": "090390854",
    "branch": "Jamalpur Sadar, Jamalpur"
  },
  "paymentGatewayUrl": ""
};

const PROJECTS = [
  {
    "src": "dunn",
    "title": "Dunn Ranch",
    "type": "Combination Mark",
    "tag": "Identity · Packaging",
    "year": "2024",
    "client": "Dunn Ranch Foods",
    "color": "bg-sun-block",
    "brief": "A heritage ranch needed a mark that felt handmade but scaled cleanly across meat packaging, signage and merch.",
    "deliverables": [
      "Primary + secondary mark",
      "Packaging system",
      "Colour & type system",
      "Brand guidelines"
    ]
  },
  {
    "src": "flydeal",
    "title": "Flydeal",
    "type": "Letter Mark",
    "tag": "Logo · Brand System",
    "year": "2024",
    "client": "Flydeal Travel",
    "color": "bg-sky-block",
    "brief": "A travel deals platform wanted a fast, friendly monogram that reads at favicon size and in airport signage.",
    "deliverables": [
      "Monogram lockups",
      "App icon set",
      "UI colour tokens",
      "Motion logo"
    ]
  },
  {
    "src": "northwind",
    "title": "Shamforeng",
    "type": "Wordmark",
    "tag": "Wordmark · Stationery",
    "year": "2023",
    "client": "Shamforeng Studio",
    "color": "bg-mint-block",
    "brief": "Custom lettering paired with a soft container shape, built for embossed print and understated luxury stationery.",
    "deliverables": [
      "Custom lettering",
      "Stationery suite",
      "Print specs",
      "Logo files"
    ]
  },
  {
    "src": "cobalt",
    "title": "Cobalt Coffee",
    "type": "Emblem",
    "tag": "Monogram · Packaging",
    "year": "2025",
    "client": "Cobalt Roasters",
    "color": "bg-coral",
    "brief": "A circular emblem monogram that survives on kraft bags, cups and shelf displays in busy speciality stores.",
    "deliverables": [
      "Emblem monogram",
      "Bag & cup artwork",
      "Label templates",
      "Photography direction"
    ]
  },
  {
    "src": "verra",
    "title": "Verra",
    "type": "Abstract Mark",
    "tag": "Tech Identity · Cards",
    "year": "2025",
    "client": "Verra Cloud",
    "color": "bg-violet-block",
    "brief": "An abstract loop mark expressing continuous deployment, tuned for dark UI and printed collateral alike.",
    "deliverables": [
      "Abstract symbol",
      "Dark/light lockups",
      "Business card system",
      "Slide template"
    ]
  },
  {
    "src": "studio9",
    "title": "Studio 9",
    "type": "Typography Logo",
    "tag": "Signage · Retail Brand",
    "year": "2023",
    "client": "Studio 9 Boutique",
    "color": "bg-sun-block",
    "brief": "Tall condensed type for a boutique storefront, engineered for 3D fabricated signage and window vinyl.",
    "deliverables": [
      "Display wordmark",
      "Signage artwork",
      "Tag & label design",
      "Retail brand sheet"
    ]
  },
  {
    "src": "bloom",
    "title": "Bloom Skin",
    "type": "Minimalist Logo",
    "tag": "Beauty · Packaging",
    "year": "2025",
    "client": "Bloom Skincare",
    "color": "bg-pink-block",
    "brief": "A single-stroke botanical mark on a pastel palette that keeps the shelf calm while staying instantly recognisable.",
    "deliverables": [
      "Minimal symbol",
      "Pastel palette",
      "Bottle labels",
      "Social kit"
    ]
  },
  {
    "src": "pulse",
    "title": "Pulse Sports",
    "type": "Letter Mark",
    "tag": "App Brand · Icon",
    "year": "2026",
    "client": "Pulse Athletics",
    "color": "bg-sky-block",
    "brief": "A bold italic S monogram built for speed, with an icon system that holds up across app stores and jerseys.",
    "deliverables": [
      "S monogram",
      "App icon",
      "Kit graphics",
      "Brand motion"
    ]
  },
  {
    "src": "saffron",
    "title": "Saffron Table",
    "type": "Script Wordmark",
    "tag": "Restaurant · Menu",
    "year": "2024",
    "client": "Saffron Table",
    "color": "bg-coral",
    "brief": "A warm script wordmark and menu system that carries the hospitality of the room onto every printed piece.",
    "deliverables": [
      "Script wordmark",
      "Menu design",
      "Napkin & signage",
      "Type pairing"
    ]
  },
  {
    "src": "kiddo",
    "title": "Kiddo Learn",
    "type": "Mascot Logo",
    "tag": "Education · Mascot",
    "year": "2026",
    "client": "Kiddo Learning",
    "color": "bg-mint-block",
    "brief": "A friendly mascot character with a full expression set, designed to teach and delight kids aged 3 to 8.",
    "deliverables": [
      "Mascot character",
      "Expression set",
      "Sticker pack",
      "Merch artwork"
    ]
  },
  {
    "src": "atlas",
    "title": "Atlas Ventures",
    "type": "Abstract Mark",
    "tag": "Finance · Stationery",
    "year": "2025",
    "client": "Atlas Ventures Capital",
    "color": "bg-violet-block",
    "brief": "A geometric abstract mark for a venture fund, engineered to emboss cleanly on matte black stationery.",
    "deliverables": [
      "Abstract symbol",
      "Embossed stationery",
      "Deck template",
      "Usage rules"
    ]
  },
  {
    "src": "ember",
    "title": "Ember Goods",
    "type": "Wordmark",
    "tag": "Retail · Packaging",
    "year": "2025",
    "client": "Ember Goods Co.",
    "color": "bg-coral",
    "brief": "A confident retail wordmark built for tote bags, pouches and shelf presence in high-traffic stores.",
    "deliverables": [
      "Wordmark lockups",
      "Packaging artwork",
      "Merch kit",
      "Colour system"
    ]
  },
  {
    "src": "lumen",
    "title": "Lumen Skin",
    "type": "Typography Logo",
    "tag": "Beauty · Labels",
    "year": "2025",
    "client": "Lumen Skincare",
    "color": "bg-pink-block",
    "brief": "Delicate custom lettering paired with a restrained label system for a quiet-luxury skincare line.",
    "deliverables": [
      "Custom lettering",
      "Label system",
      "Print specs",
      "Social templates"
    ]
  },
  {
    "src": "terra",
    "title": "Terra FC",
    "type": "Emblem Logo",
    "tag": "Sport · Apparel",
    "year": "2024",
    "client": "Terra Football Club",
    "color": "bg-mint-block",
    "brief": "A crest-style emblem that survives embroidery, screen print and stadium signage without losing detail.",
    "deliverables": [
      "Crest emblem",
      "Kit artwork",
      "Signage set",
      "Mono versions"
    ]
  },
  {
    "src": "quanta",
    "title": "Quanta Pay",
    "type": "Letter Mark",
    "tag": "Fintech · App Icon",
    "year": "2026",
    "client": "Quanta Payments",
    "color": "bg-sky-block",
    "brief": "A tight monogram tuned for app-icon legibility, gradient cards and dense product interfaces.",
    "deliverables": [
      "Monogram",
      "App icon set",
      "Card artwork",
      "UI tokens"
    ]
  },
  {
    "src": "mellow",
    "title": "Mellow Bakes",
    "type": "Mascot Logo",
    "tag": "Food · Packaging",
    "year": "2026",
    "client": "Mellow Bakes",
    "color": "bg-sun-block",
    "brief": "A playful mascot and pastel packaging family that makes a small neighbourhood bakery feel like a brand.",
    "deliverables": [
      "Mascot character",
      "Box packaging",
      "Sticker set",
      "Shopfront artwork"
    ]
  },
  {
    "src": "nimbus",
    "title": "Nexora",
    "type": "Letter Mark",
    "tag": "Fintech · Logo System",
    "year": "2026",
    "client": "Nexora Financial Technology",
    "color": "bg-violet-block",
    "brief": "A precise geometric N monogram built on a strict grid so it holds up from app icon to building signage.",
    "deliverables": [
      "Monogram + wordmark",
      "App icon set",
      "Signage artwork",
      "Logo guidelines"
    ]
  },
  {
    "src": "roast",
    "title": "Oak & Ember",
    "type": "Wordmark",
    "tag": "Coffee · Packaging",
    "year": "2026",
    "client": "Oak & Ember Coffee Roasters",
    "color": "bg-sun-block",
    "brief": "A custom serif wordmark with an O&E ligature, drawn for kraft packaging and small-batch label runs.",
    "deliverables": [
      "Custom serif wordmark",
      "O&E ligature mark",
      "Bag packaging",
      "Label system"
    ]
  },
  {
    "src": "fox",
    "title": "Friendly Fox",
    "type": "Mascot Logo",
    "tag": "Mascot · Merch",
    "year": "2026",
    "client": "Friendly Fox Kids Club",
    "color": "bg-sky-block",
    "brief": "A warm, simple-shape fox mascot designed to stay charming at favicon size and bold on merchandise.",
    "deliverables": [
      "Mascot logo",
      "One-colour + badge variants",
      "Merch artwork",
      "Brand palette"
    ]
  },
  {
    "src": "veda",
    "title": "Greenhaven",
    "type": "Emblem Logo",
    "tag": "Wellness · Stationery",
    "year": "2026",
    "client": "Greenhaven Naturals",
    "color": "bg-mint-block",
    "brief": "An abstract leaf emblem locked inside a circle, built for letterpress stationery and clean digital use.",
    "deliverables": [
      "Leaf emblem",
      "Letterpress business cards",
      "Colour system",
      "Usage rules"
    ]
  },
  {
    "src": "nova",
    "title": "NovaGrid",
    "type": "Abstract Mark",
    "tag": "SaaS · Logo System",
    "year": "2026",
    "client": "NovaGrid Labs",
    "color": "bg-violet-block",
    "brief": "A bold abstract mark designed for a modern SaaS platform and compact product UI.",
    "deliverables": [
      "Abstract symbol",
      "Responsive lockups",
      "App icon",
      "Brand guide"
    ]
  },
  {
    "src": "aura",
    "title": "Aura House",
    "type": "Wordmark",
    "tag": "Lifestyle · Typography",
    "year": "2026",
    "client": "Aura House",
    "color": "bg-pink-block",
    "brief": "A refined wordmark direction for a lifestyle brand that needed a premium, editorial feel.",
    "deliverables": [
      "Custom wordmark",
      "Secondary mark",
      "Typography system",
      "Social assets"
    ]
  },
  {
    "src": "vertex",
    "title": "Vertex Labs",
    "type": "Letter Mark",
    "tag": "Technology · Monogram",
    "year": "2026",
    "client": "Vertex Labs",
    "color": "bg-sky-block",
    "brief": "A compact monogram system engineered to remain distinctive from favicon to large-scale signage.",
    "deliverables": [
      "Letter mark",
      "Icon family",
      "Light/dark versions",
      "Usage rules"
    ]
  },
  {
    "src": "harvest",
    "title": "Harvest & Co.",
    "type": "Combination Mark",
    "tag": "Food · Packaging",
    "year": "2026",
    "client": "Harvest & Co.",
    "color": "bg-sun-block",
    "brief": "A friendly combination mark that brings a crafted personality to packaging and retail touchpoints.",
    "deliverables": [
      "Symbol + wordmark",
      "Packaging lockups",
      "Colour palette",
      "Print files"
    ]
  },
  {
    "src": "summit",
    "title": "Summit Club",
    "type": "Emblem Logo",
    "tag": "Sport · Community",
    "year": "2026",
    "client": "Summit Club",
    "color": "bg-mint-block",
    "brief": "A confident emblem developed for apparel, badges and an active outdoor community.",
    "deliverables": [
      "Emblem mark",
      "Badge variants",
      "Apparel artwork",
      "Mono version"
    ]
  },
  {
    "src": "orbit",
    "title": "Orbit Pay",
    "type": "Minimalist Logo",
    "tag": "Fintech · Digital",
    "year": "2026",
    "client": "Orbit Pay",
    "color": "bg-coral",
    "brief": "A clean, minimal symbol for a digital finance product requiring instant recognition on screen.",
    "deliverables": [
      "Minimal symbol",
      "Wordmark",
      "App icon",
      "Digital toolkit"
    ]
  },
  {
    "src": "kindred",
    "title": "Kindred Studio",
    "type": "Typography Logo",
    "tag": "Creative · Editorial",
    "year": "2026",
    "client": "Kindred Studio",
    "color": "bg-pink-block",
    "brief": "Expressive custom typography with a flexible layout system for a contemporary creative studio.",
    "deliverables": [
      "Custom lettering",
      "Type system",
      "Social lockups",
      "Guidelines"
    ]
  },
  {
    "src": "zenith",
    "title": "Zenith One",
    "type": "Combination Mark",
    "tag": "Consulting · Identity",
    "year": "2026",
    "client": "Zenith One",
    "color": "bg-violet-block",
    "brief": "A strategic symbol and wordmark system built to communicate clarity, direction and growth.",
    "deliverables": [
      "Primary logo",
      "Secondary mark",
      "Stationery",
      "Brand sheet"
    ]
  },
  {
    "src": "travel-agency",
    "title": "Travel Agency",
    "type": "Letter Mark",
    "tag": "Travel · Hospitality",
    "year": "2026",
    "client": "Travel Agency Co.",
    "color": "bg-sky-block",
    "brief": "A bright T monogram for a modern travel agency, designed to feel direct, optimistic and ready for every destination.",
    "deliverables": [
      "T monogram lockup",
      "Travel app icon",
      "Campaign templates",
      "Brand colour system"
    ]
  }
];

const COMPANY_TYPES = {
  "Dunn Ranch": "Food Brand",
  "Flydeal": "Travel Agency",
  "Shamforeng": "Creative Studio",
  "Cobalt Coffee": "Coffee Roaster",
  "Verra": "Cloud Technology",
  "Studio 9": "Boutique Retail",
  "Bloom Skin": "Beauty Brand",
  "Pulse Sports": "Sports Brand",
  "Saffron Table": "Restaurant",
  "Kiddo Learn": "Education",
  "Atlas Ventures": "Finance",
  "Ember Goods": "Retail Brand",
  "Lumen Skin": "Beauty Brand",
  "Terra FC": "Sports Club",
  "Quanta Pay": "Fintech",
  "Mellow Bakes": "Bakery",
  "Nexora": "Fintech",
  "Oak & Ember": "Coffee Roaster",
  "Friendly Fox": "Kids Brand",
  "Greenhaven": "Wellness Brand",
  "NovaGrid": "SaaS Technology",
  "Aura House": "Lifestyle Brand",
  "Vertex Labs": "Technology",
  "Harvest & Co.": "Food Brand",
  "Summit Club": "Sports Club",
  "Orbit Pay": "Fintech",
  "Kindred Studio": "Creative Studio",
  "Zenith One": "Consulting",
  "Travel Agency": "Travel Agency"
};

const PACKAGES = [
  {
    "name": "Starter Logo",
    "price": "$79",
    "time": "3 days delivery",
    "featured": false,
    "items": [
      "1 logo type of your choice",
      "2 concepts",
      "2 revisions",
      "PNG + JPG files",
      "Social profile kit"
    ]
  },
  {
    "name": "Brand Logo",
    "price": "$199",
    "time": "5 days delivery",
    "featured": true,
    "items": [
      "Any logo type (letter mark, mascot…)",
      "4 concepts",
      "Unlimited revisions",
      "Source files (AI, SVG, PDF, EPS)",
      "Colour + mono + reversed versions",
      "Basic brand sheet"
    ]
  },
  {
    "name": "Full Identity",
    "price": "$499",
    "time": "10 days delivery",
    "featured": false,
    "items": [
      "Complete identity system",
      "Brand guidelines PDF",
      "Stationery + social kit",
      "Typography & colour system",
      "Packaging or signage artwork",
      "Lifetime file support"
    ]
  }
];

const state = {
  showAllProjects: false,
  portfolioType: "all",
  logoType: "Letter Mark",
  packageName: "Brand Logo",
  references: [{ url: "", note: "" }],
  styles: [],
  formats: ["PNG", "SVG"],
  addons: [],
  inspirationFiles: [],
  inspirationFileObjects: [],
  clientBrief: "",
  placedOrder: null
};

const REVIEW_STORAGE_KEY = "logoogleClientReviews";
const DEFAULT_CLIENT_REVIEWS = [
  {
    name: "Ayesha Rahman",
    company: "Dunn Ranch",
    rating: 5,
    message: "The brand identity felt premium, clear, and highly strategic from day one. We saw results immediately."
  }
];

// ------------------------------------------------------------
// Small helper functions
// ------------------------------------------------------------

function $(selector, parent = document) {
  return parent.querySelector(selector);
}

function $$(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    const characters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return characters[char];
  });
}

function esc(value) {
  return escapeHtml(value);
}

async function getReceiptLogoDataUri() {
  const logo = new Image();
  const loaded = new Promise(function (resolve, reject) {
    logo.addEventListener("load", resolve, { once: true });
    logo.addEventListener("error", function () {
      reject(new Error("Could not load the Logoogle receipt logo."));
    }, { once: true });
  });
  logo.src = new URL("Logoogle-With-Tag-Line.png", window.location.href).href;

  if (!logo.complete) {
    await loaded;
  }
  if (!logo.naturalWidth) {
    throw new Error("Could not load the Logoogle receipt logo.");
  }

  const canvas = document.createElement("canvas");
  const crop = { x: 1160, y: 1010, width: 1990, height: 590 };
  canvas.width = crop.width;
  canvas.height = crop.height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not prepare the receipt logo.");
  context.drawImage(
    logo,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );
  return canvas.toDataURL("image/png");
}

async function downloadReceipt(order) {
  const logoDataUri = await getReceiptLogoDataUri();
  const receipt = professionalReceiptHtml(order, logoDataUri);
  const blob = new Blob([receipt], { type: "text/html;charset=utf-8" });
  const link = document.createElement("a");
  const downloadUrl = URL.createObjectURL(blob);

  link.href = downloadUrl;
  link.download = "logoogle-money-receipt-" + order.orderId + ".html";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(function () {
    URL.revokeObjectURL(downloadUrl);
  }, 1000);
}

function professionalReceiptHtml(order, logoDataUri) {
  const issued = new Date();
  const formats = Array.isArray(order.formats) && order.formats.length
    ? order.formats.join(", ")
    : "PNG, SVG";
  const addons = Array.isArray(order.addons) ? order.addons : [];
  const row = function (label, value) {
    return `<tr><th scope="row">${esc(label)}</th><td>${esc(value || "Not provided")}</td></tr>`;
  };
  const paymentMethod = String(order.payment || "");
  const mobileWallets = ["bKash", "Nagad", "Rocket"];
  let paymentInstructions;
  let paymentDetails;

  if (mobileWallets.includes(paymentMethod)) {
    paymentInstructions = `Your ${paymentMethod} payment details have been submitted. The studio will verify the transaction before work begins.`;
    paymentDetails = `<div class="payment-detail"><span>${esc(paymentMethod)} number</span><strong>${esc(SITE.paymentMethods[paymentMethod] || SITE.paymentNumber)}</strong></div>`;
  } else if (paymentMethod === "Bank transfer") {
    paymentInstructions = "Your bank transfer details have been submitted. The studio will verify the transaction before work begins.";
    paymentDetails = `
      <div class="payment-detail"><span>Bank</span><strong>${esc(SITE.bank.bankName)}</strong></div>
      <div class="payment-detail"><span>Account name</span><strong>${esc(SITE.bank.accountName)}</strong></div>
      <div class="payment-detail"><span>Account number</span><strong>${esc(SITE.bank.accountNumber)}</strong></div>
      <div class="payment-detail"><span>Routing number</span><strong>${esc(SITE.bank.routingNumber)}</strong></div>`;
  } else {
    paymentInstructions = `Payment by ${paymentMethod || "your selected method"} needs to be confirmed with the studio. Work begins after payment is received and verified.`;
    paymentDetails = `<div class="payment-detail"><span>Selected method</span><strong>${esc(paymentMethod || "To be confirmed")}</strong></div>`;
  }

  const projectName = order.brand || order.company || order.name || "Logo project";
  const paymentStatus = String(order.paymentStatus || "Awaiting verification");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Money receipt ${esc(order.orderId)} | ${esc(SITE.name)}</title>
  <style>
    @page { size:A4 portrait; margin:10mm; }
    :root { color-scheme:light; --brand:#3333cc; --brand-dark:#25258f; --ink:#171a2b; --muted:#667085; --line:#e5e7f0; --wash:#f4f5fa; --pale:#f3f3ff; }
    * { box-sizing:border-box; }
    body { margin:0; padding:24px; background:var(--wash); color:var(--ink); font:12px/1.5 "Plus Jakarta Sans",Inter,Arial,sans-serif; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    .sheet { width:min(210mm,100%); min-height:277mm; margin:0 auto; overflow:hidden; border:1px solid var(--line); border-radius:12px; background:#fff; box-shadow:0 16px 48px rgba(27,35,82,.09); }
    .masthead { padding:25px 30px 22px; border-top:5px solid var(--brand); background:#fff; }
    .topline { display:flex; align-items:center; justify-content:space-between; gap:18px; padding-bottom:17px; border-bottom:1px solid var(--line); }
    .brand-logo { display:block; width:min(250px,58vw); max-height:64px; object-fit:contain; object-position:left center; }
    .document-label { margin:7px 0 0; color:var(--muted); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
    .receipt-meta { display:grid; gap:7px; text-align:right; }
    .receipt-meta div { display:flex; justify-content:flex-end; align-items:baseline; gap:9px; }
    .receipt-meta span,.summary-item span,.payment-detail span { color:var(--muted); font-size:8px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
    .receipt-meta strong { color:var(--ink); font-size:9px; }
    .status { display:inline-flex; align-items:center; justify-self:end; gap:7px; padding:6px 10px; border:1px solid #d9d9ff; border-radius:999px; background:var(--pale); color:var(--brand-dark); font-size:8px; font-weight:800; }
    .status::before { width:6px; height:6px; border-radius:50%; background:var(--brand); content:""; }
    .receipt-title { padding:21px 0 15px; }
    h1 { margin:0; color:var(--ink); font-size:26px; letter-spacing:-.035em; line-height:1.15; }
    .intro { margin:5px 0 0; color:var(--muted); font-size:10px; }
    .amount-card { display:flex; align-items:center; justify-content:space-between; gap:18px; padding:15px 18px; border:1px solid #dedefb; border-left:4px solid var(--brand); border-radius:7px; background:var(--pale); }
    .amount-card span { display:block; color:var(--brand-dark); font-size:8px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
    .amount-card strong { display:block; margin-top:3px; overflow-wrap:anywhere; color:var(--brand-dark); font-size:23px; line-height:1.2; }
    .amount-reference { max-width:45%; text-align:right; }
    .amount-reference strong { font-size:12px; }
    .summary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:0; margin-top:14px; border:1px solid var(--line); border-radius:7px; }
    .summary-item { min-width:0; padding:9px 12px; }
    .summary-item + .summary-item { border-left:1px solid var(--line); }
    .summary-item strong { display:block; margin-top:4px; overflow-wrap:anywhere; color:var(--ink); font-size:9px; }
    main { padding:0 30px; }
    section { min-width:0; padding:14px 0; border-bottom:1px solid var(--line); }
    h2 { margin:0 0 8px; color:var(--brand-dark); font-size:8px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
    .columns { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
    .columns > div { min-width:0; padding:11px 13px; border:1px solid var(--line); border-radius:7px; background:#fff; }
    table { width:100%; border-collapse:collapse; }
    th,td { padding:4px 0; border-bottom:1px solid #eef0f5; text-align:left; vertical-align:top; overflow-wrap:anywhere; }
    tr:last-child th,tr:last-child td { border-bottom:0; }
    th { width:38%; color:var(--muted); font-size:8.5px; font-weight:600; }
    td { color:var(--ink); font-size:9px; font-weight:600; }
    .payment-copy { margin:0 0 9px; color:var(--muted); font-size:9.5px; }
    .payment-details { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:7px; }
    .payment-detail { min-width:0; padding:8px 10px; border:1px solid var(--line); border-radius:6px; background:#fafaff; }
    .payment-detail span { color:var(--brand-dark); }
    .payment-detail strong { display:block; margin-top:4px; overflow-wrap:anywhere; color:var(--ink); font-size:9px; }
    .notice { margin:9px 0 0; padding:9px 11px; border-left:3px solid var(--brand); border-radius:3px; background:#f7f7fc; color:#50556a; font-size:8.5px; }
    .notice strong { color:var(--brand-dark); }
    .service-terms { border-bottom:0; }
    .terms-copy { display:grid; gap:7px; }
    .terms-copy p { margin:0; color:#50556a; font-size:8.5px; line-height:1.55; }
    .receipt-footer { padding:12px 30px 14px; border-top:2px solid var(--brand); background:#fafaff; }
    .footer-heading { margin:0 0 8px; color:var(--brand-dark); font-size:8px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
    .footer-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:9px 16px; }
    .footer-item { min-width:0; }
    .footer-item span { display:block; margin-bottom:2px; color:var(--muted); font-size:7px; font-weight:800; letter-spacing:.09em; text-transform:uppercase; }
    .footer-item strong,.footer-item a { display:block; overflow-wrap:anywhere; color:var(--ink); font-size:8px; font-weight:600; line-height:1.45; }
    .footer-item a:hover { color:var(--brand); text-decoration:underline; }
    .footer-address { grid-column:1/-1; padding-top:7px; border-top:1px solid var(--line); }
    .footer-bottom { display:flex; justify-content:space-between; gap:12px; margin-top:8px; padding-top:7px; border-top:1px solid var(--line); color:var(--muted); font-size:7px; }
    .actions { display:flex; justify-content:center; gap:10px; margin:14px auto 0; }
    .print-button { padding:10px 17px; border:0; border-radius:8px; background:var(--brand); color:#fff; font:inherit; font-weight:700; cursor:pointer; }
    .print-button:hover { background:var(--brand-dark); }
    @media(max-width:640px) { body { padding:12px; } .sheet { min-height:0; border-radius:10px; } .masthead { padding:18px 16px; } main { padding:0 16px; } .receipt-footer { padding:12px 16px 14px; } .footer-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px 12px; } .footer-bottom { flex-direction:column; gap:3px; } .topline { align-items:flex-start; flex-direction:column; } .receipt-meta { width:100%; text-align:left; } .receipt-meta div { justify-content:flex-start; } .status { justify-self:start; } .amount-card { align-items:flex-start; flex-direction:column; gap:9px; } .amount-reference { max-width:100%; text-align:left; } .summary-grid { grid-template-columns:1fr; } .summary-item + .summary-item { border-top:1px solid var(--line); border-left:0; } .columns { grid-template-columns:1fr; gap:8px; } }
    @media print { html,body { width:190mm; min-height:0; } body { padding:0; background:#fff; } .sheet { width:190mm; min-height:0; overflow:visible; border:0; border-radius:0; box-shadow:none; } .masthead,main,.receipt-footer { padding-left:0; padding-right:0; } .masthead { padding-top:12px; padding-bottom:12px; } .topline { padding-bottom:10px; } .brand-logo { max-height:48px; } .receipt-title { padding:13px 0 10px; } h1 { font-size:23px; } .amount-card { padding:10px 14px; } .summary-grid { margin-top:8px; } .summary-item { padding:6px 9px; } section { padding:8px 0; } .columns > div { padding:8px 10px; } .terms-copy { gap:5px; } .terms-copy p { font-size:8px; } .receipt-footer { padding-top:8px; padding-bottom:8px; } .footer-grid { gap:6px 12px; } .footer-address { padding-top:5px; } .footer-bottom { margin-top:5px; padding-top:5px; } .actions { display:none; } .masthead,.amount-card,.payment-detail,.notice { print-color-adjust:exact; } section,.payment-detail,.payment-details,.receipt-footer,.amount-card { break-inside:avoid; page-break-inside:avoid; } h2 { break-after:avoid; page-break-after:avoid; } } }
  </style>
</head>
<body>
  <article class="sheet">
    <header class="masthead">
      <div class="topline">
        <div>
          <img class="brand-logo" src="${esc(logoDataUri)}" alt="${esc(SITE.name)} logo">
          <p class="document-label">Logoogle Studio · Official payment record</p>
        </div>
        <div class="receipt-meta">
          <div><span>Receipt no.</span><strong>${esc(order.orderId)}</strong></div>
          <div><span>Issued</span><strong>${issued.toLocaleDateString()}</strong></div>
          <span class="status">${esc(paymentStatus)}</span>
        </div>
      </div>
      <div class="receipt-title">
        <div>
          <h1>Money receipt</h1>
          <p class="intro">Thank you. This document records the payment details submitted for your project.</p>
        </div>
      </div>
      <div class="amount-card">
        <div><span>Payment amount submitted</span><strong>${esc(order.price)}</strong></div>
        <div class="amount-reference"><span>Order reference</span><strong>${esc(order.orderId)}</strong></div>
      </div>
      <div class="summary-grid">
        <div class="summary-item"><span>Payment method</span><strong>${esc(paymentMethod || "To be confirmed")}</strong></div>
        <div class="summary-item"><span>Transaction ID</span><strong>${esc(order.transactionId || "Not provided")}</strong></div>
        <div class="summary-item"><span>Payment status</span><strong>${esc(paymentStatus)}</strong></div>
      </div>
    </header>
    <main>
      <section class="columns">
        <div><h2>Billed to</h2><table><tbody>${[
          ["Name", order.name], ["Company", order.company], ["Email", order.email], ["Phone / WhatsApp", order.whatsapp || order.phone]
        ].map(function (item) { return row(...item); }).join("")}</tbody></table></div>
        <div><h2>Project details</h2><table><tbody>${[
          ["Brand", order.brand || projectName], ["Industry", order.industry], ["Logo type", order.logoType], ["Deadline", order.deadline || "To be agreed"]
        ].map(function (item) { return row(...item); }).join("")}</tbody></table></div>
      </section>
      <section>
        <h2>Service and order summary</h2>
        <table><tbody>${[
          ["Package", order.pkg], ["File formats", formats], ["Revisions", String(order.revisions) + " round(s)"], ["Additional items", addons.length ? addons.join(", ") + " (quoted separately)" : "None"]
        ].map(function (item) { return row(...item); }).join("")}</tbody></table>
      </section>
      <section>
        <h2>Payment details</h2>
        <p class="payment-copy">${esc(paymentInstructions)}</p>
        <div class="payment-details">${paymentDetails}<div class="payment-detail"><span>Payment reference</span><strong>${esc(order.orderId)}</strong></div></div>
        <p class="notice"><strong>Verification note:</strong> this receipt acknowledges the payment information submitted; it does not confirm that funds have cleared. Work begins after payment verification. For assistance, contact ${esc(SITE.phoneDisplay)} or ${esc(SITE.emailPrimary)}.</p>
      </section>
      <section class="service-terms">
        <h2>Service terms &amp; next steps</h2>
        <div class="terms-copy">
          <p>Project work begins once the payment has been received and verified. Initial design concepts are typically shared within 2–4 working days after confirmation.</p>
          <p>Your selected package includes ${esc(order.revisions)} revision round(s). Any additional revisions or work outside the listed package scope will be discussed and quoted separately before proceeding.</p>
          <p>Final ${esc(formats)} files are delivered after any remaining balance is settled. Copyright transfers to you upon full payment. ${addons.length ? "Additional selected items are quoted separately unless otherwise agreed in writing." : "Only the services and deliverables listed in this receipt are included."}</p>
        </div>
      </section>
    </main>
    <footer class="receipt-footer">
      <h2 class="footer-heading">Contact &amp; support</h2>
      <div class="footer-grid">
        <div class="footer-item"><span>Business hours</span><strong>${esc(SITE.hours)}</strong></div>
        <div class="footer-item"><span>Email</span><a href="mailto:${esc(SITE.emailPrimary)}">${esc(SITE.emailPrimary)}</a><a href="mailto:${esc(SITE.emailSecondary)}">${esc(SITE.emailSecondary)}</a></div>
        <div class="footer-item"><span>Phone &amp; WhatsApp</span><a href="tel:${esc(SITE.phoneLink)}">${esc(SITE.phoneDisplay)}</a><a href="https://wa.me/${esc(SITE.whatsapp)}">WhatsApp message</a></div>
        <div class="footer-item footer-address"><span>Studio address</span><strong>${esc(SITE.addressLine)}</strong></div>
      </div>
      <div class="footer-bottom"><span>${esc(SITE.name)} · ${esc(SITE.owner)}</span><span>Thank you for choosing Logoogle Studio.</span></div>
    </footer>
  </article>
  <div class="actions"><button class="print-button" type="button" onclick="window.print()">Print / Save as PDF</button></div>
</body>
</html>`;
}

function getColorClass(color) {
  const colors = {
    "bg-sun-block": "bg-sun",
    "bg-violet-block": "bg-violet",
    "bg-pink-block": "bg-pink",
    "bg-mint-block": "bg-mint",
    "bg-sky-block": "bg-sky",
    "bg-coral": "bg-coral"
  };

  return colors[color] || "bg-sky";
}

function makeOrderId() {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const number = Math.floor(1000 + Math.random() * 9000);
  return "LG-" + date + "-" + number;
}

function showToast(message) {
  const root = $("#toast-root");
  const item = document.createElement("div");

  item.className = "toast";
  item.textContent = message;

  root.appendChild(item);

  setTimeout(function () {
    item.remove();
  }, 4200);
}

function whatsappLink(text) {
  return "https://api.whatsapp.com/send?phone=" + SITE.whatsapp
    + "&text=" + encodeURIComponent(text);
}

function emailLink(subject, body) {
  return "mailto:" + SITE.emailPrimary
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);
}

function openOrderEmailDraft(order) {
  window.location.href = emailLink(
    "Logo order " + order.orderId + " — " + (order.brand || order.name),
    orderToText(order)
  );
}

// ------------------------------------------------------------
// Portfolio
// ------------------------------------------------------------

function showPortfolio() {
  const grid = $("#portfolio-grid");
  grid.querySelectorAll(".more-project-match").forEach(function (card) {
    card.remove();
  });

  const normalizeType = function (type) {
    return type.trim().toLowerCase().replace(/\s+/g, " ").replace("lettermark", "letter mark");
  };
  const selectedType = normalizeType(state.portfolioType);
  const cards = $$("#portfolio-grid > .project-card");

  cards.forEach(function (card) {
    const type = card.querySelector(".logo-type-highlight");
    const matchesType = state.portfolioType === "all"
      || (type && normalizeType(type.textContent) === selectedType);

    card.classList.toggle("project-hidden", !matchesType);
  });

  if (state.portfolioType !== "all") {
    const additionalProjects = $("#additional-project-cards");
    if (additionalProjects) {
      additionalProjects.content.querySelectorAll(".project-card").forEach(function (card) {
        const type = card.querySelector(".logo-type-highlight");
        if (!type || normalizeType(type.textContent) !== selectedType) return;

        const match = card.cloneNode(true);
        match.classList.add("more-project-match");
        grid.append(match);
        watchProjectImages(match);
      });
    }
  }

  $$("[data-filter-type]").forEach(function (button) {
    const isActive = button.dataset.filterType === state.portfolioType;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const moreLink = $("#more-projects");
  if (moreLink) {
    moreLink.textContent = "More projects (6) →";
    moreLink.href = "more-projects.html";
  }

  watchReveal();
}

function filterPortfolio(type) {
  state.portfolioType = type;
  showPortfolio();
}

function getProjectDetails(card) {
  const details = card.querySelector("template.project-detail");
  if (!details) return null;

  const title = card.querySelector(".project-title");
  const type = card.querySelector(".logo-type-highlight");
  const category = card.querySelector(".company-type-highlight");
  const year = card.querySelector(".project-year");
  const data = details.content.querySelector("[data-brief]");

  return {
    title: title ? title.textContent.trim() : card.dataset.project,
    type: type ? type.textContent.trim() : "Logo",
    category: category ? category.textContent.trim() : "",
    year: year ? year.textContent.trim() : "",
    tag: details.dataset.tag || "",
    client: details.dataset.client || "",
    color: details.dataset.color || "",
    brief: data ? data.textContent.trim() : "",
    deliverables: Array.from(details.content.querySelectorAll("[data-deliverables] li"), function (item) {
      return item.textContent.trim();
    })
  };
}

function watchProjectImages(root) {
  const images = Array.from(root.querySelectorAll(".project-image, .modal-hero img"));
  if (root.matches && root.matches(".project-image, .modal-hero img")) {
    images.unshift(root);
  }

  images.forEach(function (image) {
    function showFallback() {
      const wrapper = image.closest(".project-image-wrap, .modal-hero");
      if (!wrapper || wrapper.querySelector(".project-image-fallback")) return;

      image.classList.add("project-image-unavailable");
      const projectName = (image.alt || "").split(" brand identity")[0].trim() || "Project logo";
      const fallback = document.createElement("div");
      const name = document.createElement("span");
      const note = document.createElement("span");

      fallback.className = "project-image-fallback";
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", projectName + " logo preview");
      name.className = "project-image-fallback-name";
      name.textContent = projectName;
      note.className = "project-image-fallback-note";
      note.textContent = "Logo preview";
      fallback.append(name, note);
      wrapper.append(fallback);
    }

    image.addEventListener("error", showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

function openProject(project, card) {
  if (!project || !card) return;

  const modalRoot = $("#modal-root");
  const image = card.querySelector(".project-image");

  modalRoot.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal">
        <div class="modal-hero ${getColorClass(project.color)} ${project.title === "Flydeal" ? "logo-stage-blue" : ""}">
          <img
            src="${image ? escapeHtml(image.getAttribute("src")) : ""}"
            alt="${escapeHtml(project.title)} brand identity case study"
          >
          <button class="modal-close" id="modal-close" type="button" aria-label="Close case study">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-tags">
            <span class="tag ${getColorClass(project.color)}">${escapeHtml(project.type)}</span>
            <span class="tag modal-soft-tag">${escapeHtml(project.category)}</span>
            <span class="tag modal-soft-tag">${escapeHtml(project.year)}</span>
            <span class="tag modal-soft-tag">${escapeHtml(project.tag)}</span>
          </div>

          <h3>${escapeHtml(project.title)}</h3>
          <p class="client">Client · ${escapeHtml(project.client)}</p>
          <p class="brief">${escapeHtml(project.brief)}</p>

          <h4 class="modal-heading">Deliverables</h4>

          <ul class="deliverables">
            ${project.deliverables.map(function (item) {
              return `<li><span class="deliverable-check">✓</span> ${escapeHtml(item)}</li>`;
            }).join("")}
          </ul>

          <div class="modal-actions">
            <a href="order.html" class="btn-primary" id="modal-order">
              Order this ${project.type.toLowerCase()}
            </a>
            <button class="btn-secondary" id="modal-back" type="button">
              Back to portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  watchProjectImages(modalRoot);

  document.body.style.overflow = "hidden";

  $("#modal-close").onclick = closeProject;
  $("#modal-back").onclick = closeProject;
  $("#modal-order").onclick = closeProject;

  $("#modal-backdrop").onclick = function (event) {
    if (event.target.id === "modal-backdrop") {
      closeProject();
    }
  };
}

function closeProject() {
  $("#modal-root").innerHTML = "";
  document.body.style.overflow = "";
}

// ------------------------------------------------------------
// Order form
// ------------------------------------------------------------

function selectLogoType() {
  $$(".type-card").forEach(function (card) {
    card.classList.toggle("selected", card.dataset.type === state.logoType);
  });

  $("#order-form [name='logoType']").value = state.logoType;
  updateOrderSelectionSummary();
  syncProjectBrief();
}

function selectPackage() {
  $("#order-form [name='pkg']").value = state.packageName;
  $$("#package-grid .package-card").forEach(function (card) {
    const button = card.querySelector("[data-pkg]");
    const isSelected = !!button && button.dataset.pkg === state.packageName;

    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-selected", String(isSelected));

    if (button) {
      button.setAttribute("aria-pressed", String(isSelected));
      button.textContent = isSelected ? "Selected package" : "Choose " + button.dataset.pkg;
    }
  });
  updateOrderSelectionSummary();
  syncProjectBrief();
}

function buildProjectBrief() {
  const form = $("#order-form");
  if (!form) return "";

  const labels = {
    name: "Client name",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    company: "Company / organisation",
    brand: "Brand name",
    industry: "Industry",
    slogan: "Slogan / tagline",
    logoType: "Logo type",
    pkg: "Package",
    budget: "Budget",
    deadline: "Deadline",
    revisions: "Revisions needed",
    payment: "Payment method",
    colors: "Colour preference",
    fonts: "Font preference",
    competitors: "Competitors"
  };

  const lines = [];
  Object.keys(labels).forEach(function (name) {
    const field = form.elements[name];
    const value = field ? String(field.value || "").trim() : "";
    if (value && !value.includes(">")) {
      lines.push(labels[name] + ": " + value);
    }
  });

  if (state.addons.length) {
    lines.push("Add-ons: " + state.addons.join(", "));
  }

  return lines.join("\n");
}

function syncProjectBrief() {
  const details = $("#order-form [name='details']");
  if (details) details.value = buildProjectBrief();
}

function bindProjectBrief() {
  const details = $("#order-form [name='details']");
  if (!details) return;

  details.readOnly = true;
  details.setAttribute("aria-readonly", "true");

  const form = $("#order-form");
  form.addEventListener("input", syncProjectBrief);
  form.addEventListener("change", syncProjectBrief);
  syncProjectBrief();
}

function updateOrderSelectionSummary() {
  const summary = $("#order-selection-summary");
  const selectedPackage = PACKAGES.find(function (item) {
    return item.name === state.packageName;
  });

  if (!summary || !selectedPackage) return;

  summary.innerHTML = `
    <span class="order-selection-icon" aria-hidden="true">✓</span>
    <div>
      <strong>Selected for your brief</strong>
      <p>${escapeHtml(state.logoType)} · ${escapeHtml(state.packageName)} · ${escapeHtml(selectedPackage.price)} · ${escapeHtml(selectedPackage.time)}</p>
    </div>
  `;
}

function bindTypeButtons() {
  $("#type-grid").onclick = function (event) {
    const button = event.target.closest("[data-type]");

    if (!button) return;

    state.logoType = button.dataset.type;
    selectLogoType();
    filterPortfolio(state.logoType);
  };
}

function bindPortfolioFilters() {
  $("#portfolio").onclick = function (event) {
    const filter = event.target.closest("[data-filter-type]");
    if (!filter) return;

    filterPortfolio(filter.dataset.filterType);
  };
}

function bindPackageButtons() {
  $("#package-grid").onclick = function (event) {
    const card = event.target.closest(".package-card");

    if (!card) return;

    const button = card.querySelector("[data-pkg]");
    if (!button) return;

    state.packageName = button.dataset.pkg;
    selectPackage();
  };
}

function renderReferences() {
  const box = $("#refs");

  box.innerHTML = state.references.map(function (reference, index) {
    return `
      <div class="ref-row">
        <label class="field">
          Reference link ${index + 1}
          <input
            type="url"
            data-ref-url="${index}"
            value="${escapeHtml(reference.url)}"
            placeholder="https://…"
          >
        </label>

        <label class="field">
          Why you like it
          <input
            data-ref-note="${index}"
            value="${escapeHtml(reference.note)}"
            maxlength="160"
            placeholder="Clean type, bold colours…"
          >
        </label>

        <button
          type="button"
          class="remove-ref"
          data-remove-ref="${index}"
          aria-label="Remove reference"
        >×</button>
      </div>
    `;
  }).join("");

  bindReferenceInputs();
}

function bindReferenceInputs() {
  $$("#refs input").forEach(function (input) {
    input.oninput = function () {
      const index = Number(
        input.dataset.refUrl !== undefined
          ? input.dataset.refUrl
          : input.dataset.refNote
      );

      if (input.dataset.refUrl !== undefined) {
        state.references[index].url = input.value;
      } else {
        state.references[index].note = input.value;
      }
    };
  });

  $$("[data-remove-ref]").forEach(function (button) {
    button.onclick = function () {
      const index = Number(button.dataset.removeRef);

      if (state.references.length === 1) {
        state.references[0] = { url: "", note: "" };
      } else {
        state.references.splice(index, 1);
      }

      renderReferences();
    };
  });
}

function bindReferenceControls() {
  const button = $("#add-ref");
  if (!button) return;

  button.onclick = function () {
    if (state.references.length >= 3) {
      showToast("You can add up to 3 reference links.");
      return;
    }

    state.references.push({ url: "", note: "" });
    renderReferences();
  };
}

function renderInspirationFiles() {
  const list = $("#inspiration-file-list");
  const downloadButton = $("#download-inspiration");
  if (!list) return;

  list.innerHTML = state.inspirationFileObjects.map(function (file) {
    return `<a class="inspiration-file" href="${file.url}" target="_blank" rel="noopener" download="${escapeHtml(file.name)}"><img src="${file.url}" alt=""><span>${escapeHtml(file.name)}</span></a>`;
  }).join("");

  if (downloadButton) downloadButton.hidden = state.inspirationFileObjects.length === 0;
}

function downloadInspirationFiles() {
  state.inspirationFileObjects.forEach(function (file) {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
  showToast("Download started — attach the images in WhatsApp.");
}

function bindInspirationUpload() {
  const button = $("#upload-inspiration");
  const input = $("#inspiration-files");
  if (!button || !input) return;

  button.onclick = function () {
    input.click();
  };

  input.onchange = function () {
    Array.from(input.files || []).forEach(function (file) {
      const duplicate = state.inspirationFileObjects.some(function (item) {
        return item.name === file.name && item.size === file.size;
      });
      if (duplicate) return;
      state.inspirationFileObjects.push({
        name: file.name,
        size: file.size,
        url: URL.createObjectURL(file)
      });
    });
    state.inspirationFileObjects = state.inspirationFileObjects.slice(0, 10);
    state.inspirationFiles = state.inspirationFileObjects.map(function (file) { return file.name; });
    renderInspirationFiles();
    syncProjectBrief();
    input.value = "";
  };

  const downloadButton = $("#download-inspiration");
  if (downloadButton) downloadButton.onclick = downloadInspirationFiles;
}

function bindOptionButtons() {
  $("#order-form").onclick = function (event) {
    const button = event.target.closest("[data-style], [data-format], [data-addon]");
    if (!button) return;

    if (button.dataset.style) {
      toggleOption("styles", button.dataset.style, button);
    }

    if (button.dataset.format) {
      toggleOption("formats", button.dataset.format, button);
    }

    if (button.dataset.addon) {
      toggleOption("addons", button.dataset.addon, button);
      syncAddonChoices();
    }
  };

  const addonChoices = $("#addon-choices");
  if (addonChoices) {
    addonChoices.onclick = function (event) {
      const button = event.target.closest("[data-addon]");
      if (!button) return;
      toggleOption("addons", button.dataset.addon, button);
      syncAddonChoices();
      syncFormAddonButtons();
    };
  }

  syncAddonChoices();
}

function syncAddonChoices() {
  $$("#addon-choices [data-addon]").forEach(function (button) {
    button.classList.toggle("active", state.addons.includes(button.dataset.addon));
  });
}

function syncFormAddonButtons() {
  $$("#order-form [data-addon]").forEach(function (button) {
    button.classList.toggle("active", state.addons.includes(button.dataset.addon));
  });
}

function toggleOption(listName, value, button) {
  const list = state[listName];
  const index = list.indexOf(value);

  if (index === -1) {
    list.push(value);
    button.classList.add("active");
  } else {
    list.splice(index, 1);
    button.classList.remove("active");
  }
}

function collectOrder() {
  const form = $("#order-form");
  const data = Object.fromEntries(new FormData(form).entries());

  const selectedPackage = PACKAGES.find(function (item) {
    return item.name === state.packageName;
  });
  const price = selectedPackage ? selectedPackage.price : "On request";

  data.logoType = state.logoType;
  data.pkg = state.packageName;
  data.styles = state.styles.slice();
  data.formats = state.formats.slice();
  data.addons = state.addons.slice();
  data.inspirationFiles = state.inspirationFiles.slice();
  data.details = buildProjectBrief();
  data.references = state.references.map(function (item) {
    return { url: item.url, note: item.note };
  });
  data.orderId = makeOrderId();
  data.price = price;

  return data;
}

function orderToText(order) {
  function field(label, value) {
    return value ? "• " + label + ": " + value + "\n" : "";
  }

  function list(value) {
    return value ? value.split(", ").map(function (item) {
      return "• " + item;
    }).join("\n") : "• None selected";
  }

  const references = order.references
    .filter(function (item) {
      return item.url.trim() || item.note.trim();
    })
    .map(function (item, index) {
      return "• Reference " + (index + 1) + ": "
        + (item.url || "(no link)")
        + (item.note ? "\n  Note: " + item.note : "");
    })
    .join("\n");
  const inspirationFiles = order.inspirationFiles && order.inspirationFiles.length
    ? order.inspirationFiles.map(function (name) { return "• " + name; }).join("\n")
    : "• None uploaded";

  const paymentNumber = order.payment === "Bank transfer"
    ? SITE.bank.accountNumber
    : (SITE.paymentMethods[order.payment] || SITE.paymentNumber);
  const paymentAccount = order.payment === "Bank transfer"
    ? "\nBank: " + SITE.bank.bankName
      + "\nAccount name: " + SITE.bank.accountName
      + "\nRouting number: " + SITE.bank.routingNumber
      + "\nBranch: " + SITE.bank.branch
    : "";

  return `NEW LOGO PROJECT
====================
Studio: ${SITE.name}
Order ID: ${order.orderId}
Date: ${new Date().toLocaleString()}

CLIENT INFORMATION
------------------
${field("Name", order.name)}${field("Email", order.email)}${field("Phone", order.phone)}${field("WhatsApp", order.whatsapp)}${field("Company", order.company)}
PROJECT INFORMATION
-------------------
${field("Brand name", order.brand)}${field("Industry", order.industry)}${field("Slogan / tagline", order.slogan)}${field("Logo type", order.logoType)}${field("Package", order.pkg)}${field("Price", order.price)}${field("Budget", order.budget)}${field("Deadline", order.deadline)}

DESIGN DIRECTION
----------------
${field("Colour preference", order.colors)}${field("Font preference", order.fonts)}${field("Competitors", order.competitors)}${field("Revisions", order.revisions)}
Add-ons:
${list(order.addons.join(", "))}

REFERENCE LOGOS
--------------
${references || "• None provided"}

UPLOADED INSPIRATION FILES
--------------------------
${inspirationFiles}

PAYMENT
-------
${field("Method", order.payment)}${field("Payment status", order.paymentStatus || "Awaiting verification")}${field("Payment number", paymentNumber)}${field("Transaction ID", order.transactionId)}${paymentAccount}`;
}

function submitOrder(event) {
  event.preventDefault();

  const order = collectOrder();
  order.payment = order.payment || "bKash";
  order.paymentStatus = "Awaiting payment";

  state.placedOrder = order;

  const text = orderToText(order);

  const whatsappWindow = window.open(
    whatsappLink(text),
    "_blank",
    "noopener,noreferrer"
  );

  if (!whatsappWindow) {
    showToast("Pop-up blocked — use the “Send on WhatsApp” button below.");
  }

  openOrderEmailDraft(order);

  showToast("WhatsApp opened and an email draft was prepared.");

  showPaymentPage(order);
}

function showPaymentPage(order) {
  const confirmation = $("#confirmation");
  const paymentMethod = order.payment || "bKash";
  const isBankTransfer = paymentMethod === "Bank transfer";
  const paymentNumber = SITE.paymentMethods[paymentMethod] || SITE.paymentNumber;
  const paymentBrandClass = isBankTransfer
    ? "payment-brand-dbbl"
    : "payment-brand-" + paymentMethod.toLowerCase();
  const paymentBrandLabel = isBankTransfer ? "DBBL" : paymentMethod;
  const gatewayAction = SITE.paymentGatewayUrl && !isBankTransfer
    ? `<form class="gateway-form" method="post" action="${escapeHtml(SITE.paymentGatewayUrl)}">
        <input type="hidden" name="orderId" value="${escapeHtml(order.orderId)}">
        <input type="hidden" name="amount" value="${escapeHtml(order.price)}">
        <input type="hidden" name="customerEmail" value="${escapeHtml(order.email || "")}">
        <input type="hidden" name="paymentMethod" value="${escapeHtml(paymentMethod)}">
        <button class="btn-primary gateway-button" type="submit">Pay securely with ${escapeHtml(paymentMethod)}</button>
      </form>`
    : "";
  const manualPaymentDetails = isBankTransfer
    ? `<div class="bank-details">
        <div><span>Bank</span><strong>${escapeHtml(SITE.bank.bankName)}</strong></div>
        <div><span>Account number</span><strong>${escapeHtml(SITE.bank.accountNumber)}</strong></div>
        <div><span>Account name</span><strong>${escapeHtml(SITE.bank.accountName)}</strong></div>
        <div><span>Routing number</span><strong>${escapeHtml(SITE.bank.routingNumber)}</strong></div>
        <div><span>Branch</span><strong>${escapeHtml(SITE.bank.branch)}</strong></div>
        <button type="button" id="copy-payment-details" class="copy-payment-number">Copy bank details</button>
      </div>`
    : `<div class="payment-number">
        <span>${escapeHtml(paymentMethod)} payment number</span>
        <strong>${escapeHtml(paymentNumber)}</strong>
        <button type="button" id="copy-payment-number" class="copy-payment-number">Copy number</button>
      </div>`;
  const manualSteps = isBankTransfer
    ? `<ol class="payment-steps">
        <li>Transfer <strong>${escapeHtml(order.price)}</strong> to the account above.</li>
        <li>Enter the bank transfer reference or transaction ID below.</li>
      </ol>`
    : `<ol class="payment-steps">
        <li>Open ${escapeHtml(paymentMethod)} and choose <strong>Send Money</strong>.</li>
        <li>Send <strong>${escapeHtml(order.price)}</strong> to <strong>${escapeHtml(paymentNumber)}</strong>.</li>
        <li>Enter the transaction ID below for verification.</li>
      </ol>`;

  confirmation.innerHTML = `
    <div class="payment-page">
      <div class="payment-page-head">
        <span class="payment-step">Step 2 of 2</span>
        <h3>Secure your order</h3>
        <p class="muted">Your brief is ready. Complete payment, then keep the receipt reference for your records.</p>
      </div>

      <div class="payment-summary">
        <div><span>Order ID</span><strong>${escapeHtml(order.orderId)}</strong></div>
        <div><span>Package</span><strong>${escapeHtml(order.pkg)}</strong></div>
        <div><span>Amount</span><strong>${escapeHtml(order.price)}</strong></div>
      </div>

      <div class="payment-method selected">
        <div class="payment-method-icon ${paymentBrandClass}">${escapeHtml(paymentBrandLabel)}</div>
        <div><strong>${escapeHtml(paymentMethod)}</strong><small>${isBankTransfer ? "Transfer to bank account" : "Send money to this number"}</small></div>
        <span class="payment-selected">Selected</span>
      </div>

      ${gatewayAction}
      ${SITE.paymentGatewayUrl ? '<div class="payment-divider"><span>or pay manually</span></div>' : ""}

      ${manualPaymentDetails}

      ${manualSteps}

      <label class="field payment-transaction-field">${escapeHtml(isBankTransfer ? "Bank transfer reference" : paymentMethod + " transaction ID")}
        <input id="payment-transaction-id" type="text" maxlength="40" placeholder="Example: 9A7B6C5D" autocomplete="off">
      </label>
      <p id="payment-error" class="payment-error" role="alert"></p>

      <button id="confirm-payment" class="btn-primary payment-confirm" type="button">Submit payment details</button>
      <p class="payment-note">Your payment is marked as awaiting verification until it is checked against the bKash transaction.</p>
    </div>
  `;

  confirmation.scrollIntoView({ behavior: "smooth", block: "start" });

  const copyPaymentButton = $("#copy-payment-number") || $("#copy-payment-details");
  if (copyPaymentButton) copyPaymentButton.onclick = function () {
    if (navigator.clipboard) {
      const copyValue = isBankTransfer
        ? `${SITE.bank.bankName}\nAccount number: ${SITE.bank.accountNumber}\nAccount name: ${SITE.bank.accountName}\nRouting number: ${SITE.bank.routingNumber}\nBranch: ${SITE.bank.branch}`
        : paymentNumber;
      navigator.clipboard.writeText(copyValue);
      showToast(isBankTransfer ? "Bank details copied" : paymentMethod + " number copied");
    }
  };

  $("#confirm-payment").onclick = function () {
    const transactionId = $("#payment-transaction-id").value.trim();
    const error = $("#payment-error");

    if (transactionId.length < 5) {
      error.textContent = "Enter a valid payment reference to continue.";
      return;
    }

    order.payment = paymentMethod;
    order.transactionId = transactionId;
    order.paymentStatus = "Awaiting verification";
    showConfirmation(order);
  };
}

function showConfirmation(order) {
  const confirmation = $("#confirmation");

  confirmation.innerHTML = `
    <div class="confirmation">
      <div class="confirm-head">
        <div class="confirm-icon">✓</div>
        <div>
          <h4 class="confirmation-title">Order ${escapeHtml(order.orderId)} placed</h4>
          <p class="muted confirmation-text">
            Your brief and payment details are saved. This receipt is a payment submission record; final approval follows transaction verification.
          </p>
        </div>
      </div>

      <dl class="confirm-grid">
        <div class="confirm-box">
          <dt>Package</dt>
          <dd>${escapeHtml(order.pkg)}</dd>
        </div>
        <div class="confirm-box">
          <dt>Amount</dt>
          <dd>${escapeHtml(order.price)}</dd>
        </div>
        <div class="confirm-box">
          <dt>Payment method</dt>
          <dd>${escapeHtml(order.payment || "bKash")}</dd>
        </div>
        <div class="confirm-box">
          <dt>Payment status</dt>
          <dd>${escapeHtml(order.paymentStatus || "Awaiting verification")}</dd>
        </div>
      </dl>

      <div class="confirm-actions">
        <button id="download-receipt" class="btn-secondary" type="button">
          ↓ Download money receipt
        </button>

        <a class="btn-primary" target="_blank" href="${whatsappLink(orderToText(order))}">
          ◉ Resend on WhatsApp
        </a>

        <button id="resend-email" class="btn-secondary" type="button">
          ✉ Resend brief by email
        </button>
      </div>

      <p class="help">
        Payment submitted via ${escapeHtml(order.payment || "bKash")}.
        Transaction ID: ${escapeHtml(order.transactionId || "Pending")}
      </p>
    </div>
  `;

  $("#download-receipt").onclick = function () {
    downloadReceipt(order);
  };
  $("#resend-email").onclick = function () {
    openOrderEmailDraft(order);
  };
}

// ------------------------------------------------------------
// Payment receipt
// ------------------------------------------------------------

function receiptHtml(o){const now=new Date(),due=new Date(now.getTime()+3*864e5),refs=o.references.filter(r=>r.url.trim()||r.note.trim());const row=(k,v)=>`<tr><td class="k">${esc(k)}</td><td class="v">${esc(v)}</td></tr>`;return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Receipt ${esc(o.orderId)} — ${SITE.name}</title><style>:root{--v:#6633CC;--b:#3366FF;--ink:#160c2e;--g:#6b6480;--line:#ece8f6;--soft:#f7f5fb}*{box-sizing:border-box}body{margin:0;padding:32px 20px;background:var(--soft);font-family:ui-sans-serif,system-ui;color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}.sheet{max-width:820px;margin:auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 24px 70px -34px rgba(102,51,204,.45)}.head{background:linear-gradient(125deg,var(--v),var(--b));color:#fff;padding:32px 36px}.head-top{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}.brand{display:flex;align-items:center;gap:14px}.glyph{width:46px;height:46px;border-radius:14px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px}.head h1{margin:0;font-size:22px}.head .sub{margin:3px 0 0;font-size:12.5px;opacity:.85}.badge{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);border-radius:999px;padding:7px 15px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.meta{margin-top:26px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.meta div{background:rgba(255,255,255,.12);border-radius:14px;padding:12px 14px}.meta span{display:block;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.8}.meta strong{display:block;margin-top:5px;font-size:14.5px}.body{padding:8px 36px 0}.body section{padding:24px 0;border-bottom:1px solid var(--line)}h2{margin:0 0 14px;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--v)}table{width:100%;border-collapse:collapse;font-size:13.5px}.grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 32px}td{padding:7px 0;vertical-align:top}td.k{color:var(--g);width:44%;font-weight:600}td.v{font-weight:600}.items th{text-align:left;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--g);padding:0 0 10px;border-bottom:1px solid var(--line)}.items td{padding:14px 0;border-bottom:1px solid var(--line)}.desc{color:var(--g);font-size:12.5px;margin-top:3px}.amt{text-align:right;font-weight:800;white-space:nowrap}.totals{margin:16px 0 0 auto;width:100%;max-width:320px}.totals .lbl{color:var(--g);font-weight:600}.totals .val{text-align:right;font-weight:700}.grand{margin-top:14px;display:flex;justify-content:space-between;background:linear-gradient(125deg,var(--v),var(--b));color:#fff;border-radius:16px;padding:16px 20px;font-weight:800;font-size:18px}.pay{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-top:14px}.pay div{background:var(--soft);border:1px solid var(--line);border-radius:14px;padding:12px 14px}.pay span{display:block;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--g)}.pay strong{display:block;margin-top:5px;font-size:15px}.note{font-size:13px;color:var(--g);line-height:1.7;white-space:pre-wrap}.status{display:inline-block;background:#fff3d6;color:#8a5a00;border-radius:999px;padding:5px 12px;font-size:11px;font-weight:800;text-transform:uppercase}.foot{padding:24px 36px 30px;font-size:12px;color:var(--g);line-height:1.8}a{color:var(--b);text-decoration:none}@media print{body{background:#fff;padding:0}.sheet{box-shadow:none;border-radius:0}}@media(max-width:640px){.grid2{grid-template-columns:1fr}.head,.body,.foot{padding-left:20px;padding-right:20px}}</style></head><body><div class="sheet"><div class="head"><div class="head-top"><div class="brand"><div class="glyph">Lg</div><div><h1>${SITE.name}</h1><p class="sub">Logo &amp; brand identity design · ${SITE.owner}</p></div></div><span class="badge">Order receipt / invoice</span></div><div class="meta"><div><span>Receipt no.</span><strong>${esc(o.orderId)}</strong></div><div><span>Issued</span><strong>${now.toLocaleDateString()}</strong></div><div><span>Package</span><strong>${esc(o.pkg)}</strong></div><div><span>Total</span><strong>${esc(o.price)}</strong></div></div></div><div class="body"><section><div class="grid2"><div><h2>Billed to</h2><table><tbody>${[['Name',o.name||'—'],['Company',o.company||'—'],['Email',o.email||'—'],['Phone',o.phone||'—'],['WhatsApp',o.whatsapp||o.phone||'—']].map(x=>row(...x)).join('')}</tbody></table></div><div><h2>Designer</h2><table><tbody>${[['Studio',SITE.name],['Designer',SITE.owner],['Email',SITE.emailPrimary],['WhatsApp',SITE.phoneDisplay],['Address',SITE.addressLine]].map(x=>row(...x)).join('')}</tbody></table></div></div></section><section><h2>Project brief summary</h2><div class="grid2"><table><tbody>${[['Brand name',o.brand||'—'],['Industry',o.industry||'—'],['Slogan / tagline',o.slogan||'—'],['Logo type',o.logoType]].map(x=>row(...x)).join('')}</tbody></table><table><tbody>${[['Style direction',o.styles.length?o.styles.join(', '):'—'],['Colour preference',o.colors||'—'],['Font preference',o.fonts||'—'],['Competitors',o.competitors||'—']].map(x=>row(...x)).join('')}</tbody></table></div></section><section><h2>Order summary</h2><table class="items"><thead><tr><th>Description</th><th style="text-align:right">Amount</th></tr></thead><tbody><tr><td><strong>${esc(o.pkg)} package</strong><div class="desc">${esc(o.logoType)} · ${esc(o.formats.join(', ')||'PNG, SVG')} · ${esc(o.revisions)} revision(s)</div></td><td class="amt">${esc(o.price)}</td></tr>${o.addons.length?`<tr><td><strong>Add-ons</strong><div class="desc">${esc(o.addons.join(', '))}</div></td><td class="amt">Quoted separately</td></tr>`:''}</tbody></table><table class="totals"><tbody><tr><td class="lbl">Subtotal</td><td class="val">${esc(o.price)}</td></tr><tr><td class="lbl">Discount</td><td class="val">—</td></tr><tr><td class="lbl">Tax / VAT</td><td class="val">Not applicable</td></tr></tbody></table><div class="grand"><span>Total payable</span><span>${esc(o.price)}</span></div></section><section><h2>Payment instructions</h2><p class="note">Send the total to the number below using <strong>Send Money</strong> on bKash, Nagad or Rocket, then share the transaction ID on WhatsApp with your order ID.</p><div class="pay"><div><span>bKash / Nagad / Rocket</span><strong>${SITE.paymentNumber}</strong></div><div><span>Account name</span><strong>${SITE.owner}</strong></div><div><span>Reference</span><strong>${esc(o.orderId)}</strong></div><div><span>Due date</span><strong>${due.toLocaleDateString()}</strong></div></div><table style="margin-top:14px"><tbody>${[['Deadline',o.deadline||'To be agreed'],['Payment method',o.payment],['Payment number',`${SITE.paymentNumber} (bKash · Nagad · Rocket)`],['Payment reference',o.orderId],['Payment due',due.toLocaleDateString()]].map(x=>row(...x)).join('')}</tbody></table><p style="margin-top:14px">Status: <span class="status">Payment pending</span></p></section><section><h2>Reference logos &amp; notes</h2><p class="note">${refs.length?refs.map((r,i)=>`${i+1}. ${esc(r.url||'(no link)')}${r.note?` — ${esc(r.note)}`:''}`).join('\n'):'No reference links provided.'}</p><h2 style="margin-top:20px">Client brief</h2><p class="note">${esc(o.details||'No additional notes provided.')}</p></section><section style="border-bottom:none"><h2>Terms &amp; delivery</h2><ol><li>Work begins once the advance payment is confirmed against this receipt reference.</li><li>Initial concepts are shared within 2–4 working days of confirmation.</li><li>${esc(o.revisions)} revision round(s) are included in the ${esc(o.pkg)} package.</li><li>Final files are delivered in ${esc(o.formats.join(', ')||'PNG, SVG')} after full payment.</li><li>Full copyright transfers to the client upon final payment.</li></ol></section></div><div class="foot">Thank you for choosing ${SITE.name}. Questions about this receipt? Email <a href="mailto:${SITE.emailPrimary}">${SITE.emailPrimary}</a> or WhatsApp <a href="https://wa.me/${SITE.whatsapp}">${SITE.phoneDisplay}</a>.<br>${SITE.addressLine} · ${SITE.hours}<br>This document is a computer-generated order receipt and does not require a signature.</div></div></body></html>`}

// ------------------------------------------------------------
// Message form
// ------------------------------------------------------------

function getMessageData() {
  const form = $("#message-form");
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};

  if (!String(data.name || "").trim() || String(data.name).trim().length < 2) {
    errors.name = "Please enter your name";
  }

  if (!/^\S+@\S+\.\S+$/.test(String(data.email || "").trim())) {
    errors.email = "Enter a valid email";
  }

  if (String(data.message || "").trim().length < 10) {
    errors.message = "Tell me a little more (10+ characters)";
  }

  $$(".error", form).forEach(function (item) {
    item.textContent = "";
  });

  Object.entries(errors).forEach(function ([name, message]) {
    const item = $(`[data-error="${name}"]`, form);

    if (item) {
      item.textContent = message;
    }
  });

  if (Object.keys(errors).length > 0) {
    showToast("Please fix the highlighted fields");
    return null;
  }

  const text = `New message from ${SITE.name} website

Name: ${String(data.name).trim()}
Email: ${String(data.email).trim()}
${data.phone ? "Phone: " + String(data.phone).trim() + "\n" : ""}
Message:
${String(data.message).trim()}`;

  return { data, text };
}

function sendMessageByEmail(event) {
  event.preventDefault();

  const message = getMessageData();

  if (!message) return;

  window.location.href = emailLink(
    "Website message — " + message.data.name,
    message.text
  );

  showToast("Opening your email app with the message ready to send.");
}

function sendMessageByWhatsApp() {
  const message = getMessageData();

  if (!message) return;

  window.open(
    whatsappLink(message.text),
    "_blank",
    "noopener,noreferrer"
  );

  showToast("Opening WhatsApp with your message.");
}

// ------------------------------------------------------------
// Mobile menu
// ------------------------------------------------------------

function setupMenu() {
  $("#menu-btn").onclick = function () {
    const menu = $("#mobile-nav");
    const isOpen = menu.classList.toggle("open");

    $("#menu-btn").textContent = isOpen ? "×" : "☰";
    $("#menu-btn").setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  $$(".mobile-link").forEach(function (link) {
    link.onclick = function () {
      $("#mobile-nav").classList.remove("open");
      $("#menu-btn").textContent = "☰";
      $("#menu-btn").setAttribute("aria-expanded", "false");
    };
  });
}

// ------------------------------------------------------------
// Animations
// ------------------------------------------------------------

function watchReveal() {
  const elements = $$(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(function (element) {
    if (!element.classList.contains("is-visible")) {
      observer.observe(element);
    }
  });
}

// ------------------------------------------------------------
// Portfolio button
// ------------------------------------------------------------

function setupPortfolio() {
  const moreLink = $("#more-projects");
  if (moreLink) {
    moreLink.href = "more-projects.html";
  }

  $("#portfolio-grid").onclick = function (event) {
    const typeLabel = event.target.closest(".logo-type-highlight");
    if (typeLabel) {
      event.preventDefault();
      filterPortfolio(typeLabel.textContent.trim());
      return;
    }

    const card = event.target.closest("[data-project]");

    if (!card) return;

    openProject(getProjectDetails(card), card);
  };
}

// ------------------------------------------------------------
// Start everything
// ------------------------------------------------------------

function getClientReviews() {
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    if (!raw) return DEFAULT_CLIENT_REVIEWS.slice();

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_CLIENT_REVIEWS.slice();
  } catch (error) {
    return DEFAULT_CLIENT_REVIEWS.slice();
  }
}

function saveClientReviews(reviews) {
  try {
    localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
  } catch (error) {
    // Ignore storage write issues in restricted browser environments.
  }
}

function getReviewAvatarColor(index) {
  const palette = ["bg-sun", "bg-sky", "bg-violet", "bg-coral", "bg-mint", "bg-pink"];
  return palette[index % palette.length];
}

function getReviewStars(rating) {
  const value = Math.max(1, Math.min(5, Number(rating) || 5));
  const stars = [];

  for (let index = 1; index <= 5; index += 1) {
    stars.push('<span class="star-item' + (index <= value ? ' active' : '') + '">★</span>');
  }

  return stars.join("");
}

function renderClientReviews() {
  const list = document.getElementById("client-review-list");
  if (!list) return;

  const reviews = getClientReviews();

  list.innerHTML = reviews.map(function (review, index) {
    const name = review.name || "Client";
    const company = review.company || "Recent client";
    const message = review.message || "";
    const initials = name.split(" ").map(function (part) {
      return part[0] || "";
    }).slice(0, 2).join("").toUpperCase();

    return `
      <figure class="review-card lift reveal" style="transition-delay:${index * 80}ms">
        <div class="review-card-top">
          <span class="stars">${getReviewStars(review.rating || 5)}</span>
          <span class="verified">✓ Verified</span>
        </div>
        <blockquote class="review-text">“${escapeHtml(message)}”</blockquote>
        <figcaption class="review-user">
          <span class="avatar ${getReviewAvatarColor(index)}">${escapeHtml(initials || "C")}</span>
          <span>
            <span class="user-name">${escapeHtml(name)}</span>
            <span class="user-role">${escapeHtml(company)}</span>
          </span>
        </figcaption>
      </figure>
    `;
  }).join("");

  watchReveal();
}

function handleClientFeedbackSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = Object.fromEntries(new FormData(form).entries());
  const name = String(formData.name || "").trim();
  const company = String(formData.company || "").trim();
  const rating = Number(formData.rating || 5);
  const message = String(formData.message || "").trim();

  if (!name || !message || message.length < 10) {
    showToast("Please add your name and a short review with at least 10 characters.");
    return;
  }

  const review = {
    name: name,
    company: company || "Client",
    rating: Math.max(1, Math.min(5, rating || 5)),
    message: message
  };

  const reviews = getClientReviews();
  reviews.unshift(review);
  saveClientReviews(reviews.slice(0, 12));
  renderClientReviews();
  form.reset();
  showToast("Thank you! Your feedback is now live on the website.");
}

function startWebsite() {
  selectLogoType();
  selectPackage();

  renderReferences();
  bindReferenceControls();
  bindInspirationUpload();

  bindTypeButtons();
  bindPackageButtons();
  bindOptionButtons();
  bindProjectBrief();

  setupMenu();
  setupPortfolio();
  bindPortfolioFilters();
  showPortfolio();
  watchProjectImages(document);
  renderClientReviews();

  $("#order-form").onsubmit = submitOrder;
  $("#message-form").onsubmit = sendMessageByEmail;
  $("#msg-wa").onclick = sendMessageByWhatsApp;
  const clientFeedbackForm = $("#client-feedback-form");
  if (clientFeedbackForm) {
    clientFeedbackForm.onsubmit = handleClientFeedbackSubmit;
  }

  watchReveal();
}

if (new URLSearchParams(window.location.search).has("order")) {
  document.body.classList.add("order-only");
  $$('a[href="#home"]').forEach(function (link) {
    link.href = "index.html#home";
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProject();
  }
});

startWebsite();
