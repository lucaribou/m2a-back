# Install via Podman
- `podman build -t img-front:v0.1 .` 
- `podman run -d -p 8080:80 img-front:v0.1`
- Access frontend with `http://localhost:8080`