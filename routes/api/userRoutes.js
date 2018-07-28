const router = require('express').Router()
const Articles = require('../../models/articles');
const artController = require('../../controller/controller');

router.post("/save", (req, res) => {
  // article user has selected to save
  let newArticle = new Articles({
    userName: req.body.userName,
    articleTitle: req.body.articleTitle,
    articleImage: req.body.articleImage,
    articleLink: req.body.articleLink
  });
  console.log(newArticle)
  // save article to db and notify if success or failure
  artController.saveArticles(newArticle, (err, article) => {
    if (err) {
      res.json({ success: false, msg: "Failed to save article" });
    } else {
      res.json({ success: true, msg: "Article successfully saved" });
    }
  });
});

// retrieve all articles for user from db
router.post("/retrieve", (req, res) => {
  const user = req.body.userName;
  console.log(user)
  artController.getArticles(user, (err, articles) => {
    if (err) {
      res.json({ success: false, msg: "Failed to retrieve articles" });
    } else {
      res.json({ success: true, articles });
    }
  });
});

module.exports = router;
