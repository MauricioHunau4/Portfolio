import Logo from './Logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900',)

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? "#2c3e50" : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props => {
    const { path } = props
    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue("#FFFFFF40", "#2C3E5080")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                flexWrap='wrap'
                align='center'
                justify='space-between'>
                <Flex align='center' mr={5}>
                    <Heading as='h1' size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: ' none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem
                        href='/technologies'
                        path={path}>
                        Technologies
                    </LinkItem>
                    <LinkItem
                        href='/projects'
                        path={path}>
                        Projects
                    </LinkItem>
                </Stack>
                <Box flex={1} justifyContent='right' display='flex'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                vatiant='outline'
                                aria-label='Menu' />
                            <MenuList>
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link} >Home Page</MenuItem>
                                </NextLink>
                                <NextLink href='/technologies' passHref>
                                    <MenuItem as={Link} >Technologies</MenuItem>
                                </NextLink>
                                <NextLink href='/projects' passHref>
                                    <MenuItem as={Link} >Projects</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar