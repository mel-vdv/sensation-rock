// version 9 : 
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';



class Firebase {

    constructor() {
        const config = {
            apiKey: "AIzaSyCphSZVU02e-qhrECaCOpnP0E3TzdFYWW4",
            authDomain: "igra-835e2.firebaseapp.com",
            projectId: "igra-835e2",
            storageBucket: "igra-835e2.appspot.com",
            messagingSenderId: "948456755701",
            appId: "1:948456755701:web:6818b31a854c630c7490bc"
        }
        const app = initializeApp(config);
        this.storage = getStorage(app);

    }

    onEnregistre = (chemin, file) => {
        const referenc = ref(this.storage, chemin);
        uploadBytes(referenc, file).then((snapshot) => {
            console.log('ok uploaded blob file!');
        });
    }
}
export default Firebase;