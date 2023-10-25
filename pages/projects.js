import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { oldestProjects, recentProjects } from '../components/constants';
import Section from '../components/section';
import { GridProjects } from '../components/technologiesdisplay';

const Projects = () => {
    return (<Box>
        <Heading
            as='h2'
            variant='page-title'
            align='center'
            css={{ fontFamily: "'Inter', sans-serif;" }}
            mt={9}
            width='100%'
            borderBottom='1px solid grey'>
            Projects
        </Heading>
        <Section delay={0.1}>
            <Box>
                <Heading
                    as='h3'
                    variant='section-title'
                    align='left'
                    css={{ fontFamily: "'Inter', sans-serif;" }}
                    mt={7}>
                    Recent
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} mb={4} spacing={10} align='center'>
                    {recentProjects.map(recent => {
                        return <GridProjects key={recent.id} title={recent.title} photo={recent.photo} comment={recent.comment} link={recent.link} github={recent.github} />
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
                    Oldest
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} mb={4} spacing={10} align='center'>
                    {oldestProjects.map(oldest => {
                        return <GridProjects key={oldest.id} title={oldest.title} photo={oldest.photo} comment={oldest.comment} link={oldest.link} github={oldest.github} />
                    })}
                </SimpleGrid>
            </Box>
        </Section>
    </Box>
    )
}

export default Projects