---
id: 6_1_Single_Pods
title: Single container Pods
---

## Commands
2 files are necessary:

pod.yaml
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-world-pod
spec:
  containers:
  - name: hello-world
    image: gcr.io/google-samples/hello-app:1.0
    ports:
    - containerPort: 80
```

and deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-world
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-world
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: hello-world
        image: gcr.io/google-samples/hello-app:1.0
        ports:
        - containerPort: 8080
```

```bash
#Start up kubectl get events --watch and background it.
kubectl get events --watch &

#Create a pod...we can see the scheduling, container pulling and container starting.
kubectl apply -f pod.yaml

#Start a Deployment with 1 replica. We see the deployment created, scaling the replica set and the replica set starting the first pod
kubectl apply -f deployment.yaml
```

```bash
#Scale a Deployment to 2 replicas. We see the scaling the replica set and the replica set starting the second pod
kubectl scale deployment hello-world --replicas=2

#We start off with the replica set scaling to 1, then  Pod deletion, then the Pod killing the container 
kubectl scale deployment hello-world --replicas=1

kubectl get pods

#Let's use exec a command inside our container, we can see the GET and POST API requests through the API server to reach the pod.
kubectl -v 6 exec -it PASTE_POD_NAME_HERE -- /bin/sh
ps
exit

#Let's look at the running container/pod from the process level on a Node.
kubectl get pods -o wide
ssh aen@c1-node2
ps -aux | grep hello-app
exit
```

```bash
#Now, let's access our Pod's application directly, without a service and also off the Pod network.
kubectl port-forward PASTE_POD_NAME_HERE 80:8080

#Let's do it again, but this time with a non-priviledged port
kubectl port-forward PASTE_POD_NAME_HERE 8080:8080 &

#We can point curl to localhost, and kubectl port-forward will send the traffic through the API server to the Pod
curl http://localhost:8080

#Kill our port forward session.
fg
ctrl+c
```

```bash
kubectl delete deployment hello-world
kubectl delete pod hello-world-pod

#Kill off the kubectl get events
fg
ctrl+c
```