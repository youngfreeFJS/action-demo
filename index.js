const core = require('@actions/core')

async function run() {
  const name = core.getInput('name')
  core.info(`input name is : ${name}`)
  const envs = process.env
  for (const env in envs) {
    if (Object.hasOwnProperty.call(envs, env)) {
      core.info(`[${env}]: [${envs[env]}]`)
    }
  }
  core.info(`process envs: \n`)
  
  core.setOutput('age', `${name}/100`)
}

run()