import React from 'react'
import './ShareNotice.css'

export default function ShareNotice ({ count, shareUrl, showClose }) {
  return <div className='ShareNotice'>
    <div className='ShareNotice-inner'>
      <div className='ShareNotice-content'>
        <h1>Ikke for at prale, men jeg har spottet {count} danske fugle! Hvor mange kan du finde?</h1>
        <div className='ShareNotice-callToAction'>
          <a href={shareUrl} target='_blank'>
            Del på Facebook
            <svg width='17px' height='17px' viewBox='0 0 17 17' version='1.1'>
              <g id='founds-with-modal' transform='translate(-313.000000, -605.000000)' fill='#41799E'>
                <path d='M324.365,622 L329.00004,622 C329.545291,622 330,621.552303 330,621.00004 L330,605.99996 C330,605.454709 329.552303,605 329.00004,605 L313.99996,605 C313.454709,605 313,605.447697 313,605.99996 L313,621.00004 C313,621.545291 313.447697,622 313.99996,622 L321.454,622 L321.454,616.034 L320,616.034 L320,613.609 L321.454,613.609 L321.454,612.154 C321.454,610.177 322.276,609 324.608,609 L326.55,609 L326.55,611.425 L325.337,611.425 C324.428,611.425 324.368,611.764 324.368,612.396 L324.365,613.609 L326.564,613.609 L326.306,616.034 L324.365,616.034 L324.365,622 Z'></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className='ShareNotice-image'>
        <img src='https://s3.brnbw.com/deal-with-it-bird.jpg' />
      </div>
      {showClose && <button className='ShareNotice-close'>
        <svg width='12px' height='12px' viewBox='0 0 12 12'>
          <path d='M4.12132034,6.24264069 L0.939339828,3.06066017 C0.353553391,2.47487373 0.353553391,1.52512627 0.939339828,0.939339828 C1.52512627,0.353553391 2.47487373,0.353553391 3.06066017,0.939339828 L6.24264069,4.12132034 L9.4246212,0.939339828 C10.0104076,0.353553391 10.9601551,0.353553391 11.5459415,0.939339828 C12.131728,1.52512627 12.131728,2.47487373 11.5459415,3.06066017 L8.36396103,6.24264069 L11.5459415,9.4246212 C12.131728,10.0104076 12.131728,10.9601551 11.5459415,11.5459415 C10.9601551,12.131728 10.0104076,12.131728 9.4246212,11.5459415 L6.24264069,8.36396103 L3.06066017,11.5459415 C2.47487373,12.131728 1.52512627,12.131728 0.939339828,11.5459415 C0.353553391,10.9601551 0.353553391,10.0104076 0.939339828,9.4246212 L4.12132034,6.24264069 Z'></path>
        </svg>
      </button>}
    </div>
  </div>
}
