import React, { useState } from 'react'
import * as Components from '../components/Auth/Components';
import axios from 'axios';
import { ipAddress } from '../Ip';
import { useNavigate } from 'react-router';
import { UserType } from '../context/UserContext';
import { useContext } from 'react';

function Login() {
    const nav = useNavigate()
    const { userId, setUserId } = useContext(UserType)
    const [signIn, toggle] = React.useState(true);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [comCode, setComCode] = useState('')
    const role = "emp"
    console.log(ipAddress + 'accounts/signup/')
    console.log(name)
    const signUp = (e) => {
        e.preventDefault();
        // Make sure ipAddress, comCode, email, pass, role, nav, and toggle are defined and have correct values.

        const data = JSON.stringify({
            //   "company_code": "forumnexus1004",
            //   "email": "aayush123@gmail.com",
            //   "password": "pass123",
            //   "role": "emp"
            "company_code": comCode,
            "email": email,
            "password": pass,
            "role": "emp",
            "name": name
        });

        const config = {
            method: 'post',
            url: ipAddress + 'accounts/signup/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert('Success');
                if (response.data) {
                    // Assuming that 'nav' is a function to navigate to another page
                    nav('/home');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Error');
                // Assuming that 'toggle' is a function to handle a UI element toggle
                toggle(false);
            });
    }

    const login = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "email": email,
            "password": pass
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: ipAddress+'accounts/login/',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                if (response.data) {
                    setUserId(response.data.user_id)
                    alert("success")
                    nav('/home')
                }
            })
            .catch((error) => {
                console.log(error);
                alert("error")
            });

    }

    return (
        <div className='logininv'>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form className='signupform'>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
                        <Components.Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                        <Components.Input type='password' value={pass} onChange={e => setPass(e.target.value)} placeholder='Password' />
                        <Components.Input type='text' value={comCode} onChange={e => setComCode(e.target.value)} placeholder='Enter your comapany code' />
                        <Components.Button onClick={(e) => signUp(e)} className='signUp'>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                        <Components.Input type='password' value={pass} onChange={e => setPass(e.target.value)} placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <div className="respnav" style={{ marginBottom: '12px' }}>
                            <a onClick={() => toggle(false)}>New user ? Sign Up now</a>
                            <br />
                        </div>
                        <Components.Button onClick={(e)=>login(e)}>Sigin In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}

export default Login
