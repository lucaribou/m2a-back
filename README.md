# Install via Podman
- `podman build -t img-back:v0.1 .` 
- `podman run -d -p 8081:80 img-back:v0.1`

# .env file
- have an `.env` file in the root of the repo, you can copy `.env.example` and adapt it