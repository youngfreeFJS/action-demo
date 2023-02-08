const core = require('@actions/core')

async function run() {
  core.info(`input name is : ${core.getInput('name')}`)
  core.info(`human is : ${core.getInput('human')}`)
  
  
  core.setOutput('age', `${name}/100`)
}

run()