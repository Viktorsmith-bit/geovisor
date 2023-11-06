'use client'

import dynamic from 'next/dynamic';

const MapViewer = dynamic(()=>import('./map'), {ssr: false});

export default function Home() {

    return (
        <MapViewer />
    )
}