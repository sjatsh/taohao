import "@/styles/globals.css";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import {fontSans} from "@/config/fonts";
import {Navbar} from "@/app/components/navbar";
import {Toaster} from "react-hot-toast";
import React from "react";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import TrpcContext from "@/context/trpc";
import {Providers} from "@/app/providers";

export default function Layout(
    {
        children,
    }: {
        children: React.ReactNode;
    }
) {

    return (
        <>
            <p className="pb-8 pl-4 text-gray-500 text-lg font-bold">订单详情</p>
            {children}
        </>
    );
}
