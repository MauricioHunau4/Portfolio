import Head from 'next/head'
import NavBar from '../NavBar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Mauricio's homepage" />
                <meta name="author" content="Mauricio Hunau" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/icon" href="./MHIcon.png" />
                <title>Mauricio Hunau | Portfolio</title>
            </Head>
            <NavBar path={router.asPath} />
            <Container maxW='container.md' pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main