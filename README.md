# AgileCloud website

Premium product website for AgileCloud, the intelligent infrastructure control plane by AgileCrafters.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Container

```bash
docker build -t agilecloud-site .
docker run --rm -p 8080:80 agilecloud-site
```

The container exposes port `80` and includes a health check.
