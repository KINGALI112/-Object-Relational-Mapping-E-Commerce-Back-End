// category model made compulsory
const { Category } = require('../models');

// array of objects for the categories
const categoryData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Shorts',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Shoes',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;