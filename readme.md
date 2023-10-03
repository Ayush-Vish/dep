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

## User Routes localhost:3000/api/v1/user

POST -> /register - to register a user 


POST -> /login - to login a user


GET -> /logout - to logout a user


GET -> /me  - to get user details


POST -> /updateUser - to update user details


POST -> /forgot-password - to send a token for reseting password 


POST -> /reset-password:resetPasswordToken - to reset  password 


POST -> /authorBlogs  - to get blogs written by user 


GET  -> /getFollowers  - to get followers of a user 


## Blog routes localhost:3000/api/v1/blogs 


GET  -> /getAllBlogs  - to get all blogs 


POST -> /create-blog  - to create a blog 

GET  -> /getblog/:id  - to get a blog by id 

GET  -> /getblogByCategory/:category  - to get a blog by category    


GET  -> /  - to get recent blogs 




# Libraries and Dependencies used 



