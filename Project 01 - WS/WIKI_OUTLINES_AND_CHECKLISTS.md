## Wiki outlines (copy/paste templates) + screenshot/video checklists

---

### Repo: `Project 1 Part2` (EC2 + Apache + Docker)

#### Wiki page: **Special Issues** (PDF upload or embedded content)

- **Special Issue 1**: EC2 stop → data loss, “freeze” AMI to S3, costs
  - What data can be lost
  - How to create an AMI and store snapshot in S3-backed EBS snapshots
  - How to restore / duplicate instance
  - Cost notes
- **Special Issue 2**: reboot/stop changes IP, stable URL options + fees, learner lab note
  - Elastic IP
  - Route 53 + DNS
  - Learner lab constraints (if applicable)

#### Wiki page: **YouTube Link**

- Paste the full YouTube URL
- 1–2 bullets describing what the video shows (Docker build, deployment, URL, walkthrough)

#### Wiki page: **Docker Creation**

Suggested sections:
- Goal (Apache + static site in container)
- Files included:
  - `DockerContainer/Dockerfile`
  - `site/` (HTML/CSS/JS + React sign-in)
- Build steps (copy terminal commands)
- Run steps (port mapping, container name)
- Proof: screenshots of `docker ps` and the public URL in browser

##### Part 2 screenshot checklist

- EC2 instance summary (instance ID, public IPv4)
- Security group inbound rules (SSH 22, HTTP 80)
- SSH terminal session
- Docker install verification (`docker --version`)
- Repo on EC2 (`ls` showing `DockerContainer/` and `site/`)
- Docker build finished (last lines)
- `docker ps` showing container running
- Browser with `http://<EC2 IP>/` visible
- Mobile width screenshot showing collapsed navbar toggle
- Demo upload results on Home page
- React Sign-in: create-account panel on right + enter-prefill behavior

##### Part 2 video checklist

- Show EC2 URL
- Show Docker build + run
- Walk through all pages and interactions

---

### Repo: `Project 1 Part 3` (S3 static hosting)

#### Wiki page: **YouTube Link**

- Paste the full YouTube URL
- Notes: show endpoint, bucket settings, uploads, and site walkthrough

#### Wiki page: **S3 Bucket Setup**

Suggested sections:
- Bucket creation settings (region, public access)
- Upload steps (upload `site/` contents)
- Enable static website hosting (index document)
- Bucket policy for public read
- Final endpoint + screenshots
- Cost discussion (S3 storage + requests + data transfer)

##### Part 3 screenshot checklist

- Bucket created (name + region)
- Public access settings (block public access disabled)
- Objects uploaded list
- Static website hosting enabled + endpoint visible
- Bucket policy JSON
- Browser showing the S3 endpoint and site pages

##### Part 3 video checklist

- Show bucket configuration steps in console
- Show endpoint and full site walkthrough

