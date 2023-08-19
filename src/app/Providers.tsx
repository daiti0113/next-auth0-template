import { UserProvider } from "@auth0/nextjs-auth0/client"

type ProvidersProps = {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
