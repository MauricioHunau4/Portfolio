import { AnimatePresence, motion } from "framer-motion";
import { Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AiFillBulb, AiOutlineBulb } from 'react-icons/ai'
import { useState } from "react";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    const [isVisible, setIsVisible] = useState(false)
    const handleColorMode = () => {
        setIsVisible(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 300)
        toggleColorMode()
    }

    return (
        <AnimatePresence mode='wait' initial={false}>
            <Box display='flex' justifyContent='right' gap={3}>
                <AnimatePresence>
                    {isVisible && <motion.div
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Box height={9}
                            width={2.5}
                            backgroundColor='black'
                            borderRadius='50%' />
                    </motion.div>}
                </AnimatePresence>
                <motion.div
                    style={{ display: 'inline-block' }}
                    key={useColorModeValue('light', 'dark')}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <IconButton
                        aria-label="Toggle theme"
                        colorScheme={useColorModeValue('blackAlpha', 'green')}
                        icon={useColorModeValue(<AiFillBulb />, <AiOutlineBulb />)}
                        onClick={handleColorMode}>
                    </IconButton>
                </motion.div>
            </Box>
        </AnimatePresence>

    )
}
export default ThemeToggleButton