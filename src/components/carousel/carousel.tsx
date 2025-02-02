import Link from 'next/link';
import { GridTileImage } from '../grid/tile';
import { ProductsList } from '@/interfaces/product/product';

export async function Carousel() {
    const products = ProductsList;

    if (!products?.length) return null;

    const carouselProducts = [...products, ...products, ...products];

    return (
        <div className="w-full overflow-x-auto pb-6 pt-1 no-scrollbar">
            <ul className="flex animate-carousel gap-4">
                {carouselProducts.map((product, i) => (
                    <li
                        key={`${product.handle}${i}`}
                        className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                    >
                        <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.price,
                                    currencyCode: 'usd'
                                }}
                                src={product.imageUrl}
                                fill
                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
