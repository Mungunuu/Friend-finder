var friendsData = require('../data/friends')
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  })

  app.post('/api/friends', function (req, res) {
    friendsData.push(req.body);
    res.json(true);
  })

  app.get('/api/clear', function (req, res) {
    // Empty out the arrays of data
    friendsData.length = []

    res.json({ ok: true })
  })
}
