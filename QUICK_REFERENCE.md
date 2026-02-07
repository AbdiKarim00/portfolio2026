# Quick Reference Card

**Print this page or bookmark it for easy access!**

---

## 🎯 The 3-Step Setup (5 minutes)

### ✅ Step 1: Add Project Image
```
Save to: /public/images/my-project.jpg
Size: 1200×800px (JPG format)
```

### ✅ Step 2: Add Project Data
```
File: lib/portfolio-data.ts
Find: const projects = [ ... ]
Add this:
{
  id: 2,
  title: 'Your Project Title',
  category: 'Brand Identity',
  description: 'One-line summary',
  image: '/images/my-project.jpg',
  details: 'Your detailed case study...',
  year: '2024',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### ✅ Step 3: Save
```
Ctrl+S (Windows) or Cmd+S (Mac)
Your portfolio updates automatically!
```

---

## 📁 Where to Edit Things

| What to Edit | File Path | Section |
|---|---|---|
| Add projects | `lib/portfolio-data.ts` | projects array |
| Edit bio | `components/portfolio-about.tsx` | line ~82 |
| Edit skills | `components/portfolio-about.tsx` | skills array |
| Edit experience | `components/portfolio-about.tsx` | experience array |
| Site title | `app/layout.tsx` | metadata.title |
| Upload CV | `/public/documents/` | CV PDF file |
| Upload images | `/public/images/` | Project images |
| Change colors | `app/globals.css` | CSS variables |

---

## 📥 How to Upload Your CV

```
1. Create folder: /public/documents/
2. Add your CV: your_name_cv.pdf
3. Edit: components/portfolio-about.tsx
4. Find: const cvPath = 
5. Change to: '/documents/your_name_cv.pdf'
```

---

## ✏️ Edit Your Bio

**File:** `components/portfolio-about.tsx`  
**Find:** "Background" section (around line 82)  
**Replace:** The paragraph with your story

```
Based in Nairobi, Kenya, I bring a unique perspective...
```

---

## 🛠️ Common Tasks

### Change Site Title
**File:** `app/layout.tsx`  
**Find:** `title: 'Alex Rivera – Senior Graphic Designer'`  
**Change to:** `title: 'Your Name – Senior Graphic Designer'`

### Reorder Projects
**File:** `lib/portfolio-data.ts`  
**Do:** Rearrange objects in projects array  
**First = appears first on website**

### Add New Skill
**File:** `components/portfolio-about.tsx`  
**Find:** `const skills = [`  
**Add:** `'Your New Skill',`

### Change a Project Category
**File:** `lib/portfolio-data.ts`  
**Find:** `category: 'Brand Identity',`  
**Change to:** `category: 'Your Category',`

---

## 🎨 Design Aesthetic

Your portfolio uses **Chinese Minimalist Design:**
- Clean lines and thin dividers
- Ample whitespace
- Light typography (elegant, not heavy)
- Golden accent color (#FFB400)
- Subtle borders and soft styling
- Typography-focused layout

---

## 🚨 Troubleshooting Quick Fixes

### Images Not Showing?
- ✅ Check path: `/images/filename.jpg`
- ✅ Ensure image in `/public/images/`
- ✅ Verify filename spelling (case-sensitive)

### CV Not Downloading?
- ✅ Check file in `/public/documents/`
- ✅ Verify path in handleDownloadCV function
- ✅ Filename must match exactly

### Changes Not Appearing?
- ✅ Save the file (Ctrl+S)
- ✅ Refresh browser
- ✅ Clear cache if needed

---

## 📊 Project Data Template

```typescript
{
  id: [number - increment from last],
  title: '[Your Project Title]',
  category: '[Brand Identity/Digital/Print/etc]',
  description: '[One-line description]',
  image: '/images/[your-image.jpg]',
  details: '[Detailed case study explaining the project, process, and results...]',
  year: '[2024]',
  tags: ['[Tag1]', '[Tag2]', '[Tag3]']
}
```

---

## 🏗️ File Structure

```
├── lib/
│   └── portfolio-data.ts ← ADD PROJECTS HERE
├── components/
│   └── portfolio-about.tsx ← EDIT BIO HERE
├── public/
│   ├── images/ ← UPLOAD PROJECT IMAGES
│   └── documents/ ← UPLOAD CV HERE
├── app/
│   ├── layout.tsx ← EDIT TITLE
│   └── globals.css ← CHANGE COLORS
└── (documentation files)
```

---

## 🎓 Top 3 Files to Know

1. **`lib/portfolio-data.ts`**
   - Where your projects live
   - Add/edit projects here
   - Most-edited file

2. **`components/portfolio-about.tsx`**
   - Your bio and skills
   - CV download button
   - Project setup guide

3. **`app/globals.css`**
   - Colors and design tokens
   - Change theme here
   - CSS variables defined

---

## 📚 Documentation Files

| File | Purpose | When to Read |
|---|---|---|
| README.md | Overview | First time |
| QUICK_START.md | 3-min setup | Get going fast |
| PORTFOLIO_SETUP.md | Detailed guide | Need thorough help |
| PROJECT_STRUCTURE.md | How it works | Understand architecture |
| EXAMPLES.md | Ready templates | Need examples |
| DOCUMENTATION_INDEX.md | Navigation | Find right docs |
| QUICK_REFERENCE.md | This file | Quick lookups |

---

## 💡 Pro Tips

✨ **Best practices:**
- Put your best work first (projects display top-down)
- Include metrics in descriptions ("increased by 15%")
- Use consistent image sizes (1200×800px)
- Update regularly with new projects
- Use JPG format for images (faster loading)

✨ **Writing tips:**
- Start descriptions with action verbs
- Keep case studies 2-3 sentences
- Show business impact, not just pretty pictures
- Use simple, clear language

✨ **Maintenance:**
- Save work frequently
- Test CV download after updating
- Check on mobile devices
- Update CV annually

---

## 🚀 Deployment

When ready to go live:
1. Review all content
2. Test CV download
3. Check on mobile
4. Click "Publish" button in v0
5. Share your portfolio URL!

---

## 🎯 Next Actions

**Today:**
- [ ] Read README.md (5 min)
- [ ] Read QUICK_START.md (3 min)
- [ ] Add your first project (5 min)

**This Week:**
- [ ] Upload your CV
- [ ] Update your bio
- [ ] Add 2-3 more projects
- [ ] Review on mobile

**Before Launch:**
- [ ] Proofread everything
- [ ] Test all functionality
- [ ] Check mobile display
- [ ] Deploy!

---

## ❓ Quick Q&A

**Q: Where do images go?**  
A: `/public/images/filename.jpg`

**Q: How do I add a project?**  
A: Edit `lib/portfolio-data.ts` and add object to projects array

**Q: Where's the CV button?**  
A: In the About section (right sidebar)

**Q: Can I hide a project?**  
A: Remove it from projects array in `lib/portfolio-data.ts`

**Q: How do I change colors?**  
A: Edit CSS variables in `app/globals.css`

**Q: What's the minimalist aesthetic?**  
A: Clean lines, whitespace, light typography, golden accents

**Q: Need more examples?**  
A: See `EXAMPLES.md`

**Q: Still confused?**  
A: See `DOCUMENTATION_INDEX.md` to find right guide

---

## 📞 Support Resources

- 📖 Full Setup: `PORTFOLIO_SETUP.md`
- 🏗️ Architecture: `PROJECT_STRUCTURE.md`
- 📋 Examples: `EXAMPLES.md`
- 🗺️ Navigation: `DOCUMENTATION_INDEX.md`
- 💬 Code Comments: Check files - they explain everything!

---

**Print this page or bookmark it for quick reference while editing! 🎨**

---

## Last Minute Checklist

Before launching:
- [ ] Site title updated with your name
- [ ] Bio/about section filled out
- [ ] At least 3 projects added
- [ ] CV uploaded and download tested
- [ ] Images all showing correctly
- [ ] Mobile layout looks good
- [ ] No typos in text
- [ ] All links working
- [ ] Ready to share!

**Your portfolio is ready to showcase your amazing work! 🚀**
