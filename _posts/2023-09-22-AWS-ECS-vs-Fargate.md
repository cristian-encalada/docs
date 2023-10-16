---
layout: post
title: "What is Amazon ECS? Basics of AWS"
date: 2023-09-22 20:00:00 +0300
image:
  path: "/assets/img/2023-09-22-AWS-ECS-vs-Fargate/AWS-ECS.webp"
  alt: Amazon Elastic Container Service (Amazon ECS)
categories: [DevOps, AWS]
tags: [AWS, ECS, Fargate]
pin: true
---

Amazon Elastic Container Service (Amazon ECS) is a powerful and flexible container orchestration service offered by AWS. It simplifies the process of deploying, managing, and scaling containerized applications using Docker containers.


## Table of contents

* [What is ECS](#what-is-ecs)
* [ECS competitors](#ecs-competitors)
* [EC2 vs Fargate](#ec2-vs-fargate)
* [EC2 Task](#ec2-task)
* [EC2 Services](#ec2-services)
* [Load Balancers](#load-balancers)
* [References](#references)


## What is ECS

![What is ECS?](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/0-what-is-ECS.png)

### What are the main purposes of orchestrators?

* Manage lifecycle of containers: create/restart/destroy
* Deploy and load-balance application across multiple servers
* Autoscaling to handle variance in traffic
* Rolling out changes to applicaation

## ECS competitors

### Docker Compose Deployment

The scale up with docker compose is more difficult.

We can only deploy in a single server at a time. To deploy in different servers we could copy the docker-compose.yml file, but it's not fully an orchestrated system.

![Docker compose deployment](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/2-Docker-compose-deployment.png)


### Traditional Orchestrators vs Amazon ECS 

Traditional Orchestrators such as Kubernetes, these all require a lot of effort to get up and running.

ECS was created as a simple alternative as an orchestrator that requires to use a Graphical User Interface (GUI) to configure almost the entire process for different services.

![EC2 vs traditional orchestrators](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/4-ECS-vs-others.png)


## EC2 vs Fargate

ECS has two launch types:

1. EC2 based launch type (EC2 = AWS Compute Service)
2. Fargate Service

![EC2 vs Fargate](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/5-EC2-Launch_types.png)

![EC2 Launch](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/6-EC2-launch.png)

![Fargate Launch](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/7-Fargate-service.png)

## EC2 Task

![EC2 Task definition](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/ECS-Task-definition-file.png)

![EC2 Task Instance](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/ECS-Task-instance.png)


## EC2 Services

![EC2 Services](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/10-ECS-Services.png)

## Load Balancers

![Load Balancers](/assets/img/2023-09-22-AWS-ECS-vs-Fargate/11-Load-balancer.png)

Thanks for reading!

## References

- [AWS ECS Tutorial | Deploy a New Application from Scratch | KodeKloud - Youtube](https://www.youtube.com/watch?v=esISkPlnxL0)
- [Demystifying Amazon ECS - Medium](https://medium.com/@audhilmohammed/demystifying-amazon-ecs-c9da178b31a)
