const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-greet");
  console.log(`${name} says hello, world!`);

  const time = new Date();

  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (err) {
  core.setFailed(err.message);
}
