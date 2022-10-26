import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem, GridItemStyle } from '../components/technologiesdisplay'
import { technologiesForMap } from '../components/imagesForMap'

const Technologies = () => {
    return (
        <Container>
            <Heading as='h2' variant='page-title' align='center' css={{ fontFamily: "'Inter', sans-serif;" }} mt={9} width='100%' borderBottom='1px solid grey'>
                Technologies
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[2, 2, 3]} mb={4} spacing={10} align='center' mt={7}>
                    {technologiesForMap.map(technologies => {
                        return <GridItem photo={technologies.photo} title={technologies.title} key={technologies.title} />
                    })}
                </SimpleGrid>
            </Section>
        </Container>
    )
}

export default Technologies

