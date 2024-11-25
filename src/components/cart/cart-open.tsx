import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function CartComponent() {
    return (
        <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-grey-100 transition-colors">
            <ShoppingCartIcon
                className='h-4 transition-all ease-in-out hover:scale-110'
            />
        </div>
    )
}