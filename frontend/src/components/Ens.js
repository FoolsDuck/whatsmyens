import React, { useEffect, useState } from "react";
import Web3Provider from "web3-react";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";

const ens = new ENS({ Web3Provider, ensAddress: getEnsAddress("1") });

export default function Ens() {
  useEffect(() => {
    ens.name("iam.alice.eth").setText("test", "Test record");
  }, []);

  return (
    <div>
      <h2>Upload your avatar here</h2>
    </div>
  );
}
