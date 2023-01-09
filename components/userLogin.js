import React, {useState} from "react"
import router from "next/router";
import axios from "axios";

const UserLogin = ({Manager}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = { email: email, password: password }
        try {
            const res = await axios.post('https://comx-sand-api.afexnigeria.com/api/login', post)
            console.log(res.data,post)
        } catch (e) {
            console.log(e)
        }
        router.push('/')
    }

    // const manager = new Manager({
    //     key: process.env.KEY,
    //     vector: process.env.VECTOR
    // });




    // function handleSubmit (e) {

    //     const headers = new Headers();
    //     headers.set("Content-Type", "application/json" );
    //     // const form = { email, password };
    //
    //     const form_data = new FormData()
    //     form_data.append("email", email)
    //     form_data.append("password", password)
    //     form_data.append("auth_type", password)
    //
    //     console.log(form_data)
    //     const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(form_data)
    //     }
    //     fetch("https://comx-sand-api.afexnigeria.com/api/login", requestOptions)      .
    //     then(response => response.json())
    //         .then(res => console.log(res, form_data));
    //      router.push("/dashboard")
    // }

    return (
        <di>
            <div>

                <div className="flex">
                    <div className="surface-section w-full md:w-6 p-6 md:p-8">
                        <div className="mb-5">
                            {/*<img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3"/>*/}
                            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                            <span className="text-600 font-medium mr-2">Don't have an account?</span>
                            <a className="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a>
                        </div>
                        <div>
                            <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
                            <input id="email2" name="email" type="text" placeholder="Email address"
                                   onChange={onEmailChange} className="w-full p-3 mb-3"/>

                            <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
                            <input id="password2" name="password" type="password" placeholder="Password"
                                   onChange={onPasswordChange} className="w-full p-3 mb-3"/>


                            <button className="p-2 cursor-pointer"
                                    onClick={handleSubmit}
                            ><i className="pi pi-user pr-2"></i> Login
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block w-6 bg-no-repeat bg-cover"
                         style={{backgroundImage: "url('assets/images/blocks/signin/signin.jpg')"}}></div>
                </div>


            </div>

        </di>
    )
}


export default UserLogin