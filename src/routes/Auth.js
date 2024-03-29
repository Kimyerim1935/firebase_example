import React, {useState} from 'react';

const Auth =  () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const onChange = (e) => {
        const {target: {name, value}} = e

        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }

    }

    console.log('commit')
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={onChange}
                required/>
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onChange}
                required/>

                <input type="submit" value="Login"/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}

export default Auth;
