'use client';

import { Avatar } from "flowbite-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface UserProps {
    email: string;
    name: string;
}

export default function UserIconComponent(props: UserProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { name, email } = props;

    return (
        <>
            <div>
                <button onClick={() => setIsOpen(true)} className="focus:outline-none">
                    <Avatar className="border-grey-100 " alt="User settings" img="https://i1.sndcdn.com/artworks-000363576231-5amzpp-t500x500.jpg" rounded bordered />
                </button>
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
                                    <p className="text-lg font-semibold">{name}</p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </div>
        </>
    );
}