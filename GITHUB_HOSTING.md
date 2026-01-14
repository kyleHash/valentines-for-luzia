# GitHub Hosting Guide 🚀

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Fill in the details:
   - **Repository name**: `valentines-for-luzia` (or any name you prefer)
   - **Description**: "A personalized Valentine's Day puzzle for Luzia 💕"
   - **Visibility**: Choose **Private** (so only you can see it until you're ready!)
   - **DO NOT** check "Initialize with README" (we already have one)
4. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/valentines-for-luzia.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username!

## Step 3: Enable GitHub Pages

1. In your GitHub repository, click **Settings** (top menu)
2. Scroll down to **Pages** (in the left sidebar under "Code and automation")
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` and `/ (root)`
   - Click **Save**
4. Wait 1-2 minutes for deployment

## Step 4: Get Your Live URL

After deployment completes:
- GitHub will show you the URL at the top of the Pages settings
- It will be: `https://YOUR-USERNAME.github.io/valentines-for-luzia/`
- You can now share this URL with Luzia!

## Step 5: Optional - Custom Domain (Advanced)

If you want a custom URL like `luzia.yourdomain.com`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In GitHub Pages settings, add your custom domain
3. In your domain provider's DNS settings, add:
   - CNAME record pointing to `YOUR-USERNAME.github.io`
4. Wait for DNS propagation (5-30 minutes)

## Updating the Site

If you make changes later:

```bash
git add .
git commit -m "Update puzzles"
git push
```

GitHub Pages will automatically update in 1-2 minutes!

## Privacy Settings

### Keep it Private Until Ready:
- Your repository is private (if you selected that)
- Only people with the GitHub Pages URL can access the site
- They won't see the repository code unless you make it public

### When Ready to Share:
1. Just send Luzia the GitHub Pages URL
2. She can access it in any browser
3. No GitHub account needed!

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for deployment status
- Make sure `index.html` is in the root directory

### Changes not showing?
- GitHub Pages can take 1-2 minutes to update
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache

### 404 Error?
- Check that your repository name matches the URL
- Ensure GitHub Pages is pointing to `main` branch and `/ (root)`

## Quick Commands Reference

```bash
# Initialize repo (already done!)
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main

# Make updates later
git add .
git commit -m "Your update message"
git push
```

## Security Note

The PERSONALIZATION_SUMMARY.md and QUICK_START.txt files are excluded from GitHub via .gitignore, so they won't be visible in the public repository. These are just for your local reference!

---

**That's it! Your romantic puzzle site will be live on the internet! 💕✨**

The URL will work on any device - desktop, mobile, tablet - perfect for Luzia to solve on her phone! 📱
