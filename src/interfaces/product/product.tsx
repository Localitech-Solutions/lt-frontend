export interface Product {
    name: string;
    title: string;
    price: string;
    imageUrl: string;
    handle: string;
}

export const firstProduct: Product = {
    name: 'Producto 1',
    title: 'Producto 1',
    price: '200',
    imageUrl: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-alternator-stator-parts-png-image_13146292.png',
    handle: '/',
}

export const secondProduct: Product = {
    name: 'Producto 2',
    title: 'Producto 2',
    price: '200',
    imageUrl: 'https://png.pngtree.com/png-clipart/20231118/original/pngtree-spare-parts-for-cars-iron-photo-png-image_13611375.png',
    handle: '/',
}

export const thirdProduct: Product = {
    name: 'Producto 3',
    title: 'Producto 3',
    price: '200',
    imageUrl: 'https://png.pngtree.com/png-clipart/20231118/original/pngtree-spare-parts-for-cars-iron-photo-png-image_13611375.png',
    handle: '/',
}

export const ProductsList:Product[] = [firstProduct, secondProduct, thirdProduct];