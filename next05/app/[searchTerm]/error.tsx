'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';

export default function Error({
    error, reset,
} : {
    error: Error;
    reset: () => void;
}){
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error]);


    return (
        <main>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try Again
            </button>
            <p>or go back to 
                <Link href="/">Home</Link>
            </p>
        </main>
    )
}

