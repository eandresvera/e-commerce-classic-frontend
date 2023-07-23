import { db, auth, doc, setDoc, getDoc, updateDoc, updatePassword } from '../firebase';
import { toast } from 'react-toastify';

export const createUser = async( userInfo ) => {
    const uid = auth.currentUser.uid;
    await setDoc(doc(db, 'users', uid), userInfo)
}

export const getUserInfo = async() => {

    const uid = auth.currentUser.uid;
    const userRef = doc(db, "users", uid) 
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
        return userSnap.data();
      } else {
        // userSnap.data() will be undefined in this case
        return false;
      }
}

export const updatePass = ( newPassword ) => {

    const notifySuccess = () => toast.success("Contraseña actualizada");
    const notifyError = () => toast.warning("Error al actualizar la contraseña");

    let user = auth.currentUser;

    updatePassword(user, newPassword).then(() => {
        notifySuccess();
    }).catch((error) => {
        console.log(error);
        notifyError();
    });
}

export const updateUserInfo = async( dataToUpdate ) => {

    const uid = auth.currentUser.uid;
    // console.log('current user id: ', dataToUpdate);


    const userRef = doc(db, 'users', uid);
    // const userRef = db.collection('users').doc(uid);
    const notifySuccess = () => toast.success("Información actualizada");
    const notifyError = () => toast.warning("Error al actualizar la información");

    if ( Object.entries(dataToUpdate).length > 0 ) {
        await updateDoc(userRef,dataToUpdate)
            .then(() => {
                console.log('exito');
                notifySuccess();
                // return true
            })
            .catch((error) => {
                console.log(error);
                // The document probably doesn't exist.
                notifyError();
            });
    }else{
        console.log('empty object');
    }
}

export const addProduct = async() => {

    const whiteShirt = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
    const blackShirt = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
    const redShirt   = 'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
    const brownShirt = 'https://images.unsplash.com/photo-1625052804681-366ec6526fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';

    const data = {
        id: '',
        sku: '',
        active: true,
        brand: 'Adiddas',
        vendor: 'vualapp',
        name: 'Polera Mujer',
        description: 'Polera mujer talla m ideal para no se que chucha',
        category: 'woman/shirt',
        url: 'https://images.unsplash.com/photo-1610214354095-684029c14300?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        mobile_url: 'https://images.unsplash.com/photo-1610214354095-684029c14300?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        colors: ['black','brown'],
        colors_images: { brown: brownShirt, black: blackShirt},
        sizes: ['xs','s','m', 'l', 'xl', 'xxl'],
        price: 25000,
        rating: 4.5,
        reviews_number: 11,
        stock: 11,
    };

    try{
        const addProductRef = await db.collection('products').doc()
        data.id = addProductRef.id;
        const res = addProductRef.set(data);
        return res;
    }catch(err){
        return err;
    }


}

export const getProducts = async() => {
    const productRef = await db.collection('products').get()
    productRef.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
}