const core = require("@actions/core");
const github = require("@actions/github");

createIssue();

async function createIssue() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = github.getOctokit(token);

    const response = await octokit.rest.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}
