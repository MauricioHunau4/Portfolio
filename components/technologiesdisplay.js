import { Box, Button, IconButton, Img, LinkBox, LinkOverlay, Text, textDecoration, useColorModeValue } from "@chakra-ui/react"
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


export const WorkExperience = ({ title, icon, company, date, page }) => {
    const inactiveColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.900',)
    console.log(icon)
    return (
        <Box
            background={inactiveColor}
            borderRadius='lg'
            position={"relative"}
            p={5}
            boxShadow={'0 0 5px 0 rgba(0, 0, 0, 1)'}
            color={useColorModeValue('white', 'black',)}
            textAlign='left'
            display={{ md: 'flex' }}
            gap={3}
        >
            <Img src={icon} alt="Icon company" width={20} height={20}></Img>
            <Box display='flex' flexDir='column' alignItems='flex-start' w={'full'} justifyContent='space-between'>
                <Box>
                    <Text fontSize={20}>{company}</Text>
                    <Text >{title}</Text>
                </Box>
                <Box display={'flex'} w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={12} color={useColorModeValue('white', 'gray.500',)}>{date}</Text>
                    {page !== '' && <Button as='a' href={page} title={'To' + title} background={'transparent'} height={'10px'} _hover={{ textDecor: 'underline' }} target="_blank" fontSize={12}  >Web</Button>}
                </Box>
            </Box>
        </Box>
    )
}