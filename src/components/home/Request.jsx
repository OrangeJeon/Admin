import React, { useState } from "react";
import './request.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { confirmDID, getRequestListAPI } from "../../api/api";
import Modal from "./Modal";

export default function Request() {
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const openModal = (member) => {
        switch (member) {
            case 'member1':
                setModalOpen1(true);
                break;
            case 'member2':
                setModalOpen2(true);
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
            default:
                break;
        }
    }
    const [requestList, setRequestList] = useState([]);
    const getRequestList = async () => {
        const res = await getRequestListAPI();
        setRequestList(res);
        if (res.length == 0) {
            alert("no requests");
        }
    }

    const acceptRequest = async (account) => {
        const res = await confirmDID(account);
        if (res) {
            alert("성공적으로 수락이 진행되었습니다");
        }
    }

    return (
        <div className="request">
            <h3 className="retitle">Request to Accept <button className="Accept" onClick={getRequestList}>Check</button></h3>
            <table className="retable">
                <thead>
                    <tr className="retr">
                        <th className="reth">Customer</th>
                        <th className="reth">Date</th>
                        <th className="reth">Account</th>
                        <th className="reth">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {requestList.map((member, index) => (
                        <tr key={index} className="retr">
                            <td className="reuser">
                                <AssignmentIndIcon />
                                <span className="rename">{member.name}</span>
                            </td>
                            <td className="redate">{member.timestamp}</td>
                            <td className="redate">{member.account}</td>
                            <td className="remenu">{member.email}</td>
                            <td className="restatus">
                                <div className="buttonContainer">
                                    <button className="Accept" onClick={() => acceptRequest(member.account)}>Accept</button>
                                    <button className="Reject" onClick={() => openModal(`member${index + 1}`)}>Reject</button>
                                    <Modal open={index === 0 ? modalOpen1 : modalOpen2} close={() => closeModal(`member${index + 1}`)}>
                                        <div>
                                            <p><span className="boldText">"거절하시겠습니까?"</span></p>
                                        </div>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


