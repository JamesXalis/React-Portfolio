import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            refForm.current,
            
        )
        .then(
            () => {
                alert ('Message successfully sent!')
                window.location.reload(false)
            },
            () =>{
                alert ('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        If you have any other request, question, or if you would like to schedule a meeting, don't hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref ={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                    </li>
                                    <li className='half'>
                                        <input
                                            type='Subject'
                                            name='text'
                                            placeholder='subject'
                                            required
                                        />
                                        </li>
                                        <li className='half'>
                                            <textarea 
                                            placeholder='Message' 
                                            name='message' 
                                            required>
                                            </textarea>
                                        </li>
                                        <li>
                                            <input type='submit' className='flat-button' value='SEND'/>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                    </div>
                    <div className='info-map'>
                        James Xalis,
                        <br/>
                        United States
                        <br/>
                        Phoenix Arizona
                        <br/>
                        <span>jamesxalis@icloud.com</span>
                    </div>
                    <div className='map-warp'>
                        <MapContainer center={[33.4517, 112.0745]} zoom={13}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                            <Marker position = {[33.4517, 112.0745]}>
                                <Popup>James livees here, come over for a cup of coffe :) </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <Loader type='pacman' />
            </>
            )
}

            export default Contact