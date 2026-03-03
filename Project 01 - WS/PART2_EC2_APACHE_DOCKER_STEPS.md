## Part 2 (EC2 + Apache + Docker) — exact steps

These steps assume:
- **Ubuntu 24.04 LTS** EC2 (free-tier eligible)
- Your static site files are in the `site/` folder (copy them into your **GitHub repo named `Project 1 Part2`**)

---

### A) Create EC2 instance (Ubuntu)

1) AWS Console → **EC2** → **Instances** → **Launch instances**
2) Name: `project1-part2`
3) AMI: **Ubuntu Server 24.04 LTS**
4) Instance type: `t2.micro` (or free-tier equivalent)
5) Key pair: create/select one you can download (`.pem`)
6) Network settings:
   - Allow **SSH (22)** from **My IP**
   - Allow **HTTP (80)** from **Anywhere**
7) Launch.

**Screenshot checklist**: instance summary, security group inbound rules.

---

### B) SSH into EC2

On your laptop (Mac):

```bash
chmod 400 path/to/key.pem
ssh -i path/to/key.pem ubuntu@<EC2_PUBLIC_IPV4_OR_DNS>
```

**Screenshot checklist**: terminal showing successful login.

---

### C) Option 1: Install Apache directly on EC2 (simple non-Docker deploy)

1) Update packages:

```bash
sudo apt update
sudo apt -y upgrade
```

2) Install Apache:

```bash
sudo apt -y install apache2
sudo systemctl enable --now apache2
```

3) Upload your site to EC2 (from your laptop):

```bash
scp -i path/to/key.pem -r site/* ubuntu@<EC2_PUBLIC_IPV4_OR_DNS>:/tmp/site/
```

4) Move into Apache web root:

```bash
sudo rm -rf /var/www/html/*
sudo cp -r /tmp/site/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
```

5) Visit:
- `http://<EC2_PUBLIC_IPV4_OR_DNS>/`

**Screenshot checklist**: browser with URL visible + site home page.

---

### D) Option 2 (required): Docker container with Apache + site content

You can build the image **on EC2** (recommended) or build locally and push to a registry.
For the class requirement, building directly on EC2 is simplest.

#### D1) Install Docker on Ubuntu 24.04

```bash
sudo apt update
sudo apt -y install docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
newgrp docker
docker --version
```

**Screenshot checklist**: `docker --version` output.

#### D2) Copy your repo onto EC2

If your repo is public:

```bash
sudo apt -y install git
git clone <YOUR_GITHUB_REPO_URL>
cd "Project 1 Part2"  # or whatever folder name git clone created
```

If your repo is private, use SSH keys or upload a zip.

**Screenshot checklist**: `git clone` output + `ls` showing `DockerContainer/` and `site/`.

#### D3) Build and run the container

From the repo root (must contain both `DockerContainer/` and `site/`):

```bash
docker build -t project1-part2:latest -f DockerContainer/Dockerfile .
```

Stop Apache-on-host if you installed it earlier (to free port 80):

```bash
sudo systemctl stop apache2 || true
```

Run the container on port 80:

```bash
docker run -d --name project1-part2 --restart unless-stopped -p 80:80 project1-part2:latest
docker ps
```

Visit:
- `http://<EC2_PUBLIC_IPV4_OR_DNS>/`

**Screenshot checklist**:
- Docker build output (end of build)
- `docker ps` output showing container running
- Browser showing the site + URL visible

#### D4) Update content later

```bash
docker rm -f project1-part2
docker build -t project1-part2:latest -f DockerContainer/Dockerfile .
docker run -d --name project1-part2 --restart unless-stopped -p 80:80 project1-part2:latest
```

---

### E) What to show in your YouTube video (Part 2)

- EC2 instance info and security group (HTTP/SSH)
- Docker install verification
- Docker build
- Docker run and `docker ps`
- Site running at the public URL
- Visit all pages:
  - Home: show **responsive menu** (resize) + demo upload interaction
  - About: show float/right image block + CSS styling
  - Contact: show form validation + local save
  - Sign in: show React page + create-account appears right + enter fills login/password

