const core = require('@actions/core')

async function run() {
  const name = core.getInput('name')
  core.setOutput('age', `${name}/100`)
}

run()