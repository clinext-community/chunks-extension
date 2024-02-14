import fs from './lib/fs.js'


export default ({
  id: "@clinext/chunks-extension",
  description: "Adds chunks to CliNext",
  register: async ({ toolbox }) => {
    await fs({ toolbox })
  }
})
