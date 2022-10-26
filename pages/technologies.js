import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/technologiesdisplay'
import { backEnd, frontEnd, languages, otherTools } from '../components/imagesForMap'

const Technologies = () => {
    return (
        <Container>
            <Heading as='h2' variant='page-title' align='center' css={{ fontFamily: "'Inter', sans-serif;" }} mt={9} width='100%' borderBottom='1px solid grey'>
                Technologies
            </Heading>
            <Section delay={0.1}>
                <Box>
                    <Heading
                        as='h3'
                        variant='section-title'
                        align='left'
                        css={{ fontFamily: "'Inter', sans-serif;" }}
                        mt={7}>
                        Front end
                    </Heading>
                    <SimpleGrid columns={[2, 2, 3]} mb={4} spacing={10} align='center' mt={7}>
                        {frontEnd.map(technologies => {
                            return <GridItem photo={technologies.photo} title={technologies.title} key={technologies.title} />
                        })}
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading
                        as='h3'
                        variant='section-title'
                        align='left'
                        css={{ fontFamily: "'Inter', sans-serif;" }}
                        mt={7}>
                        Back end
                    </Heading>
                    <SimpleGrid columns={[2, 2, 3]} mb={4} spacing={10} align='center' mt={7}>
                        {backEnd.map(technologies => {
                            return <GridItem photo={technologies.photo} title={technologies.title} key={technologies.title} />
                        })}
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading
                        as='h3'
                        variant='section-title'
                        align='left'
                        css={{ fontFamily: "'Inter', sans-serif;" }}
                        mt={7}>
                        Languages
                    </Heading>
                    <SimpleGrid columns={[2, 2, 3]} mb={4} spacing={10} align='center' mt={7}>
                        {languages.map(technologies => {
                            return <GridItem photo={technologies.photo} title={technologies.title} key={technologies.title} />
                        })}
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading
                        as='h3'
                        variant='section-title'
                        align='left'
                        css={{ fontFamily: "'Inter', sans-serif;" }}
                        mt={7}>
                        Other tools
                    </Heading>
                    <SimpleGrid columns={[2, 2, 3]} mb={4} spacing={10} align='center' mt={7}>
                        {otherTools.map(technologies => {
                            return <GridItem photo={technologies.photo} title={technologies.title} key={technologies.title} />
                        })}
                    </SimpleGrid>
                </Box>
            </Section>
        </Container>
    )
}

export default Technologies

