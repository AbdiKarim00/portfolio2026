# Quick Start: Add Your First Project in 3 Minutes

## The Fastest Way to Customize Your Portfolio

### ⚡ Do This Right Now

#### 1. Add One Project Image
- Save your design image to `/public/images/my-project.jpg`
- Size: 1200×800px (JPG format works best)

#### 2. Copy and Paste This Code
Open file: `lib/portfolio-data.ts`

Find this section (around line 40):
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Identity – Mecha Travel Group',
    // ... existing project ...
  },
  // ← ADD YOUR PROJECT HERE
]
```

Paste this template AFTER the first project (before the closing `]`):
```typescript
,
{
  id: 2,
  title: 'YOUR PROJECT TITLE',
  category: 'Brand Identity',
  description: 'Brief one-line description of your project',
  image: '/images/my-project.jpg',
  details: 'Write a detailed case study here. Explain what you designed, who it was for, what was the challenge, and what was the result. Include metrics if you have them.',
  year: '2024',
  tags: ['Tag 1', 'Tag 2', 'Tag 3']
}
```

#### 3. Save and Done! ✓
- Press `Ctrl+S` (or `Cmd+S`)
- Your project appears in the portfolio instantly

---

## Common Customizations (Copy-Paste Ready)

### Update Your Name & Title
File: `app/layout.tsx`

Find:
```typescript
title: 'Alex Rivera – Senior Graphic Designer',
```

Change to:
```typescript
title: 'Your Name – Senior Graphic Designer',
```

### Update Your Bio
File: `components/portfolio-about.tsx`

Find (around line 82):
```typescript
Based in Nairobi, Kenya, I bring a unique perspective to design...
```

Replace the entire paragraph with your story.

### Add Your CV
1. Create folder: `/public/documents/`
2. Save your CV here: `/public/documents/YOUR_NAME_CV.pdf`
3. File: `components/portfolio-about.tsx`
4. Find (around line 49):
```typescript
const cvPath = '/documents/Abdikarim_Singir_CV.pdf'
```
5. Change to:
```typescript
const cvPath = '/documents/YOUR_NAME_CV.pdf'
```

### Update Your Skills
File: `components/portfolio-about.tsx`

Find (around line 31):
```typescript
const skills = [
  'Brand Identity',
  'Logo Design',
  // ... change these ...
]
```

Replace with your skills:
```typescript
const skills = [
  'Your Skill 1',
  'Your Skill 2',
  'Your Skill 3',
]
```

---

## File Locations Cheat Sheet

| What to Edit | File Path | What to Change |
|---|---|---|
| Add projects | `lib/portfolio-data.ts` | projects array |
| Edit bio | `components/portfolio-about.tsx` | Background paragraph |
| Edit experience | `components/portfolio-about.tsx` | experience array |
| Edit skills | `components/portfolio-about.tsx` | skills array |
| Change header title | `app/layout.tsx` | metadata title |
| Upload images | `/public/images/` | Put JPG/PNG files here |
| Upload CV | `/public/documents/` | Put PDF file here |
| Change colors | `app/globals.css` | CSS variables |

---

## Why This Works

✨ **No Coding Required**
- Just copy-paste the template
- Follow the field names exactly
- Save the file

📱 **Instant Preview**
- Changes appear automatically
- No rebuild or refresh needed
- See updates live

🎨 **Minimalist Design**
- Chinese minimalist aesthetic
- Clean, elegant layout
- Your work speaks for itself

---

## Pro Tips

💡 **Best Project Order**
- Put your best work first
- Most recent projects second
- Organize by complexity

💡 **Strong Descriptions**
- Start with a verb: "Designed," "Created," "Developed"
- Include numbers: "15% increase," "50+ clients"
- Show the business impact

💡 **Categories Matter**
- Use consistent category names
- They auto-generate filter buttons
- Examples: Brand Identity, Digital Design, Print

---

## Still Need Help?

📖 **Full Guide:** See `PORTFOLIO_SETUP.md`

🔍 **Code Comments:** Look for `// EDIT THIS` in files

💬 **Need Support:** Check the file comments for detailed explanations

---

**You're All Set! 🚀**

Your portfolio is now ready. Just add your projects and share it with the world.
