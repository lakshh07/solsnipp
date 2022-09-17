import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

function ViewSnippet({ index, snippet, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
        <ModalOverlay backdropFilter="blur(3px)" />
        <ModalContent
          maxH={"600px"}
          bg={"rgba(3, 5, 13, 0.9)"}
          boxShadow={
            "rgb(8 11 29 / 40%) 0px 5.13699px 7.70548px, rgb(15 15 15 / 10%) 0px 20.5479px 20.5479px -15.411px"
          }
          className={"white-scroll"}
        >
          <ModalHeader fontWeight={700}>
            {snippet && snippet[index]?.label}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={"scroll"}>
            {snippet &&
              snippet[index]?.body.map((content, index) => {
                return <p key={index}>{content}</p>;
              })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewSnippet;
