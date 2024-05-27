import { URL } from "../const";

export const getRequestAccounts = async () => {
    try {
        const [account] = await window.ethereum.request({
            method: 'eth_requestAccounts',
        })
        return account;
    } catch (error) {
        return;
    }
}

export const getRequestListAPI = async () => {
    const account = await getRequestAccounts();
    console.log(account);
    const res = await fetch(`${URL}/requestList`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: account
        })
    })
    if (res.ok) {
        const data = await res.json();
        if (data.msg) {
            alert(data.msg);
            return [];
        }
        console.log(res);
        //setResponse(data);
        return data;
    } else {
        console.log("rejected");
    }
}

export async function confirmDID(account) {
    const res = await fetch(`${URL}/approveRequest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: account,
        })
    })
    if (res.ok) {
        //console.log(res);
        return true;
    } else {
        //console.log("rejected")
        return false;
    }
}
