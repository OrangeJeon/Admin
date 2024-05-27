import React, { useState } from "react";
import './newmember.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Modal from './Modal';

export default function Newmember({ name1, job1, email1, metamask1}) {
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);

    const openModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(true);
                break;
            case 'member2':
                setModalOpen2(true);
                break;
            case 'member3':
                setModalOpen3(true);
                break;
            default:
                break;
        }
    }

    const closeModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(false);
                break;
            case 'member2':
                setModalOpen2(false);
                break;
            case 'member3':
                setModalOpen3(false);
                break;
            default:
                break;
        }
    }

    return (
        <div className="newmember">
            <span className="newtitle">New Join Member</span>
            <ul className="newlist">
                <li className="newitem">
                    <div className="newuser">
                        <span className="newname">{name1}</span>
                        <span className="newteam">{job1}</span>
                        
                    </div>
                    <button className="newbutton" onClick={() => openModal('member1')}>
                        <AssignmentIndIcon/>Info
                    </button>
                    <Modal open={modalOpen1} close={() => closeModal('member1')} header="Customer Information">
                        <div>
                            <p><span className="boldText">Name:</span> {name1}</p>
                            <p><span className="boldText">Job:</span> {job1}</p>
                            <p><span className="boldText">Email:</span> {email1}</p>
                            <p><span className="boldText">Metamask:</span>{metamask1}</p>
                        </div>
                    </Modal>
                </li>
            </ul>
        </div>
    )
}
