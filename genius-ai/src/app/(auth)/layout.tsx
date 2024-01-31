import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className='flex justify-center items-center w-full h-[100%]' >
            {children}
        </main>
    )
}