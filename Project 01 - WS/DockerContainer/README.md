## DockerContainer (Part 2 requirement)

This container bakes in:
- Ubuntu 24.04
- Apache2
- The static site content copied into `/var/www/html`

### Build

From the repo root (the folder that contains `DockerContainer/` and `site/`):

```bash
docker build -t amoura-vision:part2 -f DockerContainer/Dockerfile .
```

### Run locally

```bash
docker run --rm -p 8080:80 amoura-vision:part2
```

Open `http://localhost:8080`.

### Notes

- If you edit the site, rebuild the image so changes are copied in.
- On EC2 you’ll map port 80:80 instead of 8080:80.

