import React, { useContext, createContext } from "react";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const { contract } = useContract("YOUR_CONTRACT_ADDRESS");


  const address = useAddress();


  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );


  const publishCampaign = async (form) => {
    try {
      if (!contract) throw new Error("Contract object is undefined");
      if (!address) throw new Error("Wallet not connected");

      const data = await createCampaign({
        args: [
          address, // owner → now from wallet
          form.title,
          form.description,
          ethers.utils.parseEther(form.target.toString()), // parse target
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });

      console.log("Contract call success", data);
    } catch (error) {
      console.error("Contract call failure:", error);
    }
  };

  // get all campaigns
  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    return campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));
  };

  // get campaigns by connected user
  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    return allCampaigns.filter((campaign) => campaign.owner === address);
  };

  // donate
  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });
    return data;
  };

  // get donations of a campaign
  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    return donations[0].map((donator, i) => ({
      donator,
      donation: ethers.utils.formatEther(donations[1][i].toString()),
    }));
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);