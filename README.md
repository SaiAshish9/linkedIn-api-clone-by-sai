## Connecting to Mysql Amazon RDS 

```
Region -> Asia Pacific (Mumbai)
RDS
Free Tier
MySQL 
Security -> VPC Security Group

Edit Inbound Rules
MYSQL/Aurora TCP 3306 Source -> Custom
Custom TCP 3000-4000 0.0.0.0/0 :/0 

RDS -> Modify -> Additional Configuration -> Public Access
```

## Configuring NestJS Project

```
sudo npm i -g @nestjs/cli
sudo nest n linkedIn
cd linked-in
npm run start
Go to http://localhost:3000/
```