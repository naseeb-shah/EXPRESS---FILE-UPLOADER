var  express = require("express")
var moragan= require('morgan')
var multer= require('multer')
var app= express()
app.use(moragan('tiny'))
console.log(multer)


 var storage=multer.diskStorage({
destination:function(req,file,cb){
    cb(null,'./public')
}
,
filename:function(req,file,cb){
    // console.log(file.originalname)
    let uniqueSuffix='deen.jpg'
    cb(null, file.fieldname + '-' + uniqueSuffix)

}
 })

 var upload=multer({storage:storage})
 app.post('/profile', upload.single('avatar'), function (req, res ) {
    res.send('file uplodad')
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    
  })
  


















app.listen(3000,(err)=>{
    if(err)
    console.log(err)
    else
    console.log('server is run')
})