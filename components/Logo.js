import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: flex;
    height: 30px;
    align-items: center;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: scale(0.9, 0.9);
    }
`

const Logo = () => {
    const logo = `/images/MH${useColorModeValue('', '-dark')}.png`;
    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={logo} width={30} height={30} alt='logo' />
                    <Text
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                        fontFamily="'Inter', sans-serif;"
                        fontWeight="Bold"
                        ml={3}
                    >
                        Mauricio Hunau
                    </Text>
                </LogoBox>
            </a>
        </Link>

    )
}
export default Logo