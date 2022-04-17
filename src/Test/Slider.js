import React from 'react'
import styled from 'styled-components'

const Slider = () => {

    return (
        <Wrap>
            <h1>Slider</h1>
            <div className='slider-wrap'>
            <div className='slider'>
                <input type='range' min="0" max="100" value="20"/>
            </div>
            <div class="value">100</div>
            </div>
        </Wrap>
    )
}

export default Slider;
const Wrap = styled.div `
    .slider-wrap{
        width: 50%;
        margin:0 auto;
        background-color: gray;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        .slider{
            height: 40px;
            width: 300px;
            display: flex;
            align-items: center;
            margin: 0 auto;
        }
        .slider input{
            height: 10px;
            width: 100%;
            -webkit-appearance: none;
            outline: none;
            background-color: #f2f2f2;

        }
    }
`
