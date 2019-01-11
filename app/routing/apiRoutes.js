var friendsData = require('../data/friends')
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendsData)
  })

  app.post('/api/friends', function (req, res) {
    var closestFriend = ''
    var minTotalDiff = 100

    for (var i = 0; i < friendsData.length; i++) {
      var scores = friendsData[i].scores
      var totalDiff = 0
      for (var j = 0; j < scores.length; j++) {
        var diff = Math.abs(scores[j] - req.body.scores[j])
        totalDiff += diff
      }

      if (totalDiff < minTotalDiff) {
        minTotalDiff = totalDiff
        closestFriend = friendsData[i].name
      }
    }
    friendsData.push(req.body)
    res.json(closestFriend)
  })

  app.get('/api/clear', function (req, res) {
    // Empty out the arrays of data
    friendsData.length = []

    res.json({ ok: true })
  })
}
