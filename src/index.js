const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const middleware = require('./middlewares/commonMiddlewares')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sujatagarande:0jNgxkDzTi6CFIdW@cluster0.mirnn.mongodb.net/sujatagarande", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use(middleware.timeIpUrlMW)
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
