
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const UserModel = require('./models/UserModels');
const PostModel=require('./models/PostModel');
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE' ],
  credentials: true
}));
app.use(cookieParser());
mongoose.connect('mongodb://localhost:27017/blog');

const verifyUser=(req,res,next)=>{
const token=req.cookies.token;
if(!token){
    return res.json("The token is missing")
}
else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
        if(err)
            return res.json("The token is wrong");
        else{
            req.email=decoded.email;
            req.username=decoded.username;
            next();
        }
    })
}
}
app.get('/',verifyUser,(req,res)=>{
return res.json({email:req.email,username:req.username});
});
app.post('/register',(req, res) => {
    const{username,email,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
         UserModel.create({username,email,password:hash})
    .then(user => res.json(user))
    .catch(err=>res.json(err))
    }).catch(err=>console.log(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    UserModel.findOne({ email: email })
    .then(user => {
        if (user) {
            console.log('User found:', user);
            bcrypt.compare(password, user.password, (err, response) => {
                if (err) {
                    console.log('Bcrypt error:', err);
                    return res.json("Error comparing passwords");
                }
                if (response) {
                    const token = jwt.sign({ email: user.email, username: user.username },
                        "jwt-secret-key", { expiresIn: '1d' });
                    res.cookie('token', token);
                    return res.json("Success");
                } else {
                    console.log('Password mismatch:', password, user.password);
                    return res.json("password is incorrect");
                }
            });
        } else {
            res.json("User not exist");
        }
    });
});
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/Images');
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage
})
app.post('/create',verifyUser,upload.single('file'),(req,res) =>{
PostModel.create({title:req.body.title,
    desc:req.body.desc,
    file:req.file.filename
}).then(result=>res.json(result))
.catch(err=>res.json(err))

} )

app.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json("Success");
})
app.listen(3000, () => {
  console.log('Server is running ')
})

