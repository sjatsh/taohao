"use client";

import React from "react";
import {Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {AnnouncementIcon} from "@/app/components/icons";

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
                        <p>
                            【请仔细看商品详情介绍】
                        </p>
                        <p>
                            加载慢的请耐心等待一下下，不要重复下单，
                            漏单请联系客服补单（带下单邮箱）
                        </p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
