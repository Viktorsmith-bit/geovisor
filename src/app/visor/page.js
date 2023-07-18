'use client'

import dynamic from 'next/dynamic';

const MapViewer = dynamic(()=>import('./index'), {ssr: false});

export default function Home() {

    return (
        <MapViewer />
    )
}