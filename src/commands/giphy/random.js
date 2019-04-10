const { Command, flags } = require('@oclif/command')

class RandomCommand extends Command {
  async run () {
    const { flags, args } = this.parse(RandomCommand)
    this.log(`args: ${JSON.stringify(args)}`)
    this.log(`flags: ${JSON.stringify(flags)}`)
    // TODO: call the Giphy API and get the first random gif
  }
}

RandomCommand.description = 'Grabs a random gif from giphy'

RandomCommand.args = [
  { 
    name: 'tag', 
    description: 'filters results by the specified tag',
    required: false
  }
]

RandomCommand.flags = {
  rating: flags.string({ 
      char: 'r', 
      description: 'filters results by specified rating', 
      default: 'g',
      options: [ 'y', 'g', 'pg', 'pg-13', 'r' ]
  })
}

module.exports = RandomCommand