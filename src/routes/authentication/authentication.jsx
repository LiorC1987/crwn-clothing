import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.scss'

const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);

    //     }
    // }, [])

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     createUserDocumentFromAuth(user)

    // }
    return (
        <div className="sign-container"> 
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;