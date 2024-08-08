import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem,} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import NextLink from "next/link";

import {siteConfig} from "@/config/site";
import {Logo, Order,} from "@/app/components/icons";

export const Navbar = () => {
    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="border rounded-sm">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">淘号网</p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden md:flex">
                    <NextLink
                        href={siteConfig.pages.orders.search}
                    >
                        <Button
                            color="default"
                            variant="bordered"
                            endContent={<Order/>}
                        >
                            订单查询
                        </Button>
                    </NextLink>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};
