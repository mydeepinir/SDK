const deepIn = require('../../')

deepIn.init('dHuUTYnzLb4bTV2JwQDH', { dontBunch: true })

deepIn.identify('12091906-01011992', {
    traits_firstName: 'Grace Hopper',
    traits_username: 'grace@usnavy.gov'
}).then((res: any) => {
    console.log(res.url, res.statusText)
}).catch((e: any) => {
    console.error('Deepin Errored', e);
})
