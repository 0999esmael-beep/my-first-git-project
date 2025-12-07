# 🚀 Deploy HUSUMS Website to GitHub Pages

## Step-by-Step Guide to Get Your Live Link

### Part 1: Create GitHub Account (If you don't have one)

1. Go to: https://github.com/signup
2. Enter your email, create password, choose username
3. Verify your email
4. Sign in to GitHub

---

### Part 2: Create a New Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `husums-voting` (or any name you like)
3. **Description:** "HUSUMS - Haramaya University Students' Union Voting Website"
4. **Make it Public** (so it can be hosted for free)
5. **DON'T check** "Add a README file"
6. Click **"Create repository"**

---

### Part 3: Upload Your Files to GitHub

#### Option A: Using GitHub Website (Easiest - No Terminal!)

1. **After creating repository**, you'll see an empty page
2. Click **"uploading an existing file"** link
3. **Drag and drop ALL files** from your `portfolio` folder:
   - index.html
   - styles.css
   - script.js
   - images folder
   - elections folder
   - All other files
4. **Scroll down** and click **"Commit changes"**
5. Wait for upload to complete

#### Option B: Using Git Commands (Terminal)

Open your terminal and run these commands:

```bash
cd D:\web\portfolio

git init
git add .
git commit -m "Initial commit - HUSUMS Voting Website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/husums-voting.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Part 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes

---

### Part 5: Get Your Live Link! 🎉

1. **Refresh the Pages settings page**
2. You'll see a message: **"Your site is live at:"**
3. Your link will be: `https://YOUR-USERNAME.github.io/husums-voting/`

**Example:**
- If your username is `esmaelamano`
- Your link: `https://esmaelamano.github.io/husums-voting/`

---

## 🎯 Quick Summary

1. ✅ Create GitHub account
2. ✅ Create new repository named `husums-voting`
3. ✅ Upload all files from portfolio folder
4. ✅ Enable GitHub Pages in Settings
5. ✅ Get your live link!

---

## 📱 Share Your Link

Once deployed, your website will be live at:
**`https://YOUR-USERNAME.github.io/husums-voting/`**

You can share this link anywhere:
- Social media
- Email
- WhatsApp
- Telegram
- Put it on your resume

---

## 🔄 How to Update Your Website Later

### Using GitHub Website:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Your site updates automatically in 1-2 minutes!

### Using Git Commands:
```bash
cd D:\web\portfolio
git add .
git commit -m "Update website"
git push
```

---

## ⚡ Alternative: Deploy to Netlify (Even Easier!)

If GitHub seems complicated, use Netlify:

1. Go to: https://app.netlify.com/drop
2. Drag your `portfolio` folder
3. Get instant link: `https://your-site.netlify.app`

**Netlify is faster but GitHub is more professional for portfolios!**

---

## 🆘 Troubleshooting

### Problem: "404 - Page not found"
- Make sure `index.html` is in the root of your repository
- Wait 2-3 minutes after enabling Pages

### Problem: Images not showing
- Check that images folder is uploaded
- Verify image filename matches (case-sensitive)

### Problem: Can't push to GitHub
- Make sure you're logged in
- Check your repository URL is correct
- Try using GitHub website upload instead

---

## 📞 Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Check GitHub Pages documentation: https://pages.github.com
3. Or use Netlify Drop instead (simpler!)

---

**Your website will be live at:**
`https://YOUR-USERNAME.github.io/husums-voting/`

**Developed by Esmael Amano**

Good luck! 🚀
