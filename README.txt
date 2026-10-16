LOGOOGLE — SIMPLE HTML/CSS/JS WEBSITE

সহজে এডিট করার নিয়ম / QUICK EDIT GUIDE
--------------------------------------
এই website-এ কোনো build tool নেই। VS Code-এ HTML, CSS অথবা JS ফাইল খুলে পরিবর্তন করুন।

1. HTML CONTENT — index.html
	Numbered SECTION comments অনুসরণ করুন। Header, Hero, Services, Portfolio, Order,
	Reviews, Process, About, Experience এবং Contact-এর visible text এখানে আছে।
	প্রতিটি project-এর image, title, logo type, company type ও year project card-এর ভিতরে
	সরাসরি edit করা যায়। Company type বদলাতে company-type-highlight লেখা span-এর text edit করুন।
	Project খুললে যে client, category, brief ও deliverables দেখা যায়, সেগুলো একই card-এর
	ভেতরে template.project-detail অংশে edit করুন।

2. COLORS AND UI — style.css
	ফাইলের উপরের :root block-এ মূল brand colors আছে: --brand-violet, --brand-blue,
	--background, --foreground এবং --secondary। Header, cards, portfolio ও mobile rules
	একই ফাইলে comments সহ রাখা আছে।

3. FUNCTIONALITY — script.js
	SITE object-এ email, WhatsApp, phone, address ও payment তথ্য বদলান। Filter, modal,
	order form, message form এবং mobile menu-এর behavior এই ফাইলে আছে। Project-এর visible
	ও modal copy index.html-এ edit করুন।

4. PROJECT LOGOS
	Main portfolio-তে 30টি এবং More Projects page-এ 6টি logo image আছে। SVG সবচেয়ে পরিষ্কার।
	নতুন logo দিতে assets/project-logos/ folder-এ file রাখুন, তারপর সংশ্লিষ্ট img-এর src ও alt বদলান।

5. SAFE EDITING
	HTML opening/closing tag মুছবেন না। JavaScript data বদলান, behavior code নয়। পরিবর্তনের পরে
	browser refresh করে filter, project modal, order form ও message form পরীক্ষা করুন।

Files:
- index.html — Main website. Easy-to-edit HTML sections and 30 visible portfolio projects.
- more-projects.html — Separate More Projects page with 6 additional projects.
- style.css — All website styling, responsive layout and project color themes.
- script.js — Portfolio details, logo/package selection, order sending and interactions.
- assets/project-logos/ — Editable SVG logo artwork for portfolio projects.

PORTFOLIO:
- Main page shows 30 projects.
- More projects (6) opens more-projects.html and shows 6 additional projects.
- Project logo stages automatically fit logos without cropping or zooming.
- The project name/logo-type information bar uses colorful professional themes.

ORDER FORM:
- Clicking a logo type automatically selects it in the form below.
- Clicking a package automatically selects it in the form below.
- Optional add-ons are clickable cards and also sync with the Add-ons area in the brief form.
- Client fills the remaining information and can submit the completed brief to WhatsApp and email.

EDITING PROJECTS:
1. Main projects are written directly in index.html.
2. More Projects are written directly in more-projects.html.
3. Replace an SVG in assets/project-logos/ with your own PNG/JPG/SVG if preferred, then update the image src.
4. Project previews fit their fixed image stage with `object-fit: contain`, preserving each logo's full proportions without stretching or clipping. White space built into the original image is part of its artboard and must be cropped in an image editor; the website does not alter the source artwork.

NOTE:
The six extra portfolio logos are editable sample vector artwork created for this version. Replace them with the real client/project logos when available.
