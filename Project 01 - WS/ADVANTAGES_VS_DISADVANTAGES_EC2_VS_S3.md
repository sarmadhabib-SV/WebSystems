## EC2 + Apache + Docker vs S3 static hosting (class discussion notes)

### EC2 + Apache + Docker

- **Advantages**
  - Full control over OS + web server configuration
  - Can host dynamic apps later (APIs, databases, server-side logic)
  - Docker makes deployments reproducible and portable
  - Easier to run custom software (CV inference services, background jobs)

- **Disadvantages**
  - More operational work (patching, monitoring, security hardening)
  - You pay for the instance while it’s running (even if traffic is low)
  - Risk of misconfiguration (security groups, server configs, updates)
  - Scaling and high availability require extra architecture

### S3 static website hosting

- **Advantages**
  - Simple and fast to deploy a static site
  - Highly durable storage; no server OS to manage
  - Often cheaper for low-maintenance static sites
  - Scales naturally for static content

- **Disadvantages**
  - Static only (no server-side logic)
  - Public access configuration must be done correctly (policy/permissions)
  - For HTTPS + custom domains, you typically add CloudFront/Route 53
  - Some “web server” behaviors (rewrites, advanced routing) require extra services

