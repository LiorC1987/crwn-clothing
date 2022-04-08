import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
 } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password } = formFields

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
}


const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
        } catch(err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('Wrong e-mail or password!');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this e-mail');
                    break;
                default:
                    console.log(err);
            }
        }
        }

        const logGoogleUser = async () => {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user)
        }

    return (
        <div className="sign-in-container">
            <h1>I already have an account</h1>
            <h2>Sign in with your email and password</h2>
            <form onSubmit={handleSubmit} action="">
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}/>
                <div className="sign-in-buttons">
                <Button type='submit'>Sign In</Button>
                <Button type='button' onClick={logGoogleUser} buttonType='google'>Sign In With Google</Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm;