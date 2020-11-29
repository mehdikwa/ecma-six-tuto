function initPromise(){
    return new Promise((resolve,reject) => {
        if(true){
            console.log('Operation asynchrone reussie');
            resolve('Contenu retourné en cas de reussite')
        }else{
            console.log('Operation asynchrone reussie a echouée');
            reject('Message d\'erreur ou contenu retourné en cas d\'erreur')
        }
    })
};
initPromise().then((success)=>{
    console.log('success')
        }).catch((error)=>{
    console.log(error)
})
