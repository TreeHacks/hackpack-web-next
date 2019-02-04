import React from 'react'
import Link from 'next/link'
// import '../styles/main.scss'

export default () => (
    <div>
        <h1>Welcome to "Build my own Pokédex"</h1>
        <ul>
            <li><Link href='/add'><a>Add a Pokémon to my Pokédex</a></Link></li>
            <li><Link href='/view'><a>b</a></Link></li>
        </ul>
    </div>
)