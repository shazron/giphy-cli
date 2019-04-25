const {flags} = require('@oclif/command')
const BaseCommand = require('./base')
const termImg = require('term-img')
const {cli} = require('cli-ux')
const {URLSearchParams} = require('url')
const fetch = require('node-fetch')

function showLink(url) {
  cli.url(url, url)
}

class RandomCommand extends BaseCommand {
  async run() {
    const {flags, args} = this.parse(RandomCommand)

    const params = new URLSearchParams()
    params.append('api_key', flags['api-key'])

    if (args.tag) {
      params.append('tag', args.tag)
    }
    if (flags.rating) {
      params.append('rating', flags.rating)
    }

    try {
      const endpoint = '/v1/gifs/random'
      cli.action.start('Contacting Giphy...')
      const response = await fetch(`http://api.giphy.com${endpoint}?${params.toString()}`)
      const json = await response.json()
      cli.action.stop()

      if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {response, json}
      }

      const gifUrl = json.data.image_url

      if (flags['link-only']) {
        showLink(gifUrl)
      } else {
        cli.action.start('Downloading gif...')
        const gifPath = await this.downloadUrl(gifUrl, 'png')
        cli.action.stop()
        termImg(gifPath, {
          fallback: () => {
            cli.open(gifUrl, gifUrl)
            this.log(`file://${gifPath}`)
          },
        })
        showLink(gifUrl)
      }
    } catch (error) {
      const {response, json} = error
      if (response && response.status && response.statusText && json) {
        this.log(`${response.status} ${response.statusText}: ${json.message}`)
      } else {
        this.log(error)
      }
    }
  }
}

RandomCommand.description = 'Grabs a random gif from giphy'

RandomCommand.args = [
  {
    name: 'tag',
    description: 'filters results by the specified tag',
    required: false,
  },
]

RandomCommand.hidden = false

RandomCommand.flags = {
  rating: flags.string({
    char: 'r',
    description: 'filters results by specified rating',
    default: 'g',
    options: ['y', 'g', 'pg', 'pg-13', 'r'],
  }),
  'api-key': flags.string({
    char: 'k',
    description: 'the Giphy API key',
  }),
  'link-only': flags.boolean({
    char: 'l',
    description: 'show link only',
  }),
}

module.exports = RandomCommand
