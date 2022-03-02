import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/common/button'

export default function Contact() {
  const arrContact = ['Facebook','Github', 'LinkedIn', 'Zalo', 'Twitter']
  return (
    <div className="contact">
    <ul className="contact__list">
    {
      arrContact.map((e,id)=>(
        <li className="contact__item">

          <Link to={}/>
        </li>
      ))
    }
    </ul>
    </div>
  )
}
