# Abdikarim Singir Portfolio

Welcome! This repository contains the professional portfolio website for Abdikarim Singir, a senior graphic designer. It is configured for local development and production deployment.

---

## ✨ What You Have

A beautiful, professional portfolio featuring:

- **Clean Minimalist Design** - Chinese aesthetic with elegant lines and ample whitespace
- **Project Showcase** - Grid display with filtering by category
- **About Me Section** - Your story, experience, skills, and languages
- **CV Download** - Prominent call-to-action for visitors to download your CV
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Golden Accent Color** - Professional touches of #FFB400 for visual hierarchy
- **Fast & Lightweight** - Optimized for performance

---

## 🚀 Get Started in 3 Steps

### Step 1: Add Your First Project (2 minutes)
1. Save a project image: `/public/images/my-project.jpg` (1200×800px)
2. Open: `lib/portfolio-data.ts`
3. Add your project to the array
4. **Done!** It appears instantly

👉 See `QUICK_START.md` for the exact code template

### Step 2: Upload Your CV (1 minute)
1. Create folder: `/public/documents/`
2. Add your CV: `your_name_cv.pdf`
3. Update path in `components/portfolio-about.tsx`
4. **Done!** Visitors can download it

### Step 3: Personalize Your Bio (2 minutes)
1. Open: `components/portfolio-about.tsx`
2. Update the "Background" section with your story
3. Edit skills and experience arrays
4. **Done!** Your personality shines through

---

## 📚 Documentation Files

| Document | What It Contains | Read When |
|---|---|---|
| **QUICK_START.md** | 3-minute setup with copy-paste templates | You want to get started NOW |
| **PORTFOLIO_SETUP.md** | Comprehensive setup and customization guide | You want detailed instructions |
| **PROJECT_STRUCTURE.md** | How components and files work together | You want to understand the architecture |
| **README.md** | This file - overview and navigation | You're reading it right now |

---

## 🎨 Customization Overview

### Easy Edits (No Coding)
- ✅ Add projects
- ✅ Upload CV
- ✅ Update bio and skills
- ✅ Change experience details
- ✅ Add new categories

### Moderate Edits (Copy-Paste)
- ✅ Change site title/description
- ✅ Update header navigation
- ✅ Modify services offered
- ✅ Update contact information

### Advanced (Basic CSS Knowledge)
- ✅ Change colors and theme
- ✅ Adjust spacing and layout
- ✅ Customize fonts

---

## 📁 Key Files to Know

### Your Project Data
**`lib/portfolio-data.ts`** - Where all your projects live
- Add/edit/remove projects here
- Update CV configuration
- Comes with detailed setup comments

### Your About Section ⭐
**`components/portfolio-about.tsx`** - Your professional story
- Personal background
- Work experience timeline
- Skills and languages
- CV download button
- Project upload guidance for future

### Your Portfolio Display
**`components/portfolio-work.tsx`** - Shows your projects
- Auto-generates from project data
- Creates category filters automatically
- No edits needed (data-driven)

### Images and Documents
**`/public/images/`** - Your project images
**`/public/documents/`** - Your CV file

---

## 🎯 Common Tasks

### Add a Project
1. Image to: `/public/images/name.jpg`
2. Edit: `lib/portfolio-data.ts`
3. Add object to projects array
4. See `QUICK_START.md` for template

### Update Your Bio
1. Edit: `components/portfolio-about.tsx`
2. Find: "Background" section (~line 82)
3. Replace paragraph with your story

### Upload Your CV
1. Create: `/public/documents/`
2. Add: `your_name_cv.pdf`
3. Update path in: `components/portfolio-about.tsx`

### Change Site Title
1. Edit: `app/layout.tsx`
2. Find: `title: 'Alex Rivera – Senior Graphic Designer'`
3. Change to your name

### Reorder Projects
1. Edit: `lib/portfolio-data.ts`
2. Reorder objects in projects array
3. First = appears first on site

---

## 🎨 Design Philosophy

Your portfolio uses a **Chinese minimalist aesthetic**:

- **Clean lines** - Thin dividers, subtle borders
- **Ample whitespace** - Breathing room for content
- **Light typography** - Elegant font weights
- **Understated elegance** - Golden accents only where needed
- **Strategic focus** - Your work is the star

This design philosophy reflects professional sophistication and lets your design work shine.

---

## 📊 About Section Details

The "About Me" section includes everything your visitors need to know:

### Content Areas
1. **Introduction** - Who you are and your philosophy
2. **Background** - Your story and approach to design
3. **Experience** - Timeline of your professional roles
4. **Skills** - Your core competencies
5. **Languages** - Your linguistic abilities (Mandarin emphasized)
6. **CV Download** - Prominent, clear call-to-action
7. **Project Guide** - Instructions for future portfolio updates

### Design Features
- Minimalist layout with strategic whitespace
- Golden accent dots for visual interest
- Clean typography for readability
- Responsive design works on all devices
- CV card stands out for easy access

---

## 🚀 Deployment

### Ready to Share Your Portfolio?

1. **Review your content**
   - Check all projects display correctly
   - Verify CV downloads properly
   - Proofread all text

2. **Deploy with v0**
   - Click "Publish" button in v0
   - Get your live URL
   - Share with clients and recruiters

3. **Keep it Updated**
   - Add new projects regularly
   - Update CV annually
   - Refresh case study descriptions

---

## 💡 Pro Tips

### For Best Results:
- **Lead with your best work** - Reorder projects strategically
- **Include metrics** - "Increased engagement by 15%"
- **Use high-quality images** - Professional photography makes impact
- **Tell the story** - Explain your process, not just the result
- **Update regularly** - Fresh work shows you're active
- **Optimize images** - Use JPG format (smaller file size)
- **Keep bio concise** - 2-3 strong paragraphs max

### Project Images:
- Ideal size: 1200×800px (16:9 aspect ratio)
- Use consistent style/lighting across projects
- Show final result prominently
- Include before/after when relevant
- Format: JPG recommended (fastest loading)

### Writing Tips:
- Start with action verbs: "Designed," "Created," "Developed"
- Be specific about impact
- Keep descriptions 2-3 sentences
- Use simple, clear language
- Avoid jargon

---

## 🔧 Troubleshooting

### Images Not Showing?
- Check path format: `/images/filename.jpg`
- Ensure image exists in `/public/images/`
- Verify filename spelling (case-sensitive)

### CV Not Downloading?
- Confirm file in `/public/documents/`
- Check path is correct in code
- Verify filename matches

### Changes Not Appearing?
- Save your file
- Refresh browser page
- Clear browser cache if needed

### Questions About Edits?
- Check file comments - they explain what to edit
- See `PORTFOLIO_SETUP.md` for detailed steps
- Refer to `PROJECT_STRUCTURE.md` for architecture

---

## 📞 Need Help?

1. **Getting Started?** → Read `QUICK_START.md`
2. **Detailed Instructions?** → See `PORTFOLIO_SETUP.md`
3. **Understanding Architecture?** → Check `PROJECT_STRUCTURE.md`
4. **Specific Question?** → Look for code comments in files
5. **Still Stuck?** → Review the examples in `lib/portfolio-data.ts`

---

## 📋 Your Personalization Checklist

- [ ] Added at least one project with image
- [ ] Updated your bio/background
- [ ] Added your experience
- [ ] Listed your skills
- [ ] Uploaded your CV
- [ ] Updated site title with your name
- [ ] Reviewed all text for accuracy
- [ ] Tested CV download works
- [ ] Reviewed on mobile device
- [ ] Ready to deploy!

---

## 🎉 You're All Set!

Your professional portfolio is now ready to showcase your design expertise to potential clients and collaborators. 

**Next Steps:**
1. Customize the content with your information
2. Add your best projects
3. Upload your CV
4. Deploy and share your portfolio

Your portfolio is a living document—keep it updated with your latest work and accomplishments.

---

**Built with care for senior graphic designers. Let your work speak for itself. 🎨**

---

## Quick Links

- 📖 Setup Guide → `PORTFOLIO_SETUP.md`
- ⚡ Quick Start → `QUICK_START.md`
- 🏗️ Architecture → `PROJECT_STRUCTURE.md`
- 💾 Project Data → `lib/portfolio-data.ts`
- ✏️ Edit About → `components/portfolio-about.tsx`
- 🖼️ Images Folder → `/public/images/`
- 📄 CV Folder → `/public/documents/`
