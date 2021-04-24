
import { Box, Select } from '@material-ui/core';
import React from 'react'

interface ProductCategoriesProps {

}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ }) => {
    return (
        <Box>
            <Select placeholder="Select your product categories">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </Box>
    );
}