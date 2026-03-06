## Project 1 – Amoura Vision (Team Handoff)

### 1. What this project is

- **Concept**: **Amoura Vision** – a Computer Vision + ML startup concept for automated defect inspection on manufacturing lines.
- **Goal**: Build a **static marketing site** and deploy it **two ways**:
  - **Part 2**: AWS EC2 + Apache + Docker.
  - **Part 3**: AWS S3 static website hosting.

The site has 4 pages:
- `Home` – main landing page with a fake “model output” demo (drag-and-drop image).
- `About` – explains the CV/ML pipeline; includes a right-floating media block (CSS float requirement).
- `Contact` – contact form with client-side validation + localStorage.
- `Sign in` – **React-only** sign-in page with:
  - Login form (login + password).
  - “Create account” button that opens a second form **to the right**.
  - Clicking **Enter** on the create-account form closes it and pre-fills the login form using React state.

---

### 2. Code locations

#### Base repo (Part 2)

- **GitHub repo (Part 2)**  
  `https://github.com/sarmadhabib-SV/WebSystems`

Important paths in that repo:
- `Project 01 - WS/site/` — all site HTML/CSS/JS + React sign-in.
- `Project 01 - WS/DockerContainer/` — Dockerfile + Docker README.
- Helpful docs in `Project 01 - WS/`:
  - `PART2_EC2_APACHE_DOCKER_STEPS.md`
  - `PART3_S3_STATIC_HOSTING_STEPS.md`
  - `WIKI_OUTLINES_AND_CHECKLISTS.md`
  - `SPECIAL_ISSUES_DRAFT_CONTENT.md`
  - `ADVANTAGES_VS_DISADVANTAGES_EC2_VS_S3.md`

#### Part 3 repo

- **GitHub repo (Part 3)**  
  `https://github.com/sarmadhabib-SV/Project-1-Part-3-WS`

---

### 3. Local development

To run the site locally:

```bash
git clone https://github.com/sarmadhabib-SV/WebSystems.git
cd "WebSystems/Project 01 - WS/site"
python3 -m http.server 5173
```

Then open `http://localhost:5173/` in a browser.

---

### 4. Deployed URLs

#### Part 2 – EC2 + Docker

- **Current EC2 URL**:  
  `http://100.24.70.137/`

Notes:
- This points at an EC2 instance running the site inside a Docker container.
- If the instance is **stopped and started**, the public IP (and thus this URL) will change; you must update it in the submission and anywhere else it’s documented.

#### Part 3 – S3 static hosting

- **S3 website URL**:  
  `http://project1-ws-amouravision.s3-website-us-east-1.amazonaws.com/`

This bucket is configured for static hosting and serves the same site (no Docker).

---

### 5. AWS resources (for reference)

#### EC2 (Part 2)

- **Instance**: `Project 1 - WS`
- **Region**: `us-east-1 (N. Virginia)`
- **Type**: `t3.micro`
- **OS**: Ubuntu
- **Docker container** on EC2:
  - Image tag: `project1-part2:latest`
  - Container name: `project1-part2`
  - Port mapping: `80:80`

Useful EC2 commands (via EC2 Instance Connect):

```bash
sudo docker ps
sudo docker rm -f project1-part2 || true
cd "WebSystems/Project 01 - WS"
sudo docker run -d --name project1-part2 --restart unless-stopped -p 80:80 project1-part2:latest
```

Security group:
- Must allow **HTTP (port 80)** from `0.0.0.0/0` for grading.

#### S3 (Part 3)

- **Bucket name**: `project1-ws-amouravision`
- **Region**: `us-east-1`
- **Static website hosting**:
  - Enabled
  - Index document: `index.html`
- **Bucket policy** (public read):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::project1-ws-amouravision/*"
    }
  ]
}
```

---

### 6. Remaining work (team tasks)

#### A. YouTube videos

- **Part 2 (EC2 + Docker)** video should show:
  - EC2 instance details (name, public IP, region, security group rules).
  - Docker installed and working (`docker --version`).
  - Building the image from `DockerContainer/Dockerfile` on EC2.
  - Running the container and `sudo docker ps` with `0.0.0.0:80->80/tcp`.
  - Browser demo at `http://<EC2 IP>/`:
    - Responsive navbar (collapse on mobile width).
    - Home page drag-and-drop image “model output” demo.
    - Contact form validation + local message save.
    - React Sign-in page:
      - Create-account form appears to the **right**.
      - Clicking **Enter** closes that form and pre-fills login + password.

- **Part 3 (S3 static hosting)** video should show:
  - Creating the S3 bucket and turning off “Block all public access”.
  - Uploading `index.html`, `about.html`, `contact.html`, `signin.html`, and `css/`, `js/`, `assets/`.
  - Enabling static website hosting (`index.html`).
  - Adding the public-read bucket policy.
  - Opening the S3 website endpoint and walking through the same pages/interactions.

#### B. GitHub Wikis

Use `WIKI_OUTLINES_AND_CHECKLISTS.md` as a guide.

**Part 2 repo wiki (`WebSystems`)** — create pages with these **exact names**:
- `Special Issues`
  - Use and lightly edit the content in `SPECIAL_ISSUES_DRAFT_CONTENT.md`.
  - Export to PDF if the professor wants a PDF uploaded.
- `YouTube Link`
  - Paste the Part 2 YouTube URL.
  - Add 1–2 bullets describing the video contents.
- `Docker Creation`
  - Summarize what the Dockerfile does.
  - Include the key commands used to build and run on EC2.
  - Add screenshots: `docker build`, `docker ps`, browser hitting `http://<EC2 IP>/`.

**Part 3 repo wiki (`Project 1 Part 3`)** — pages:
- `YouTube Link`
  - Paste the Part 3 YouTube URL.
- `S3 Bucket Setup`
  - Step-by-step with screenshots:
    - Bucket creation (name, region, public access).
    - Objects list showing `index.html`, other pages, and asset folders.
    - Static website hosting config with endpoint.
    - Bucket policy JSON.
    - Browser hitting the S3 website endpoint.

#### C. Screenshots checklist

**Part 2 (EC2 + Docker)** screenshots:
- EC2 instance summary showing:
  - Instance ID and **current** public IPv4.
- Security group inbound rules (HTTP 80 from 0.0.0.0/0).
- Terminal with `sudo docker ps` showing `project1-part2` and `0.0.0.0:80->80`.
- Browser:
  - Home page at `http://<EC2 IP>/` with URL bar visible.
  - Mobile-width view with collapsed navbar open.
  - Home demo after an image upload (show predictions).
  - Contact page after a successful submit message.
  - Sign-in page:
    - With create-account panel visible on the right.
    - After pressing Enter, with login form pre-filled.

**Part 3 (S3)** screenshots:
- Bucket object listing with `index.html`, `about.html`, `contact.html`, `signin.html`, `css/`, `js/`, `assets/`.
- Static website hosting panel with endpoint URL.
- Bucket policy editor showing the JSON.
- Browser with S3 website endpoint open and URL visible.

---

### 7. Canvas / final write‑ups

When filling out Canvas:

- **Deployed website URLs**
  - Part 2 (EC2): `http://100.24.70.137/` (or the latest IP if it changes).
  - Part 3 (S3): `http://project1-ws-amouravision.s3-website-us-east-1.amazonaws.com/`

- **GitHub repos**
  - Part 2: `https://github.com/sarmadhabib-SV/WebSystems`
  - Part 3: `https://github.com/sarmadhabib-SV/Project-1-Part-3-WS`

- **Advantages vs disadvantages (talking points)**
  - Use `ADVANTAGES_VS_DISADVANTAGES_EC2_VS_S3.md` to answer the “EC2+Apache+Docker vs S3 hosting” question in 1–2 paragraphs.

---

### 8. Short project summary (copy/paste)

> For Project 1 we built **Amoura Vision**, a static marketing site for a fictional Computer Vision + ML startup that automatically detects manufacturing defects from camera images. The site includes a responsive Bootstrap layout, a front‑end “model output” demo, a contact form with client‑side validation, and a React-based sign‑in page with a dynamic create-account flow. We deployed the same site in two ways: first on **EC2** using **Apache inside a Docker container**, and second via **AWS S3 static website hosting**, documenting both approaches with GitHub wikis, screenshots, and YouTube walkthroughs.

