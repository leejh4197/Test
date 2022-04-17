import React from 'react';
import styled from 'styled-components'
import './style.css'

const Test1 = () => {
    return (
        <Wrap>
            <h1>Test</h1>
            <div className='test-wrap'>
                {/* <input type="radio" id="toggle-slider"/>
                <label className='label-wrap' for="toggle-slider">
                    <div className='btn basic'>기본</div>
                    <div className='btn detail'>상세</div>
                </label> */
                }
               
                <div className='label-wrap'>
                    <div className="btn-wrap" >
                        <input type="radio" id="toggle-slider1" className='toggle-slider' name="btn" value="basic"/>
                        <label for="toggle-slider1" className='label basic'>
                            <div className='btn'>기본</div>
                        </label>
                    </div>
                    <div className="btn-wrap">
                        <input type="radio" id="toggle-slider2" className='toggle-slider' name="btn" value="detail"/>
                        <label for="toggle-slider2" className='label detail'>
                            <div className='btn'>상세</div>
                        </label>
                    </div>

                    <div className='whitebox'>
                    {/* 버튼슬라이드용 흰박슨 */}

                </div>
                </div>
               
            </div>
           
        </Wrap>
    );
};

export default Test1;
const Wrap = styled.div `

position:relative;`;
    
    