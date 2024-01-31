import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
    return (
        <>
            <p>Landing Page (Unprotected)</p>
            <div>
                <Link href="/sign-in" >
                    <Button>Login</Button>
                </Link>
                <Link href="/sign-up" >
                    <Button>Register</Button>
                </Link>
            </div>
        </>
    )
}