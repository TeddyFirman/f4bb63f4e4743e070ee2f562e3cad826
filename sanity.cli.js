/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = "cvn9kss6"
// const dataset = "production"

// export default defineCliConfig({ api: { projectId, dataset } })


// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "cvn9kss6",
    dataset: "production",
  }
});