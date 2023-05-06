# ICT and Environment Assignment
## CI/CD Node.js application 

#### This is a simple static website with the purpose of being built and deployed using CI/CD with GitHub Actions and Azure Pipelines. 


- GitHub Actions: The CI/CD YAML file for GitHub Actions is located in main branch and the triggers are configured for this branch as well, any change in the main branch will trigger the pipeline. Secrets and variables are already set for authenticating to Docker Hub and Azure cloud.

- Azure Pipelines: The CI/CD YAML file for Azure Pipelines is located on feature/azure branch and the triggers are configured for this same branch. Any change in the feature/azure branch will trigger the pipeline. Service connections are alerady created on Azure DevOps to authenticate to Docker Hub and Azure Kubernetes Service.

- To manually build and deploy this app execute the following commands in a terminal:

```
npm install
npm ci
npm run build
npm run test
```
Build and push docker image:
```
docker login -u your_dockerhub_username
docker build -t your_dockerhub_username/node-project .
docker push your_dockerhub_username/node-project
```
Connect to AKS cluster
```
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
kubectl get nodes
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml
```
Check application running on port 8080
```
localhost:8080
```