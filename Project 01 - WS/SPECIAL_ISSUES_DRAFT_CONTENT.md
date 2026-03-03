## Special Issue 1 — EC2 stop, “data loss”, freezing as AMI (with costs)

### What happens when an EC2 instance stops?

- If your instance uses **EBS** as the root volume (typical for Ubuntu AMIs), the **EBS volume usually persists** when you stop/start, so your files are typically still there.
- However, **instance store (ephemeral) volumes** (if present) are **lost** when the instance stops/terminates.
- You can still “lose work” if you:
  - forgot to save changes to the correct disk
  - accidentally terminate the instance
  - lose track of configuration changes

### How to “freeze” the instance: create an AMI

An **AMI** is a reusable image of the instance. Creating an AMI typically creates **EBS snapshots** of attached volumes.

Steps:
1) AWS Console → EC2 → Instances → select your instance
2) Actions → **Image and templates** → **Create image**
3) Name: `project1-part2-ami-<date>`
4) Create image
5) EC2 → **AMIs** → wait until status is **available**

### Re-instate or duplicate from the AMI

1) EC2 → AMIs → select your AMI
2) Actions → **Launch instance from AMI**
3) Configure instance type, key pair, security group
4) Launch → new instance has the same installed software/files as captured

### Where does S3 come in?

EBS snapshots are stored in AWS-managed storage that is **S3-backed** (you don’t directly see “a file in S3”, but snapshots are stored durably in AWS’s storage systems).

### Costs involved (what to say)

- **EBS snapshot storage**: billed per GB-month of snapshot data stored.
- **AMI itself**: no major separate cost; snapshot storage is the main part.
- **EC2 instance**: billed while running (and some charges can apply for attached resources).
- If you copy AMIs across regions, you may incur additional snapshot storage and transfer.

---

## Special Issue 2 — IP address changes + stable public URL options (with fees)

### What happens to the public IP when you reboot/stop?

- **Reboot**: usually keeps the same public IPv4.
- **Stop + start**: often assigns a **new public IPv4**, so your URL changes.

### Options for a stable public URL

1) **Elastic IP (EIP)**
   - Allocate an Elastic IP and associate it with your instance.
   - Your public IP stays stable even after stop/start.
   - **Cost note**: Elastic IPs can incur charges if:
     - allocated but **not associated** to a running instance, or
     - you allocate more than you need.

2) **DNS name with Route 53**
   - Buy/host a domain and point an A-record to your Elastic IP (or use alias records when applicable).
   - **Cost note**: hosted zone monthly fee + per-query charges + domain registration (if you buy a domain).

3) **Load Balancer (advanced)**
   - Put an ALB/NLB in front; provides a stable DNS name and supports scaling.
   - **Cost note**: load balancer hourly + LCU/usage charges.

### Learner lab environment caveat

- Some learner labs restrict allocating Elastic IPs or Route 53 management.
- If restricted, you can still demonstrate the site using the current EC2 public IP, but you should mention the limitation and the “real AWS account” solution (Elastic IP).

