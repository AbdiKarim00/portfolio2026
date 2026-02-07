# Portfolio Setup & Customization Guide

Welcome! This guide will help you manage your graphic design portfolio and easily add projects or update your CV.

## Quick Start

### What You Need to Know
- Your portfolio is managed through simple code files
- No coding experience needed—just follow the templates provided
- Changes appear instantly in the preview
- All your project data is organized in one easy-to-edit file

---

## 1. Adding Your Projects

### Step 1: Prepare Your Images

1. **Create or gather your project images**
   - Screenshot designs, mockups, or final deliverables
   - Use high-quality images
   - **Recommended size:** 1200×800 pixels (16:9 aspect ratio)
   - **Supported formats:** JPG (recommended), PNG

2. **Save images to the public folder**
   - Create folder: `/public/images/`
   - Save images here with descriptive names
   - Example: `/public/images/mecha-travel-branding.jpg`

### Step 2: Update Project Data

1. **Open the portfolio data file**
   - Location: `lib/portfolio-data.ts`
   - This file contains all your project information

2. **Find the projects array** (around line 40)

3. **Add a new project using this template:**

```typescript
{
  id: 4,  // Increment the ID from the last project
  title: 'Your Project Title',
  category: 'Brand Identity',  // Or: Digital Design, Print, Social Media, etc.
  description: 'One-line summary of your project',
  image: '/images/your-image.jpg',  // Path to your image
  details: 'Detailed case study text explaining the project, process, and results...',
  year: '2024',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],  // Up to 3 tags
}
```

### Step 3: Save and Preview

1. Save the file (`Ctrl+S` or `Cmd+S`)
2. Your portfolio preview updates automatically
3. New project appears in the work section

---

## 2. Managing Your CV

### How It Works
- Your CV is a downloadable PDF file
- Visitors can download it with a single click
- The download button is in the "About Me" section

### Upload Your CV

1. **Prepare your CV**
   - Create/update your CV as a PDF file
   - Keep file size under 5MB for fast loading
   - Name it clearly: `Abdikarim_Singir_CV.pdf`

2. **Create the documents folder**
   - Create new folder: `/public/documents/`
   - Place your CV file there
   - Full path: `/public/documents/Abdikarim_Singir_CV.pdf`

3. **Update the portfolio**
   - Open: `components/portfolio-about.tsx`
   - Find the `handleDownloadCV` function (around line 52)
   - Update the path:
   
   ```typescript
   const handleDownloadCV = () => {
     const link = document.createElement('a')
     link.href = '/documents/Abdikarim_Singir_CV.pdf'  // ← Update this path
     link.download = 'Abdikarim_Singir_CV.pdf'  // ← Update this filename
     document.body.appendChild(link)
     link.click()
     document.body.removeChild(link)
   }
   ```

4. **Save and test**
   - Save the file
   - Click the "Download CV" button to verify it works

---

## 3. Customizing Your About Section

The "About Me" section displays:
- Your background and philosophy
- Work experience timeline
- Core skills
- Languages spoken
- CV download option

### To Edit Your Bio

1. **Open:** `components/portfolio-about.tsx`
2. **Find:** The "Background section" (around line 80)
3. **Update** the paragraph text with your story

### To Edit Your Experience

In the same file, find the `experience` array (around line 20):

```typescript
const experience = [
  {
    position: 'Your Position Title',
    company: 'Company Name',
    period: 'Time Period',
    description: 'What you did and achieved...'
  },
  // Add more positions here
]
```

### To Edit Your Skills

Find the `skills` array (around line 45):

```typescript
const skills = [
  'Skill 1',
  'Skill 2',
  'Skill 3',
  // Add your skills here
]
```

### To Edit Your Languages

Find the `languages` array (around line 55):

```typescript
const languages = ['English', 'Swahili', 'Mandarin']
```

---

## 4. Design Philosophy & Aesthetic

Your portfolio uses a **Chinese minimalist aesthetic**, featuring:

- **Clean lines and ample negative space**
- **Light font weights** for elegance
- **Golden accent color** (#FFB400) for sophistication
- **Subtle borders** and understated design
- **Typography-focused** layout

### Key Design Elements

- Minimal dividers (thin horizontal lines)
- Dot accents (golden circles)
- Light, airy spacing
- Professional serif fonts for headings in some sections
- Subtle hover effects

### Maintaining the Aesthetic

When customizing:
- Keep descriptions concise
- Use clear, simple language
- Avoid cluttered layouts
- Let whitespace breathe
- Use the accent color sparingly for emphasis

---

## 5. Project Categories

Suggested categories for organization:

- Brand Identity
- Digital Design
- Print Design
- Social Media
- Web Design
- Illustration
- Marketing
- Packaging
- Photography
- Motion Graphics

You can use existing categories or create new ones—they'll automatically appear in the filter menu.

---

## 6. File Structure Reference

```
project/
├── components/
│   ├── portfolio-about.tsx       ← Edit: Bio, experience, skills
│   ├── portfolio-header.tsx      ← Navigation (minimal edits)
│   ├── portfolio-hero.tsx        ← Edit: Main headline/tagline
│   ├── portfolio-work.tsx        ← Displays projects (no edits needed)
│   ├── portfolio-services.tsx    ← Edit: Your services
│   ├── portfolio-contact.tsx     ← Edit: Contact info
│   └── portfolio-footer.tsx      ← Footer links
├── lib/
│   └── portfolio-data.ts         ← ⭐ ADD YOUR PROJECTS HERE
├── public/
│   ├── images/                   ← ⭐ ADD YOUR PROJECT IMAGES HERE
│   └── documents/                ← ⭐ ADD YOUR CV HERE
├── app/
│   ├── page.tsx                  ← Main page
│   ├── layout.tsx                ← Metadata, SEO
│   └── globals.css               ← Design tokens, colors
└── PORTFOLIO_SETUP.md            ← You are here
```

---

## 7. Troubleshooting

### Project images not showing?
- Check image path is correct: `/images/filename.jpg`
- Ensure image exists in `/public/images/`
- Verify filename spelling (case-sensitive)

### CV not downloading?
- Check file path in handleDownloadCV function
- Ensure CV file exists in `/public/documents/`
- Verify filename matches exactly

### Changes not appearing?
- Save the file
- Refresh your browser preview
- Clear browser cache if needed

### Text too long or crowded?
- Keep descriptions to 2-3 sentences
- Use line breaks for readability
- Embrace the minimalist aesthetic of simplicity

---

## 8. Next Steps

1. **Add your first project** – Follow steps 1-3 above
2. **Upload your CV** – Personalize the download
3. **Update your bio** – Share your story
4. **Customize colors** – Edit `app/globals.css` if desired
5. **Deploy** – Use the "Publish" button in v0 to share your portfolio

---

## Need Help?

- **Portfolio Data:** Check `lib/portfolio-data.ts` for detailed comments
- **Component Code:** Each component has comments explaining editable sections
- **Design System:** Color and style details in `app/globals.css`

## Tips for Best Results

✨ **Photography & Images**
- Use consistent lighting and style across projects
- Include before/before process, and after shots when possible
- Showcase final deliverables prominently

✨ **Writing**
- Be specific about your impact (e.g., "increased engagement by 15%")
- Use action verbs (designed, created, developed, led)
- Keep descriptions concise and compelling

✨ **Organization**
- Order projects by your most impressive work first
- Use consistent category names
- Keep tags relevant and scannable

✨ **Updates**
- Regularly add new projects as you complete them
- Update your CV annually
- Refresh case study descriptions seasonally

---

**Happy customizing! Your portfolio is now ready to showcase your design excellence. 🎨**
