import { AnimatePresence, motion } from "framer-motion";
import { Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AiFillBulb, AiOutlineBulb } from 'react-icons/ai'


const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Box display='flex' justifyContent='right' gap={3}>
                <Box height={10}
                    width={2}
                    backgroundColor='black'
                    borderRadius='50%' />
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
                        onClick={toggleColorMode}>
                    </IconButton>
                </motion.div>
            </Box>
        </AnimatePresence>

    )
}
export default ThemeToggleButton