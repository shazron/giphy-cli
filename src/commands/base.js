const { Command } = require('@oclif/command')
const fetch = require('node-fetch')
const tempy = require('tempy')
const fs = require('fs')

class BaseCommand extends Command {
    async init() {
        if (process.env.TERM_PROGRAM !== 'iTerm.app') {
            this.help()
        }
    }

    help() {
        console.log(`For inline images, only iTerm2 3+ (with imgcat shell integration) is supported. https://iterm2.com`)
    }

    async downloadUrl(url, extension) {
        const tmpFile = tempy.file({ extension })
        return fetch(url)
            .then(res => {
              return new Promise((resolve, reject) => {
                  const dest = fs.createWriteStream(tmpFile);
                  res.body.pipe(dest);
                  res.body.on('error', err => {
                    reject(err);
                  })
                  dest.on('finish', () => {
                    resolve(tmpFile);
                  })
                  dest.on('error', err => {
                    reject(err);
                  })
                })
            })
    }
}

module.exports = BaseCommand