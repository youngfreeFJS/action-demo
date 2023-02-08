const core = require('@actions/core')

async function run() {
  core.info(`input name is : ${core.getInput('name')}`)
  core.info(`human is : ${core.getInput('human')}`)
  core.info(`not_required is : ${core.getInput('not_required')}`)
  core.info(`job is : ${core.getInput('job')}`)
  
  
}

run()