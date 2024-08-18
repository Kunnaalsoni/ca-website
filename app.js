const express = require("express");

const app = express();
import { Analytics } from "@vercel/analytics/react"
// Port Num
const port = process.env.PORT || 3000;

 
// Static folder
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/public/html/index.html');
   });

app.get('/about', function(req, res){
      res.sendFile(__dirname + '/public/html/team.html');
      });
// Setting up port
app.listen(port, () => {
   //app.use('/', express.static('app', {index: "html/index.html"}));

   console.log(`Server is up on port ${port}`);
});