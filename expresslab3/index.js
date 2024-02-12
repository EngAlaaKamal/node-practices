
 const path=require('path');
const express= require('express')
const todosRouters =require('./routes/todosRoutes')
const todosModel =require('./models/todosModel')

//express app
const app=express()

 
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
 
 

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
 
app.use('/todos', todosRouters)
 
  

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));