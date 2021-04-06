const ghpages = require("gh-pages");

ghpages.publish("dist",{
  // repo: `https://github.com/${username}/${repos}.git`
}, (res) => {
  console.log(res);
  console.log("部署成功");
});
