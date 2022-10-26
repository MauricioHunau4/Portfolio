import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import Void from '../public/images/void.svg'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router} >
        <Container maxW="800px">
          <Box mt={5} mb={5} align='center'>
            <Void width={300} height={300} />
          </Box>
          <Component {...pageProps} key={router.route} />
        </Container>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
