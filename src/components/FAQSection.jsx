import React from 'react'
import styled from 'styled-components'
import {About} from '../pages/style'


export default function FAQSection() {
    return (
        <Faq>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <div className='queston'>
                <h4>How do I start?</h4>
                <div className='answer'>
                <div className="faq-Line"></div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisincing
                        Necessittibus, neque.
                    </p>
                </div>
            </div>
            <div className='queston'>
                <h4>How do I do it?</h4>
                <div className='answer'>
                <div className="faq-Line"></div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisincing
                        Necessittibus, neque.
                    </p>
                </div>
            </div>
            <div className='queston'>
                <h4>What products do you offer?</h4>
                <div className='answer'>
                    <div className="faq-Line"></div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisincing
                        Necessittibus, neque.
                    </p>
                </div>
            </div>
        </Faq>
    )
}
 const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-Line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0 rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }

 `;