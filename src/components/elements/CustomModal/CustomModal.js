import React, {useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const CustomModal = ({showModal, title, icon, content, showFooter}) => {

    return (
        <Modal isOpen={showModal}>
            <div className="modal-header">
                <div className="modal-title">{title}</div>
            </div>
            <ModalBody>
                {content}
            </ModalBody>
        </Modal>
    )
}


export default CustomModal;
