const sizingOptions = {
    sneakers: [37,38,39,40,41,42,43,44,45,46,47],
    jackets: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    shirts: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    dress: [32,34,36,38,40,42,44,46],
    sweaters: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    vests: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    tshirts: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
};

const productTypes = {
    HATS: 1,
    SNEAKERS: 2,
    JACKETS: 3,
    SHIRTS: 4,
    DRESS: 5,
    SWEATERS: 6,
    VESTS: 7,
    TSHIRTS: 8
}

export const mapSizeOptionsByProductType = (productType) => {
    switch (productType) {
        case productTypes.HATS:
            return ['One size'];
        case productTypes.SNEAKERS:
            return sizingOptions.sneakers;
        case productTypes.JACKETS:
            return sizingOptions.jackets;
        case productTypes.SHIRTS: 
            return sizingOptions.shirts;
        case productTypes.DRESS:
            return sizingOptions.dress.map(i => `EU ${i}`);
        case productTypes.SWEATERS:
            return sizingOptions.sweaters;
        case productTypes.VESTS:
            return sizingOptions.vests;
        case productTypes.TSHIRTS:
            return sizingOptions.tshirts
        default:
            break;
    }
}