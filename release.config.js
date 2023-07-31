module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/bridgesC648/ga-react",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator", // generates release notes based on commit messages
    "@semantic-release/github"
  ]
};
