import "@/styles/globals.css";
import React from "react";

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
