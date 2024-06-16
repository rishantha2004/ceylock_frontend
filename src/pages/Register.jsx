import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register() {

    const handleChange = (e) => {
        e.preventDefault();
    } 
    return (
    <>
    <FormContainer>
        <form>
            <div className="brand">
                <h1>CeyLock</h1>
            </div>
            <input 
                type="text" 
                placeholder="Username" 
                name="username" 
            />
            <input 
                type="text"
                placeholder="FirstName" 
                name="firstname" 
            />
            <input 
                type="email" 
                placeholder="Email" 
                name="email" 
            />
            <input t
                ype="password" 
                placeholder="Password" 
                name="passoword"
            />
            <button 
                type="submit"
            >
                Create User
            </button>

            <span>
                already have an account ? 
                <Link to="/login">
                Login
                </Link>
            </span>
        </form>
    </FormContainer>
    </>
    )
}

const FormContainer = styled.div`
    background-color: #0e2f44;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem,
        justify-content: center;
        h1 {
        color: white;
        text-transform: uppercase
        }
    }
    
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 2rem;
        background-color: #101010;
        padding: 3rem 5rem;
        input {
        background-color: transparent;
        padding: 1rem;
        }
    }
`;
export default Register;