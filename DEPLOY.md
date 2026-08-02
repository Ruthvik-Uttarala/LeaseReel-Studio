# Cloudflare Pages Deployment

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages**.
5. Choose **Connect to Git** and select the GitHub repository.
6. Set project name to `leasereel-studio`.
7. Set build command to `npm run build`.
8. Set output directory to `dist`.
9. Deploy and confirm the Pages URL is `https://leasereel-studio.pages.dev`.
10. In the Cloudflare Pages project, add the custom domain `www.leasereelstudio.com`.
11. Wait until Cloudflare shows the custom domain is ready for DNS.
12. In Namecheap DNS, edit only the existing parking-page `www` record:
    - Type: `CNAME`
    - Host: `www`
    - Value: `leasereel-studio.pages.dev`
    - TTL: `Automatic`
13. Preserve all Zoho mail records. Do not delete or replace MX, SPF, DKIM, DMARC, or Zoho verification records.
14. Keep the apex/root redirect from `leasereelstudio.com` to `https://www.leasereelstudio.com`.
15. Ensure the apex redirect uses HTTPS.
16. After DNS propagates, verify `https://www.leasereelstudio.com` loads over HTTPS.
17. Test desktop and mobile:
    - Hero CTAs
    - Demo tabs
    - Mobile menu
    - FAQ accordion
    - Mailto links
    - Footer policy modals
18. Roll back from Cloudflare Pages by opening **Deployments**, selecting the last known good deployment, and choosing **Rollback to this deployment**.

Do not move nameservers to Cloudflare for this launch. Namecheap can remain the DNS provider while the `www` subdomain points to Cloudflare Pages by CNAME.
