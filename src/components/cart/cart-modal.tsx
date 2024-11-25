'use client';

import { useState } from "react";
import CartComponent from "./cart-open";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Fragment } from "react";

export default function CartModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mr-3">
                <button aria-label="Open cart" onClick={() => { setIsOpen(true) }} className="focus:border-none focus:outline-none">
                    <CartComponent />
                </button>
            </div>
            <Transition show={isOpen}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-100"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-100"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-6 backdrop-blur-xl md:w-[390px] border-neutral-700 bg-black/80 text-white">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold">My Cart</p>
                                <button aria-label="Close cart" onClick={() => setIsOpen(false)}>

                                </button>
                            </div>
                            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                                <ShoppingCartIcon className="h-16" />
                                <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}