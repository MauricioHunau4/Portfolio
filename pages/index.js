import {
  Container,
  Box,
  Heading,
  Button,
  Text,
  Image
} from '@chakra-ui/react'
import Section from '../components/section'
import { SlSocialInstagram } from 'react-icons/sl'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SiHackerrank } from 'react-icons/si'


const Home = () => {
  const profile = '/Mauricio.jpg'
  return (<Container>
    <Box display={{ md: 'flex' }} flexDirection='row' alignItems='center' mt={9}>
      <Box css={{ borderRadius: !'50%' }}
      >
        <Image
          borderRadius='50%'
          mt={2}
          borderColor='whiteAlpha.800'
          borderWidth={2}

          borderStyle='solid'
          maxWidth='100p'
          display='inline-block'
          src={profile}
          alt='Profile picture'
          width={90}
          height={90}
        />
      </Box>
      <Box flexGrow={1} align='right'>
        <Heading as='h2' variant='page-title' css={{ fontFamily: "'Inter', sans-serif;" }} >
          Mauricio Hunau
        </Heading>
        <p>Full stack web developer</p>
      </Box>
    </Box>
    <Section delay={0.1}>
      <Text fontSize='3xl' mt={5} fontFamily="'Inter', sans-serif;" align='center' width='100%' borderBottom='1px solid grey'>
        Biography
      </Text>
      <Box display='flex' flexDirection='column' gap={4} mt={4}>
        <Box display='flex' gap={2}>
          <p><strong>1999 -</strong></p>
          <p>Born on october 4th Buenos Aires, Argentina</p>
        </Box>
        <Box display='flex' gap={2}>
          <p><strong>2017 -</strong></p>
          <p>Finished high school</p>
        </Box>
        <Box display='flex' gap={2}>
          <p><strong>2019 -</strong></p>
          <p>Studied on my own and doing projects since</p>
        </Box>
      </Box>
      <Text fontSize='3xl' mt={5} fontFamily="'Inter', sans-serif;" align='center' width='100%' borderBottom='1px solid grey'>
        About
      </Text>
      <Box mt={4} >
        <Text css={{ textIndent: '30px' }}>
          I&apos;m a full stack web developer in Argentina with passion for developing web apps and learnging about new technologies. I love solving puzzles and problems with code and to come up with new ideas to craft and create. My goals are to become a experience full stack developer and learning new technologies. When I&apos;m not in the computer I go for a jog, 7km to stay healthy.
        </Text>
      </Box>
      <Text fontSize='3xl' mt={5} fontFamily="'Inter', sans-serif;" align='center' borderBottom='1px solid grey' width='100%'>
        Socials
      </Text>
      <Box display='flex' flexWrap='wrap' gap={3} justifyContent='center' mt={5} >
        <Button as='a' href='https://www.instagram.com/maurihunau/' target='_blank' gap={3}>
          <SlSocialInstagram />
          <p>Instagram</p>
        </Button>
        <Button as='a' href='https://github.com/MauricioHunau4' target='_blank' gap={3}>
          <AiFillGithub />
          <p>Github</p>
        </Button>
        <Button as='a' href='https://www.linkedin.com/in/mauriciohunau/' target='_blank' gap={3}>
          <AiFillLinkedin />
          <p>LinkedIn</p>
        </Button>
        <Button as='a' href='mailto:maurih@live.com' target='_blank' gap={3}>
          <AiOutlineMail />
          <p>Email</p>
        </Button>
        <Button as='a' href='https://www.hackerrank.com/maurihunau4' target='_blank' gap={3}>
          <SiHackerrank />
          <p>Hackerrank</p>
        </Button>
      </Box>
    </Section>
  </Container>
  )
}

export default Home