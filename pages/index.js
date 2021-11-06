import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Solidity Smartcontract Example
      </Typography>
      <Stack spacing={2} direction="row">
        <Link href="/hello-world">
          <Button variant="outlined">Hello world</Button>
        </Link>
      </Stack>
    </Box>
  );
}
