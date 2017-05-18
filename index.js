


// Expose the /upload endpoint
const app = require('express')();
const http = require('http').Server(app);

app.post('/upload', (req, res, next) => {
  console.log('post is hit')
  res.json(req.file)
})
app.get('/api/user', (req, res) => {
  console.log('test')
  res.json("testing if server  is running ")
}
);

let port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
