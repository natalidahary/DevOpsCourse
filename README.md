# DevOps Course project
Backend: Node.js + Express serving a JSON file (notes.json), exposes REST API on /api/notes.
Frontend: React app that consumes the backend API.
Built to be easily run:
- Locally with npm
- In Docker (Mac or Windows)
- On a remote VM (Azure) using Docker Compose

---

## How to run in different environments

### 1. Local development (directly on your machine)
Run backend:
cd backend
npm install
node index.js
![Node index.js](./screenshots/node_index.png)
Runs on http://localhost:5002
![localhost backend](./screenshots/localhost_backend.png)

Run frontend:
cd frontend
npm install
npm start
![npm start](./screenshots/npm_start.png)
Opens http://localhost:3000
![localhost frontend](./screenshots/localhost_frontend.png)
Proxies API requests to http://localhost:5002


### 2. Local Docker (on Mac)
Nginx configuration (for frontend Docker image):
The frontend uses a custom nginx.conf
This allows:
- Serving the React app at /
- Proxying API requests /api/* to the backend service in Docker Compose.
Build & start containers:
![docker compose ps](./screenshots/compose_ps_docker.png)
docker compose up -d
![build containers](./screenshots/build_containers.png)
Access:
Frontend: http://localhost:8080
![localhost frontend docker](./screenshots/localhost_frontend_docker.png)
Backend: http://localhost:5001/api/notes
![localhost backend docker](./screenshots/localhost_backend_docker.png)
Stop:
docker compose down

Instead of running docker build + docker push by hand, you can use:
./build-and-push.sh
Build images of FE and BE locally and push to Docker Hub by script.
![upload dockerhub](./screenshots/upload_dockerhub.png)


### 3. On Azure VM (Docker Compose)
Connect to VM:
![vm azure](./screenshots/vm_azure.png)
chmod 400 /path/my-devops-vm_key.pem
ssh -i path/to/key.pem azureuser@<VM_IP>
creating a docker-compose.yml file on VM.
![docker compose ps](./screenshots/compose_ps_vm.png)
Pull & run containers:
docker-compose up -d
Access:
Frontend: http://<VM_IP>/
![frontend vm](./screenshots/frontend_vm.png)
Backend API direct: http://<VM_IP>:5000/api/notes
![backend vm](./screenshots/backend_vm.png)
Stop:
docker-compose down
