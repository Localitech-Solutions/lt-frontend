import { GridTileImage } from './tile';
import Link from 'next/link';
import { firstProduct, secondProduct, thirdProduct, Product } from '@/interfaces/product/product';

function ThreeItemGridItem({
    item,
    size,
    priority
}: {
    item: Product;
    size: 'full' | 'half';
    priority?: boolean;
}) {
    return (
        <div
            className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
        >
            <Link
                className="relative block aspect-square h-full w-full"
                href={`/product/${item.handle}`}
                prefetch={true}
            >
                <GridTileImage
                    src={item.imageUrl}
                    fill
                    sizes={
                        size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
                    }
                    priority={priority}
                    alt={item.title}
                    label={{
                        position: 'bottom',
                        title: item.title as string,
                        amount: item.price,
                        currencyCode: "usd"
                    }}
                />
            </Link>
        </div>
    );

}

export async function ThreeItemGrid() {
    return (
        <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
            <ThreeItemGridItem item={firstProduct} size='full'></ThreeItemGridItem>
            <ThreeItemGridItem item={secondProduct} size='half'></ThreeItemGridItem>
            <ThreeItemGridItem item={thirdProduct} size='half'></ThreeItemGridItem>
        </section>
    )
}
