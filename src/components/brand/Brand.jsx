import React from 'react'
import G from '../../assets/google.png'
import A from '../../assets/atlassian.png'
import D from '../../assets/dropbox.png'
import S from '../../assets/shopify.png'
import Sl from '../../assets/slack.png'
const Brand = () => {
  return (
    <div>
      <div className='flex space-x-10 mt-16 justify-center items-center'>
    <img src={G}></img>
    <img src={A}></img>
    <img src={D}></img>
    <img src={S}></img>
    <img src={Sl}></img>
    </div>
    </div>
  )
}

export default Brand