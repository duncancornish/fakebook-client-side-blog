const app = require("./app");
const port = process.env.PORT || 3000;
const { restart } = require('nodemon');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
   
