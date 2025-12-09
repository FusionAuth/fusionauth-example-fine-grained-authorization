import * as permify from "@permify/permify-node";

const permifyclient = permify.grpc.newClient({
  endpoint: "localhost:3478", // Replace with your Permify server URL
  cert: null, // Optional: SSL certificate
  insecure: true, // Set to false in production
  pk: null,
  certChain: null,
});

// Add environment variables
import * as dotenv from "dotenv";
dotenv.config();

console.log("abcl");
if (!process.env.clientId) {
  console.error('Missing clientId from .env');
  process.exit();
}
