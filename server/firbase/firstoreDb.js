const {firebase} = require('./firbase');
let db = firebase.firestore(); 
let auth = firebase.auth();

function getSitioInteres(tabla,limite){
    let datos = [];
    return new Promise((resolve,reject) => {
        db.collection(tabla)
            .limit(limite)
            .get()
            .then ((querySnapshot) => {
                if(querySnapshot)
                    querySnapshot.forEach((element)=> {
                        datos.push({nombre:element.data().nombre,id:element.id}) 
                    })
                    resolve(datos);
                })
            .catch((error)=>{
                reject(error)
            });
    })
};

function getSitioInteresXNombre(tabla,nombre){
    let datos = [];
    return new Promise((resolve,reject) => {
        db.collection(tabla)
            .get()
            .then ((querySnapshot) => {
                if(querySnapshot)
                    querySnapshot.forEach((element)=> { 
                        if (element.data().nombre && element.data().nombre.replace(/\s/g, '').toLocaleLowerCase() === nombre)
                            datos.push({...element.data(),id:element.id}) 
                    });
                resolve(datos)
            })
            .catch((error)=>{
                reject(error)
            });
    })
};

function crearSitioInteres(tabla,body){
    return new Promise((resolve,reject) => {
        db.collection(tabla)
        .add({...body})
            .then ((sitioInteres) => {
                resolve(sitioInteres.id)
            })
            .catch((error)=>{
                reject(error)
            })
    })
}

function borrarSitioInteres(tabla,id){
    return new Promise((resolve,reject) => {
        db.collection(tabla)
        .doc(id)
        .delete()
            .then(()=>{
                resolve('sitio de interes borrado con exito');
            })
            .catch((error)=>{
                reject(error)
            })
    })
}

function actualizarSitioInteres(tabla,id,body){
    return new Promise((resolve,reject) => {
        db.collection(tabla)
        .doc(id)
        .update({...body})
            .then((sitioInteres) => {
                resolve('El sitio de interes fue actualizado con exito')
            })
            .catch((error) => {
                reject(error)
            }) 
    })
}

function authenticationEmailAndPassword(usuario,password){
    return new Promise((resolve,reject) => {
        firebase.auth()
            .signInWithEmailAndPassword(usuario, password)
                .then(()=> {
                    firebase.auth().currentUser.getIdToken(true)
                        .then((idToken) => {
                            resolve(idToken);
                        })
                        .catch((error) => {
                            reject(error)
                        });
                })
                .catch( (error) => {
                    reject(error);   
                    })
                });
}


module.exports = {
    getSitioInteres,
    getSitioInteresXNombre,
    crearSitioInteres,
    borrarSitioInteres,
    actualizarSitioInteres,
    authenticationEmailAndPassword
  }