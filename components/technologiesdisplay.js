import { Box, Button, IconButton, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'
import { Tooltip } from '@chakra-ui/react'

export const GridItem = ({ title, photo }) => (
    <Box>
        <Image src={photo}
            alt={title}
            className='grid-item-thumbnail'
            loading="lazy"
            placeholder="blur"
            width={90}
            height={90}
        />
        <Text>{title}</Text>
    </Box>
)


export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }`
    } />
)

export const GridProjects = ({ title, photo, comment, link, github }) => (
    <Box width='100%'>
        <Text fontSize='2xl' mb={2} fontFamily="'Inter', sans-serif;">{title}</Text>
        <Box position='relative' cursor='pointer' css={'&:hover {img{filter:blur(5px)} .displayButtons{display:block}}'}>
            <Box display='none' className="displayButtons">
                <Box
                    position='absolute'
                    zIndex={1}
                    display='flex'
                    gap={4}
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'>
                    <Link href={github}>
                        <a target='_blank'>
                            <Tooltip label='Github'>
                                <IconButton icon={<AiFillGithub />} />
                            </Tooltip>
                        </a>
                    </Link>
                    {link !== undefined &&
                        (<Link href={link}>
                            <a target='_blank'>
                                <Tooltip label='Page site'>
                                    <IconButton icon={<TbWorld />} />
                                </Tooltip>
                            </a>
                        </Link>
                        )}
                </Box>
            </Box>
            <Image
                src={photo}
                alt={title}
                placeholder="blur"
                loading="lazy"
                width={350}
                height={200}
            />
        </Box>
        <Text mt={2} fontFamily="'Inter', sans-serif;">{comment}</Text>
    </Box>
)