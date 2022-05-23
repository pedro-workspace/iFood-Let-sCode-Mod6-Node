console.log('passo 1')

function anycomplex(a, b, callback){
    const c = a +b
    setTimeout(() => {
        callback(c)
    }, 2000)
}

