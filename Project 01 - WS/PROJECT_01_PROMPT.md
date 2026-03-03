## Copy/paste prompt (based on `Project 01.rtfd`)

You are my project assistant. I must complete **Project 1 – Simple Site Created 2 ways on AWS** (Due **March 7, 11pm**). I need a **static startup website** (Computer Vision + ML startup) built **once** (Part 1) and deployed **two different ways on AWS**: **EC2 + Apache (Part 2)** and **S3 static hosting (Part 3)**. Work can be individual or group, but requirements are the same.

### What to build (Part 1: site + frontend requirements)
Create a simple static website with these pages:
- **Home**
- **About**
- **Contact**
- **Sign in** (special requirement below)

Constraints:
- Use **HTML + CSS + JavaScript** (Bootstrap allowed; learn on own).
- **JavaScript interactions: minimum 2**
  - One interaction must be: **responsive menu realignment when scaling (browser → mobile)** (Bootstrap counts).
  - The second interaction: propose one (give me 3 good options, pick 1, and implement it).
- **Images/graphics are required on ALL pages.**
- **CSS styling must be on EACH page**, show interesting design using **CSS box model**.
- Must include **at least one div/span that floats to the right or bottom**.
- **Sign in page must use ReactJS**:
  - The HTML for this page should be **minimal** (only empty div tags), and content is populated by **React components**.
  - Show a login form with **login**, **password**, **submit** button, plus a **“create account”** button.
  - When “create account” is clicked: show a second form **to the right** asking for **name, email, login, password**, and an **enter** button.
  - When **enter** is clicked: the create-account form disappears; only the original login form remains, but it is now filled with the **new login + password**. Use **React state** to preserve and fill those values.

Deliverable from you: generate the complete code (folder structure, all pages, assets placeholders, styling, JS, and the React sign-in page) so it can be deployed on EC2 Apache and on S3.

### Deploy #1 (Part 2: AWS EC2 + Apache + Docker + repo/wiki/video)
I must:
- Create an **AWS EC2 instance** using a **free-tier Ubuntu AMI** (later version).
- Install **Apache web server** and deploy the site.
- Create a **GitHub repository named**: **Project 1 Part2**.
- Put **all HTML/CSS/JS code** in that repo.
- Use the **GitHub wiki** to document steps with **screenshots**.
- Include a screenshot showing the **deployed URL** and the running site; demonstrate **Bootstrap + the JS interactions**.
- **Docker requirement**:
  - Create and use a **Docker container** that contains **all software needed for the EC2 server + the static content**.
  - Put the Docker container files in the repo under a folder named **`DockerContainer/`**.
  - Wiki must document **how to create the Docker container and deploy it** (screenshots).
- Create a **YouTube video** showing: Docker creation, deployment, site running, clearly showing the URL; go through all pages; discuss CSS styling and JS interactions (including Bootstrap).
- GitHub wiki must include pages with **exact names**:
  - **Special Issues** (PDF answering Special Issue 1 and 2)
  - **YouTube Link**
  - **Docker Creation** (screenshots; if using DockerHub/ECR/ECS explain + show AWS console screenshots)

Special Issues (answer content I must produce for PDF):
- **Special Issue 1**: What happens when an EC2 instance stops running and data is lost? How to “freeze” the instance and save in **S3 as an AMI**, then reinstate/duplicate. Include **costs involved**.
- **Special Issue 2**: What happens when you **reboot** and the **IP address changes**? Options to publish a stable public URL (e.g., Elastic IP) and **fees incurred**. Also answer: can this be done on the learner lab environment?

Deliverable from you: provide step-by-step deployment instructions, Dockerfile/setup approach, and a wiki outline matching the required page names + what screenshots to capture.

### Deploy #2 (Part 3: AWS S3 static hosting + separate repo/wiki/video)
I must:
- Deploy the same site using **AWS S3 static website hosting**.
- Create a separate GitHub repo named: **Project 1 Part 3**.
- Include all **HTML/CSS/JS** in the repo.
- Use the **GitHub wiki** with screenshots documenting setup and deployment; discuss **cost involved**.
- Include screenshot showing the **deployed URL** and pages.
- Create a **YouTube video** documenting setup + site running + URL; discuss issues encountered.
- Wiki pages with **exact names**:
  - **YouTube Link**
  - **S3 Bucket Setup** (screenshots of S3 bucket + uploaded content in AWS console)

Deliverable from you: provide S3 deployment steps and wiki outline + screenshot checklist.

### Final submission deliverables (to Canvas)
I must turn in:
- **Deployed website URLs** (EC2 + S3)
- **GitHub repository URLs** (Part 2 + Part 3)
- Wikis complete with required media + YouTube links
- Be prepared to discuss advantages/disadvantages of Part 2 vs Part 3 in class.

### Now do this
1) Ask me any missing details you truly need (otherwise assume reasonable defaults).  
2) Propose a CV/ML startup concept + site theme.  
3) Produce the full site code (Home/About/Contact + React Sign-In meeting the exact behavior).  
4) Provide the exact steps for EC2+Apache deployment, Docker container build/run, and S3 deployment.  
5) Output GitHub wiki page outlines (with required page names) and a screenshot/video capture checklist.  
6) Output a short “advantages vs disadvantages: EC2+Apache+Docker vs S3 hosting” section I can use in class.

