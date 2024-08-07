"use client";

import React from "react";
import {Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {AnnouncementIcon} from "@/app/components/icons";
import NextLink from "next/link";
import {siteConfig} from "@/config/site";

export default function Announcement() {
    const {isOpen, onOpen, onClose} = useDisclosure({defaultOpen: true});
    return (
        <>
            <div>
                <Button
                    color="default"
                    variant="bordered"
                    endContent={<AnnouncementIcon/>}
                    onPress={() => onOpen()}
                >
                    公告
                </Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">提示</ModalHeader>
                    <ModalBody>
                        <div>
                            【请仔细看商品详情介绍】
                        </div>
                        <div>
                            加载慢的请耐心等待一下下，不要重复下单，
                            漏单请联系客服补单（带下单邮箱）
                        </div>
                        <div className="mb-3">
                            客服Tg: <NextLink
                            target="_blank"
                            className="text-blue-600"
                            href={"https://t.me/" + siteConfig.TgName}
                        >
                            @{siteConfig.TgName}
                        </NextLink>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
        ;
}
