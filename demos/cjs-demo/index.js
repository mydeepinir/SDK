const deepIn = require('deepin-js-sdk')

deepIn.init('dHuUTYnzLb4bTV2JwQDH', { dontBunch: true })

deepIn.identify('12091906-01011992', {
    traits_firstName: 'Grace Hopper',
    traits_username: 'grace@usnavy.gov'
}).then((res) => {
    console.log(res.url, res.statusText)
}).catch(e => {
    console.error('Deepin Errored', e);
})
