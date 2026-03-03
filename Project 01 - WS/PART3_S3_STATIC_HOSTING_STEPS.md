## Part 3 (S3 static website hosting) — exact steps

These steps assume your site files are in the `site/` folder and you’ll put them in a separate GitHub repo named **`Project 1 Part 3`**.

---

### A) Create the S3 bucket

1) AWS Console → **S3** → **Create bucket**
2) Bucket name: pick something globally unique, e.g. `project1-amoura-<yourname>-2026`
3) Region: choose your lab region (keep it consistent)
4) **Uncheck** “Block all public access” (required for public website)
   - Acknowledge the warning
5) Create bucket

**Screenshot checklist**: bucket creation screen showing public access settings, bucket created.

---

### B) Upload site content

1) Open the bucket → **Upload**
2) Upload the *contents* of `site/`:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `signin.html`
   - `css/`, `js/`, `assets/`
3) Upload.

**Screenshot checklist**: S3 console showing uploaded objects list.

---

### C) Enable Static website hosting

1) Bucket → **Properties**
2) Scroll to **Static website hosting**
3) Enable
4) Hosting type: **Host a static website**
5) Index document: `index.html`
6) Error document: `index.html` (optional but helpful)
7) Save changes.

Copy the **Bucket website endpoint** URL.

**Screenshot checklist**: Static website hosting panel with endpoint visible.

---

### D) Make the bucket objects publicly readable (bucket policy)

1) Bucket → **Permissions**
2) Scroll to **Bucket policy** → Edit, paste this (replace BUCKET_NAME):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
```

3) Save changes.

**Screenshot checklist**: bucket policy editor showing the policy.

---

### E) Test the S3 site

Open the **website endpoint** URL and click through all pages.

Verify:
- Home page loads styles and images
- Navbar collapses on mobile width (Bootstrap responsive interaction)
- Home “demo” works (drag/drop image)
- React sign-in works (create-account appears right, enter fills login/password)

**Screenshot checklist**: browser with the website endpoint visible + at least one page shown.

---

### F) Cost notes (talking points for wiki/video)

- S3 charges for:
  - Storage (GB-month)
  - Requests (GET/PUT)
  - Data transfer out to the internet
- For a small static website with light traffic, costs are usually very low.
- If you use CloudFront (optional), you add CDN request/transfer costs but often improve performance.

