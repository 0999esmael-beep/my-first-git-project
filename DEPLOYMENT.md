# HUSUMS Website Deployment Guide

## Quick Deploy Options

### 🚀 Option 1: Netlify Drop (Easiest - 2 minutes)

1. Visit [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio` folder onto the page
3. Get your live link instantly!
4. Optional: Sign up to claim your site and customize the URL

**Your site will be live at:** `random-name-123.netlify.app`

---

### 🌐 Option 2: GitHub Pages (Free Forever)

1. **Create GitHub Account:** [github.com/signup](https://github.com/signup)

2. **Create New Repository:**
   - Name: `husums-voting`
   - Public repository
   - Don't initialize with README

3. **Push Your Code:**
   ```bash
   cd portfolio
   git add .
   git commit -m "Deploy HUSUMS Voting Website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/husums-voting.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Source: Deploy from branch `main` / `root`
   - Save

5. **Your site will be live at:**
   `https://YOUR-USERNAME.github.io/husums-voting/`

---

### ⚡ Option 3: Vercel (Fast & Professional)

1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

**Your site will be live at:** `husums-voting.vercel.app`

---

### 🎯 Option 4: Netlify with Git (Recommended for Updates)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd portfolio
   netlify deploy --prod
   ```

4. Follow the prompts and get your live URL!

---

## Custom Domain (Optional)

After deploying, you can add a custom domain like `husums.com`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your hosting dashboard (Netlify/Vercel/GitHub):
   - Go to Domain Settings
   - Add custom domain
   - Update DNS records as instructed

---

## Before Deploying - Checklist

✅ Save your profile image as `images/profile.jpg`
✅ Update contact information if needed
✅ Test all links locally
✅ Check mobile responsiveness
✅ Update candidate information in elections folder

---

## Updating Your Site

### For Netlify Drop:
- Just drag and drop the folder again

### For GitHub Pages/Vercel:
```bash
git add .
git commit -m "Update website"
git push
```

Your site will auto-update!

---

## Need Help?

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

---

**Developed by Esmael Amano**
© 2024 HUSUMS - All Rights Reserved
