import React, {useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const CustomModal = ({showModal, title, icon, content, showFooter}) => {

    return (
        <Modal isOpen={showModal}>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
                {content}
            </ModalBody>
        </Modal>
    )
}




export default CustomModal;
