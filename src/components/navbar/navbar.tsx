import {
    Navbar,
    NavbarBrand,
    NavbarToggle,
    Flowbite
} from "flowbite-react";
import { gql } from "@apollo/client";
import { getClient } from "@/app/apollo.client";
import CartModal from "../cart/cart-modal";
import UserIconComponent from "../userIcon/userIcon";
import SearchBarComponent from "../searchBar/searchBar";

export async function NavbarComponent() {
    const USER_QUERY = gql`
        {
            userLogin(email: "jorgeadolfog79@gmail.com", password: "admin") {
                name
                email
            }
        }
    `;

    const { data } = await getClient().query({ query: USER_QUERY });
    const name = (data.userLogin) ? data.userLogin.name : "";
    const email = (data.userLogin) ? data.userLogin.email : "";

    return (
        <Flowbite>
            <Navbar fluid className="bg-zinc-900 p-4">
                <NavbarBrand href="/">
                    <div className="sm:h-10 sm:w-10 bg-amber-500 rounded-full mr-2 bg-logo bg-contain bg-no-repeat bg-bottom"></div>
                    <span className="self-center whitespace-nowrap text-3xl font-semibold text-white font-bebas font-thin md-display-none">All Terrain</span>
                    <span className="self-center ml-2 whitespace-nowrap text-xl font-semibold text-zinc-500 font-bebas font-thin md-display-none">1996</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <SearchBarComponent></SearchBarComponent>
                    <CartModal></CartModal>
                    <UserIconComponent name={name} email={email}></UserIconComponent>
                    <NavbarToggle />
                </div>
            </Navbar>
        </Flowbite>
    );
}
