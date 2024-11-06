import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import NextLink from 'next/link'

import { siteConfig } from '@/config/site'
import { Android, Logo, Order } from '@/app/components/icons'

export const Navbar = () => {
  return (
    <NextUINavbar className="rounded-sm border" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">淘号网</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:flex sm:basis-full" justify="end">
         {/* <NavbarItem className="md:flex">
          <NextLink href={siteConfig.pages.app}>
            <Button color="default" endContent={<Android />} variant="bordered">
              国外APP
            </Button>
          </NextLink>
        </NavbarItem> */}
        <NavbarItem className="md:flex">
          <NextLink href={siteConfig.pages.orders.search}>
            <Button color="default" endContent={<Order />} variant="bordered">
              订单查询
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
