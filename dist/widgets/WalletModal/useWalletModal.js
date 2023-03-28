import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};
export default useWalletModal;
