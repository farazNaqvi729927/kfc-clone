import React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { LoginSocialGoogle } from 'reactjs-social-login'

export default function Google() {
    return (
        <div className='n'>
            <LoginSocialGoogle
                client_id={"1028953974698-0sctdeji4b16fal426bk4pqf5mj9k64m.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    console.log(provider, data);
                }}
                onReject={(err) => {
                    console.log(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    )
}
