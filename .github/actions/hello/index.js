const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw new Error("Task failed successfully");
  // let's do some other core stuff.
  core.debug("Debug message"); // uh, okay.
  // ^ this will only appear if debugging is enabled
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  // we can set secrets
  console.log(`name before setSecret: ${name}`);
  core.setSecret(name); // this will be masked as *** or something.
  console.log(`${name} says hello, world!`);

  const time = new Date();

  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging GitHub Objcet");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  // set environment vars for future steps
  core.exportVariable("HELLO", "hello");
} catch (err) {
  core.setFailed(err.message);
}
