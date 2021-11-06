import { useState } from "react";
import { ethers } from "ethers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import HelloWorld from "../../artifacts/contracts/HelloWorld.sol/HelloWorld.json";

// Cập nhật smart contract address sau khi deploy
const greeterAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

export default function HelloWorldPage() {
  const [greeting, setGreetingValue] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        HelloWorld.abi,
        provider
      );
      try {
        const data = await contract.greet();
        setGreetingValue(data);
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        greeterAddress,
        HelloWorld.abi,
        signer
      );
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }

  return (
    <Box component="div">
      <Stack sx={{ width: "100%" }} spacing={2}>
        {" "}
        <Alert severity="info">{greeting}</Alert>
        <Button onClick={fetchGreeting}>Fetch Greeting</Button>{" "}
        <TextField
          label="Outlined secondary"
          variant="outlined"
          color="secondary"
          focused
          onChange={(e) => setGreetingValue(e.target.value)}
        />
        <Button onClick={setGreeting}>Set Greeting</Button>
      </Stack>
    </Box>
  );
}
