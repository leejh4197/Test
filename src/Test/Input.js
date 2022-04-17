import React from 'react'
import styled from 'styled-components'


const Input = () => {
    return(
        <Wrap>
            <h1>Input</h1>
            <div className='input-wrap'>
                <span>E-mail</span>
                <input placeholder='E-mail' className='email'></input>
                <span className='password-title'>Password</span>
                <input type="password" placeholder="Password" className='password'></input>
            </div>
        </Wrap>
    )
}

export default Input;
const Wrap = styled.div`
    width: 30%;
    margin: 0 auto ;
    .input-wrap{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        padding:20px;
        border-radius: 5px;
        span{
            display: flex;
        }
        .password-title{
            margin-top: 20px;
        }
        .email{
            height: 30px;
        }
        .password{
            height: 30px;
        }
    }
`

