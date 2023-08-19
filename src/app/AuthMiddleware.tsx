"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

type AuthMiddlewareProps = {
    children?: React.ReactNode
}

const publicRoutes = ["/"]
const checkIsPrivateRoute = (pathname: string) => !publicRoutes.includes(pathname)

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
    const { user, isLoading } = useUser()
    const pathname = usePathname()
    const router = useRouter()
    const needToRedirect = checkIsPrivateRoute(pathname) && !user

    useEffect(() => {
        if (!isLoading && needToRedirect) router.replace("/")
    }, [isLoading, needToRedirect, pathname, router])

    return (
        <>
            {needToRedirect ? <p>Loading...</p> : children}
        </>
    )
}
