# Portfolio Project Structure & Components Guide

## Understanding Your Portfolio Architecture

This document explains how all the pieces fit together so you know exactly what to edit and where.

---

## Data Flow: How Projects Get Displayed

```
lib/portfolio-data.ts (Your project data)
        ↓
        ↓ (imports)
        ↓
components/portfolio-work.tsx (displays projects)
        ↓
        ↓ (renders)
        ↓
Your Portfolio Website
```

### What This Means
1. **You edit:** `lib/portfolio-data.ts`
2. **It automatically updates:** `portfolio-work.tsx`
3. **Result:** Projects appear on your website

---

## Key Files and Their Purposes

### 📊 Data Layer
**`lib/portfolio-data.ts`** - Where all your project information lives
- Define projects array
- Add/edit/remove projects here
- Update CV configuration
- Contains detailed setup comments

```typescript
export const projects = [
  { id, title, category, description, image, details, year, tags }
]
```

**Usage:** Edit this file to manage all your projects

---

### 🎨 Component Layer

#### `components/portfolio-header.tsx`
- **Shows:** Navigation bar with logo and menu
- **Edit:** Company name, navigation links
- **Contains:** Sticky header with mobile menu

#### `components/portfolio-hero.tsx`
- **Shows:** Hero section with headline
- **Edit:** Main headline, tagline, CTA buttons
- **Contains:** Call-to-action buttons

#### `components/portfolio-about.tsx` ⭐ MAIN ABOUT SECTION
- **Shows:** About you, experience, skills, CV download
- **Edit:** Biography, experience details, skills list, languages
- **Contains:** CV download button, project setup guide
- **Key Sections:**
  - Personal background
  - Work experience timeline
  - Core skills
  - Languages
  - CV download card
  - Portfolio upload guidance

#### `components/portfolio-work.tsx`
- **Shows:** Project grid with filtering
- **Uses:** Project data from `lib/portfolio-data.ts`
- **Edit:** Usually no edits needed (data-driven)
- **Features:** Auto-generates category filters

#### `components/portfolio-services.tsx`
- **Shows:** Services you offer
- **Edit:** Service descriptions and highlights

#### `components/portfolio-contact.tsx`
- **Shows:** Contact form and information
- **Edit:** Contact details, email, social links

#### `components/portfolio-footer.tsx`
- **Shows:** Footer with links and social
- **Edit:** Copyright, social media links

---

### 🎯 Configuration & Styling

**`app/layout.tsx`**
- **Edit:** Site title, description (SEO)
- **Contains:** Head metadata, fonts setup
- **When:** Change when personalizing for different designers

**`app/globals.css`**
- **Contains:** Color scheme, design tokens
- **Variables:** All brand colors, spacing, borders
- **Edit if:** Changing color scheme
- **Current theme:** Chinese minimalist (white/black with golden accents)

**`app/page.tsx`**
- **Shows:** Main portfolio page structure
- **Contains:** All component imports
- **Edit:** Rarely needed (just imports components)

---

## File Organization

```
your-portfolio/
│
├── 📁 app/
│   ├── layout.tsx              ← Edit: Meta title, description
│   ├── page.tsx                ← Imports all components
│   └── globals.css             ← Colors, design system
│
├── 📁 components/
│   ├── portfolio-header.tsx    ← Logo, navigation
│   ├── portfolio-hero.tsx      ← Main headline
│   ├── portfolio-about.tsx     ← ⭐ Bio, skills, CV download
│   ├── portfolio-work.tsx      ← Project grid
│   ├── portfolio-services.tsx  ← Services section
│   ├── portfolio-contact.tsx   ← Contact form
│   └── portfolio-footer.tsx    ← Footer
│
├── 📁 lib/
│   └── portfolio-data.ts       ← ⭐ ALL PROJECT DATA
│
├── 📁 public/
│   ├── images/                 ← ⭐ Your project images
│   └── documents/              ← ⭐ Your CV PDF
│
├── 📄 PORTFOLIO_SETUP.md       ← Detailed setup guide
├── 📄 QUICK_START.md           ← 3-minute setup
└── 📄 PROJECT_STRUCTURE.md     ← You are here
```

---

## Editing Workflow by Task

### 🎯 Task: Add a New Project

1. **Prepare image**
   - File: `/public/images/project-name.jpg`
   - Size: 1200×800px

2. **Add project data**
   - File: `lib/portfolio-data.ts`
   - Find: `projects` array
   - Action: Add new object

3. **Done!**
   - Website updates automatically
   - `portfolio-work.tsx` renders it

### 🎯 Task: Update Your Bio

1. **File:** `components/portfolio-about.tsx`
2. **Find:** Background section paragraph (~line 82)
3. **Edit:** Replace with your story
4. **Save:** Changes appear immediately

### 🎯 Task: Add Your CV

1. **Upload file**
   - Folder: `/public/documents/`
   - File: `your-name_cv.pdf`

2. **Update download path**
   - File: `components/portfolio-about.tsx`
   - Find: `handleDownloadCV` function (~line 46)
   - Update: `cvPath` variable

3. **Test:** Click "Download CV" button

### 🎯 Task: Change Colors

1. **File:** `app/globals.css`
2. **Find:** `:root` section (lines 15-35)
3. **Edit:** Color values
4. **Example:**
   ```css
   --accent: 40 95% 55%;  /* Golden yellow */
   --background: 0 0% 100%;  /* White */
   --foreground: 0 0% 8%;  /* Dark gray/black */
   ```

---

## Component Dependency Map

```
app/page.tsx (main entry)
  │
  ├─→ portfolio-header
  │   └─→ ui/button components
  │
  ├─→ portfolio-hero
  │   └─→ ui/button components
  │
  ├─→ portfolio-work
  │   └─→ lib/portfolio-data (project data)
  │
  ├─→ portfolio-about
  │   ├─→ ui/button (CV download)
  │   └─→ lucide icons
  │
  ├─→ portfolio-services
  │   └─→ lucide icons
  │
  ├─→ portfolio-contact
  │   └─→ ui/button components
  │
  └─→ portfolio-footer
      └─→ lucide icons
```

---

## About Section in Detail

The `portfolio-about.tsx` component includes:

### 1. Header Section
```
"About" title + minimalist divider
Brief introduction
```

### 2. Main Content Grid (3 columns on desktop)
```
Left Column (2/3):
  - Background paragraph
  - Experience timeline with dots
  
Right Column (1/3):
  - CV Download Card (PROMINENT)
  - Core Skills list
  - Languages list
```

### 3. Portfolio Upload Guidance
```
"Project Showcase Guide" section explaining:
  - How to add projects
  - Project structure
  - Upload images
  - Edit data
  - Customize details
```

### All Editable Arrays

```typescript
// Experience timeline
const experience = [
  { position, company, period, description }
]

// Skills
const skills = ['Skill 1', 'Skill 2', ...]

// Languages
const languages = ['English', 'Swahili', 'Mandarin']
```

---

## Design System: Minimalist Chinese Aesthetic

### Color Palette (from globals.css)
- **Primary:** Black/Dark Gray (#141414)
- **Background:** White (#FFFFFF)
- **Accent:** Golden (#FFB400) - for highlights only
- **Secondary:** Light Gray (#F2F2F2)
- **Muted:** Medium Gray (#E0E0E0)

### Typography
- **Font:** System font stack (clean, readable)
- **Weights:** Light (400), Regular (500), Medium (600), Bold (700)
- **Minimal aesthetics:**
  - Thin divider lines (1px)
  - Generous whitespace
  - Light font weights for elegance

### Key Classes (from globals.css)
```css
.minimalist-divider    /* Thin golden line */
.minimalist-line       /* Subtle gray border */
.minimalist-text       /* Light, tight spacing */
.minimalist-accent     /* Small golden dots */
```

---

## Common Questions

### Q: Where do my project images go?
A: `/public/images/` folder. Update the path in `lib/portfolio-data.ts`.

### Q: How do I make a project featured?
A: Reorder projects in the array in `lib/portfolio-data.ts`. First in array = first on website.

### Q: Can I have custom categories?
A: Yes! Add any category name to a project. It automatically generates a filter button.

### Q: What if my CV is in a different format?
A: PDFs work best. Save as PDF and upload to `/public/documents/`.

### Q: How do I hide a project?
A: Remove it from the array in `lib/portfolio-data.ts` or set a `featured: false` property.

### Q: Can I change the design/colors?
A: Yes! Edit `app/globals.css` for colors, or update component classes for layout changes.

---

## Pro Tips for Maintainability

✅ **Keep data organized**
- Use consistent category names
- Put best work first
- Update regularly

✅ **Make descriptions compelling**
- Include metrics and results
- Use action verbs
- Keep under 2 sentences

✅ **Maintain image quality**
- All images 1200×800px
- Consistent style/lighting
- Professional mockups

✅ **Version control** (optional)
- Use GitHub integration
- Track changes
- Easy rollback if needed

---

**Now you understand the full architecture! You're ready to customize your portfolio. 🎨**

Refer back to this guide anytime you need to understand how components connect.
