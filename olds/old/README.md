# Specify your domain and website name

Search for the term "Astreak" and replace it with the appropriate value, such as your domain name, company name, meta description, or Firebase project name:
- /README.md
- /package.json
- /public/index.html
- /public/email.html
- /public/done.html
- /public/robots.txt
- /public/sitemap.xml


# Editing the template

Replace your logo: /public/static/images/logo.png
Replace your favicon: /public/static/images/favicon.ico

Search for the terms "pixel-1x1.png" and "pixel-16x9.png" (in /public/index.html), then replace with your own custom images.

Replace the placeholder text (latin) with text specific to your landing page.

Search for and replace anchor tags (href="./index.html") with desired URLs.

Replace the text on /public/done.html with the message you want people to see after they've submitted their email address.

Add custom CSS to /public/static/styles/theme.css


# Deploying to Firebase

Set up static web hosting:
- Go to https://firebase.com
- Create a new project
- Name your project www-Astreak-com
- Add a custom domain name to your project

In a terminal window, execute:
`cd ~/Downloads/template-landing-static`
`npm install`
`./node_modules/firebase-tools/lib/bin/firebase.js login`
`./node_modules/firebase-tools/lib/bin/firebase.js projects:list`
`./node_modules/firebase-tools/lib/bin/firebase.js use www-Astreak-com`
`./node_modules/firebase-tools/lib/bin/firebase.js init`
`./node_modules/firebase-tools/lib/bin/firebase.js deploy`


# To enable no-JS analytics (cloud logging)

https://console.firebase.google.com/u/0/project/www-Astreak-com/settings/integrations?hl=en-US

https://support.google.com/firebase/answer/9748636#zippy=%2Cin-this-article

https://firebase.google.com/docs/hosting/web-request-logs-and-metrics?hl=en
