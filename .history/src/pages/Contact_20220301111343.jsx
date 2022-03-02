import React from 'react'
import Button from '../components/common/button'

export default function Contact() {
  const arrContact = ['Facebook','Github', 'LinkedIn', 'Zalo', 'Twitter']
  return (
    <div className="contact">
    <ul className="contact__list">
    {
      arrContact.map((e,id)=>(
        <Link to={}
      ))
    }
    </ul>
    </div>
  )
}
