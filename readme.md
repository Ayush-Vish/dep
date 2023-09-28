# Blog website 💕 

### Brand is a blog website 
## Welcome to the  blog website

# Installation 🚀
### 1. Cloning the repo  
```bash
   git clone https://github.com/Ayush-Vish/Blog_Website.git blog-website 
``` 

### 2. Changing the directory to server of the blog-website 
```bash 
   cd blog-website
```

### 3. Installing all the dependencies 
```bash
  npm  i --save
```
### 4. Making a .env file 
```bash
  touch .env 
```

### 5. Open .env file and copy the content which is in the .env.example.js file . Click [here](./.env.example.js) 

### 6. Starting the server 🌐
```bash
   npm run dev 
```

### Now sever is listening on a particular port 

## User Routes localhost:3000/user

POST -> /api/v1/register - to register a user 

POST -> /api/v1/login - to login a user

GET -> /api/v1/logout - to logout a user

GET -> /api/v1/me  - to get user details

POST -> /api/v1/updateUser - to update user details

POST -> /api/v1/forgot-password - to send a token for reseting password 

POST -> /api/v1/reset-password:resetPasswordToken - to reset  password 




