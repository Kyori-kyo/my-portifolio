'use client'
import { ChakraProvider } from '@chakra-ui/react'
type Props = { children: React.ReactNode }

export const Providers = ({ children }: Props) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    );
}