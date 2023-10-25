import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Section from '../components/section';
import { work } from '../components/constants';
import { WorkExperience } from '../components/technologiesdisplay';

function Work() {
    return (
        <Box>
            <Heading
                as='h2'
                variant='page-title'
                align='center'
                css={{ fontFamily: "'Inter', sans-serif;" }}
                mt={9}
                width='100%'
                borderBottom='1px solid grey'>
                Experience
            </Heading>
            <Section delay={0.1}>
                <Box mt={5}>
                    <SimpleGrid columns={[1, 1, 2]} mb={4} spacing={10} align='center'>
                        {work.map(work => {
                            return <WorkExperience key={work.id} title={work.title} icon={work.icon} company={work.company} date={work.date} page={work.page} />
                        })}
                    </SimpleGrid>
                </Box>
            </Section>
        </Box>
    );
}

export default Work;
