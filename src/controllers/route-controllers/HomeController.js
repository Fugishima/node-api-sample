const pathBuilder = require('path')
const fs = require('fs')
const { marked } = require('marked')

class HomeController {
    static async GET (req, res){
        const path = pathBuilder.resolve(__dirname, '..', '..', '..', 'README.md')
        fs.readFile(path, 'utf8', (error, data) => {
            res.status(200).send(marked(data.toString()))
        })
    }
}

module.exports = HomeController