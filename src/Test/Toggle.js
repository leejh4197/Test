import React,{useState} from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [active, setActive] = useState(false);
    const onClickToggle = () =>{
        setActive(!active)
    };
    return(
        <Wrap>
            <h1>Toggle</h1>
            <div className='Toggle-Wrap'>
                <div onClick={onClickToggle} className={active ? "show-basic" : "hide-basic"}>기본</div>
                <div onClick={onClickToggle} className={active ? "show-detail" : "hide-detail"}>상세</div>
            </div>
        </Wrap>
    )
};

export default Toggle;

const Wrap = styled.div`
.Toggle-Wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 70px;
    background-color: #E0E0E0;
    border-radius:50px;
    margin: 0 auto;
    .show-basic{
        background-color: #E0E0E0;
        border-radius: 50px;
        width: 50%;
        height: 80%;
        font-size: 24px;
        font-weight: bold;
        cursor:pointer;
    }
    .hide-basic{
        background-color: white;
        border-radius: 50px;
        width: 50%;
        height: 80%;
        font-size: 24px;
        font-weight: bold;
        cursor:pointer;
    }
    .show-detail{
        background-color: white;
        border-radius: 50px;
        width: 50%;
        height: 80%;
        font-size: 24px;
        font-weight: bold;
        cursor:pointer;
    }
    .hide-detail{
        background-color: #E0E0E0;
        border-radius: 50px;
        width: 50%;
        height: 80%;
        font-size: 24px;
        font-weight: bold;
        cursor:pointer;
    }
}
`