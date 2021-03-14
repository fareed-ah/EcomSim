import React from 'react'
import { Text } from "@chakra-ui/react"

interface MenuItemsProps {

}

export const MenuItems: React.FC<MenuItemsProps> = ({ children }) => {
    return (
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
            {children}
        </Text>
    );
}
