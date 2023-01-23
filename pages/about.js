import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import data from '../data/employees.json'
import Link from 'next/link'
import { useState } from 'react'
import Card from '@/components/Card/about'
import styles from '@/styles/About.module.css'

export default function About() {
    const [information, setInformation] = useState([...data])

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div class="nav-bar">
                    <div class="nav-title">Raccoon City Institute of Technology</div>
                    <div class="nav-button">
                        <Link className={styles.link} href="..">Home</Link>
                    </div>
                </div>
                {
                    information && information.map((info, index) => {
                        return (
                            <Card 
                                class="employee-card"
                                key={index} 
                                name={info.name} 
                                position={info.position}
                                tel={info.tel}
                                email={info.email} 
                                colourCard="#f7b32b"
                                colourInfo="#EFCA08"
                                colourBorder="#2B4570"
                                font="17px"
                                fontColour="#2B4570"
                            />
                        )
                    })
                }
            </main>
        </>
    )
}