var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.send("Simple response");
  });
}
 
module.exports = appRouter;
