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
query A{
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

query B{
  users{
    id
    image
    headline
    name
  }
}

```


## SQL Command's

```
INSERT INTO linkedIn.User values(1,"Google","20,701,240 followers","https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1622073600&v=beta&t=p9zXj2dj6BXsOGH65sw6Sw4iWqAg_h4q38ABubR4a2A");

INSERT INTO linkedIn.Post values(1,null,"https://media-exp1.licdn.com/dms/image/C5622AQEcCkjOSS3xJg/feedshare-image-offsite-ads_350_624/0/1613995014067?e=1617235200&v=beta&t=ukgWOspqqx8TBnU99KhVnUL2f-EdbOkg_sVtRatoLyM","Sarthak celebrates this","1w",1,null,28,"1,616",true,true,true,false,false,false,3);SELECT * FROM linkedIn.Post;

```