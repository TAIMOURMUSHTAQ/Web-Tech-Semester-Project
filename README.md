# Taimour Creative Solutions🎓💼

## 📌 Project Overview

**Taimour Creative Solutions** is a modern, fully responsive multi-page static website built entirely with **HTML5 and CSS3**  no JavaScript frameworks, no backend, no build tools. Designed to serve educational institutes, training centers, and startups, it combines a professional business aesthetic with educational content in a single cohesive platform.

A key feature of this project is an integrated **AI-powered chatbot widget** that floats on every page, allowing visitors to instantly query information about courses, services, and contact details — all without any server-side code.

---

## 🖥️ Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero banner, feature cards, CTA |
| About | `about.html` | Organization overview, mission & vision |
| Services | `services.html` | Service cards with hover effects |
| Project | `project.html` | Project identity and development steps |
| Courses | `courses.html` | Three-tier pricing cards |
| Team | `team.html` | Circular profile cards for team members |
| Gallery | `gallery.html` | CSS Grid image gallery with animations |
| Contact | `contact.html` | Styled HTML form + chatbot access |

---

## 📸 Screenshots

### Home Page
![Home Page](screenshots/screenshot-home.png)

### Services Page
![Services Page](screenshots/screenshot-services.png)

### Courses Page — Pricing Cards
![Courses Page](screenshots/screenshot-courses.png)

### Team Page
![Team Page](screenshots/screenshot-team.png)

### Gallery Page
![Gallery Page](screenshots/screenshot-gallery.png)

### Contact Page
![Contact Page](screenshots/screenshot-contact.png)

### AI Chatbot Widget
![Chatbot Widget](screenshots/screenshot-chatbot.png)

> The chatbot is a floating widget (bottom-right) present on every page. It expands into a full chat panel where visitors can ask about courses, services, and more.

---

## ✨ Features

- **8 fully linked HTML pages** with consistent navigation
- **Responsive design** — adapts to desktop, tablet, and mobile via CSS media queries
- **AI chatbot widget** — embedded via third-party script (Tidio), no backend required
- **CSS Flexbox & Grid** for professional layouts
- **Hover animations** on cards, gallery images, and buttons
- **Three-tier pricing section** on the Courses page
- **Circular team profile cards** on the Team page
- **CSS Grid image gallery** with zoom-on-hover overlay
- **Styled contact form** with focus states and placeholder styling
- **Single `style.css`** controls all pages — easy to maintain

---

## 🤖 Chatbot Details

The AI chatbot is embedded using a lightweight `<script>` tag placed in the `<body>` of every HTML file. Features:

- Floating circular chat bubble (sky-blue, bottom-right corner)
- Expands into a full chat panel with greeting: *"Hi there! How can I help you today?"*
- Accepts typed visitor queries
- Provides pre-configured responses for common queries (courses, services, contact info)
- Minimizable — collapses back to bubble icon
- Works entirely client-side; chat provider handles the backend

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure, semantic elements, forms |
| CSS3 | Styling, Flexbox, Grid, media queries, animations |
| CSS Custom Properties | Brand color variables |
| Chatbot SDK (Tidio) | Floating AI chat widget |

**No JavaScript frameworks. No Node.js. No database. No build step.**

---

## 📁 File Structure

```
edubusiness-hub/
├── index.html          ← Home page
├── about.html          ← About page
├── services.html       ← Services page
├── project.html        ← Project page
├── courses.html        ← Courses & pricing
├── team.html           ← Team members
├── gallery.html        ← Image gallery
├── contact.html        ← Contact form
├── style.css           ← Global stylesheet (all pages)
├── images/             ← All image assets
│   ├── hero-bg.jpg
│   ├── team/
│   └── gallery/
└── screenshots/        ← README screenshots
```

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Primary Color | `#1E3A5F` — Dark Navy (nav, hero, headings) |
| Accent Color | `#2E75B6` — Sky Blue (buttons, chatbot, highlights) |
| Background | `#FFFFFF` / `#F5F7FA` |
| Body Font | Calibri / Arial (system fonts) |
| Breakpoints | 768px (tablet), 480px (mobile) |

---

## 🚀 Getting Started

No installation or build process required.

```bash
# Clone the repository
git clone https://github.com/TAIMOURMUSHTAQ/Web-Tech-Semester-Project

# Open in browser
cd edubusiness-hub
open index.html     # macOS
start index.html    # Windows
xdg-open index.html # Linux
```

Or just drag `index.html` into your browser.

---

## 🌐 Deployment

This site can be deployed for **free** on any of the following:

- **GitHub Pages** — push to repo, enable Pages in settings
- **Netlify** — drag and drop the project folder
- **Vercel** — connect GitHub repo, auto-deploy

---

## 🔬 Testing

| Test | Status |
|------|--------|
| Navigation links | ✅ Pass |
| Responsive layout (mobile/tablet/desktop) | ✅ Pass |
| Chatbot open/close | ✅ Pass |
| Hover effects (cards, gallery, buttons) | ✅ Pass |
| Cross-browser (Chrome, Edge, Firefox) | ✅ Pass |
| Contact form display | ✅ Pass |

---

## 🔮 Future Enhancements

- [ ] JavaScript — form validation, dark mode toggle, smooth scroll
- [ ] Backend (Node.js/PHP) — functional contact form email
- [ ] Database — course enrollment and student records
- [ ] User authentication — student login portal
- [ ] Admin CMS — content management without editing HTML
- [ ] Payment gateway — online course fee processing
- [ ] Enhanced AI chatbot — GPT-powered responses

---

## 📚 Academic Context

This project was developed as the **final semester project** for the **Web Technologies** course during the **4th Semester of BS Computer Science** at **Federal Urdu University of Arts, Science and Technology, Islamabad**.

It demonstrates practical implementation of:
- Semantic HTML5 document structure
- CSS3 layout techniques (Flexbox, Grid)
- Responsive web design with media queries
- UI/UX design principles (whitespace, typography, color theory)
- Third-party API/widget integration

---

## 👤 Author

**Taimour Mushtaq**  
BS Computer Science 
Federal Urdu University, Islamabad  

---

## 📄 License

This project is submitted for academic purposes. Free to use as a learning reference.

---

*Built with ❤️ using only HTML5 & CSS3*
