## FrontEnd Repositories

```
https://github.com/SaiAshish9/linkedIn-app-clone-by-sai

https://github.com/SaiAshish9/linkedIn-web-ui
```

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
npm i prisma --save-dev
npx prisma init 
npm run start
Go to http://localhost:3000/
```

## Save All Files In VS Code

```
Ctrl + K + W
```

## Database Configuration

```
sudo mysql -u root -p
create database linkedIn;
use linkedIn;
grant all privileges on *.* to 'saiashish'@'localhost';
alter user 'saiashish'@'localhost' identified with mysql_native_password by 'saiashish';
```

## DATABASE_URL

```
mysql://saiashish:saiashish@localhost:3306/linkedIn
```

## Migration

```
npx prisma migrate dev --name init --preview-feature
sudo apt  install tree
tree prisma
```

## Perform migration whenever something is changed in schema.prisma

```
npx prisma migrate dev --name init --preview-feature
```

## Fetch All Posts

```
query {
  posts{
    id
    content
    image
    userReaction
    published
    videoUrl
    author{
      id
    }
    commentCount
    reactions
    liked
    clapped
    loved
    bright
    support
    curious
    variableReactionsCount
    }
}
```