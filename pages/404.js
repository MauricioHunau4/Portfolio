import { Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <Container >
            <Heading as='h1' css={{ fontFamily: "'Inter', sans-serif;" }} mb={4}> Not Found</Heading>
            <Text >I think you enter the void</Text>
            <Text >The page you&apos;re looking for was not found</Text>
            <Divider my={6} />
            <NextLink href='/'>
                <Button>Go back ⮞</Button>
            </NextLink>
        </Container>
    )
}

export default NotFound;