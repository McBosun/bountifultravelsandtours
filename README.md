# Bountiful Travels and Tours website

Static website (HTML, CSS, JavaScript). No build step needed.

## Host on GitHub Pages (free, no domain needed)
1. On github.com create a new Public repository (for example "bountiful-travels").
2. Click "Add file", then "Upload files", and upload everything in this folder, keeping the css, js and assets folders. Commit.
3. Go to Settings, then Pages. Under "Build and deployment" choose "Deploy from a branch", branch "main", folder "/ (root)". Save.
4. After a minute your site is live at https://YOUR-GITHUB-USERNAME.github.io/bountiful-travels/

## Later, when you buy a domain
1. Buy it from a domain registrar and check it is available before printing it anywhere.
2. In your repository, add a file named CNAME containing only the domain, for example www.yourdomain.com
3. Settings, Pages, Custom domain: enter the same domain, then tick "Enforce HTTPS".
4. At the registrar add a CNAME record: Host "www", value "YOUR-GITHUB-USERNAME.github.io".
   For the root domain (without www) add four A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
Check GitHub's current Pages docs if anything has changed.

## Edit your content
- Tours and prices: the T array near the top of js/main.js
- Phone, email, WhatsApp: search for 2349012279546 and info@bountifultravels.com
- Colors: the variables at the top of css/style.css
