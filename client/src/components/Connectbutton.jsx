// components/Navbar.jsx
import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Connectbutton() {
  const address = useAddress();

  return (


      <div>
        <ConnectWallet
          theme="dark"
          btnTitle={address ? "Connected" : "Connect Wallet"}
          className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
        />
      </div>

  );
}