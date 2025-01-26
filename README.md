# Charity Donation System

The Charity Donation System is a decentralized application (DApp) built on the Thirdweb platform, allowing users to make transparent and secure donations to charitable organizations. The project consists of two main components: the frontend client and the smart contract deployment.

## Getting Started

To run the Charity Donation System locally, follow these steps:

### Prerequisites

- Node.js 22 or later installed on your system.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/JugalKothari/charity-donation-system.git
   ```

2. Navigate to the `client` directory and install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

3. Navigate to the `charitydonation` directory and install smart contract deployment dependencies:

   ```bash
   cd ../charitydonation
   npm install
   ```

### Deploy Smart Contract

1. After installing dependencies in the `charitydonation` folder, run the following command to deploy the smart contract:

   ```bash
   npx thirdweb deploy -t SECRET_KEY
   ```

   If you do not have a secret key, create a project on thirdweb, it will provide a new secret key for that project to you.

2. You will receive a link to deploy your smart contract on Thirdweb.

3. Copy the address of the deployed smart contract.

### Configure Frontend

1. Navigate to the `src/context/index.js` file in the `client` folder.

2. Paste the address of the deployed smart contract in the appropriate location.

3. Create a Thirdweb API and obtain a clientID and secret key.

4. Paste the clientID and secret key in the `index.js` file as well.

### Run Frontend

1. Navigate back to the `client` directory.

2. Run the following command to start the frontend development server:

   ```bash
   npm run dev
   ```

3. Access the Charity Donation System in your browser at [http://localhost:5173](http://localhost:5173).

## Technologies Used

### Frontend

- React v18.2
- React Router v6.23.0
- Tailwind CSS v3.4.3
- Vite v3

### Smart Contract Deployment

- Hardhat v2.13.0
- Thirdweb v5.12.0
- ethers.js v5
- dotenv v16.4.5

## Contact

For any inquiries or feedback, please contact [jugalprakashk19@gmail.com](mailto:jugalprakashk19@gmail.com).

---
