const { Command, flags } = require('@oclif/command')
const axios = require('axios')
const imgcat = require('imgcat')
const {cli} = require('cli-ux')

class RandomCommand extends Command {
  async run () {
    const { flags, args } = this.parse(RandomCommand)
    const params = {
        api_key: flags['api-key']
    }

    if (args.tag) {
      params.tag = args.tag
    }
    if (flags.rating) {
      params.rating = flags.rating
    }

    return axios.request({
      baseURL: 'http://api.giphy.com',
      url: '/v1/gifs/random',
      method: 'get',
      params
    })
    .then((response) => {
      const gif_url = response.data.data.image_url
      if (flags.link) {
        cli.url(gif_url, gif_url)
      } else {
        imgcat(gif_url, { log: true })
      }
    })
    .catch((error) => {
      this.log(error)
    })
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
  }),
  'api-key': flags.string({ 
    char: 'k', 
    description: 'the Giphy API key', 
  }),
  link: flags.boolean({ 
    char: 'l', 
    description: 'show link only', 
  }),
}

module.exports = RandomCommand