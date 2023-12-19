
# Peekup Admin Panel

The Peekup Admin Panel is a web-based application designed to facilitate the efficient management and tracking of a fleet of cabs within a specified geographic area. The system allows administrators to monitor and control various aspects of the Peekup service, including user details, driver information, and real-time cab tracking.

## Table of Contents
- [Development Branch](#Development-Branch)
- [Build for Production](#Build-for-Production)


## Development Branch

**Important: Development work should be carried out on the `dev` branch.**

Before you start working on new features or bug fixes, make sure to switch to the `dev` branch:

### Switch to the `dev` Branch

```bash
git checkout dev-branch
```

This ensures that you are working on the latest development codebase.

**Update the dev Branch**
```bash
git pull origin dev-branch
```
This fetches the latest changes from the remote dev branch and updates your local branch.






## Getting Started

Clone the project

```bash
  git clone https://github.com/Peek-up/peekup-admin-panel.git
```

## Install dependencies

```bash
  npm install
```

## Start the server

```bash
  npm run start
```




## Configuration

To run this project, you need to set up the following environment variables in your .env file:

1. `API_KEY`
   - Description: Your API key for accessing external services.
   - Example: `ABC123XYZ`

2. `REACT_APP_SOCKET_URL`
   - Description: The WebSocket URL for real-time communication.
   - Example: `wss://example.com/socket`

3. `REACT_APP_MAP_CENTER_LAT`
   - Description: Latitude coordinate for the initial center of the map.
   - Example: `37.7749`

4. `REACT_APP_MAP_CENTER_LNG`
   - Description: Longitude coordinate for the initial center of the map.
   - Example: `-122.4194`


## Node.js Version
Ensure you have Node.js installed. You can specify the Node.js version using a tool like Node Version Manager (nvm). Create a .nvmrc file in the project root and specify the desired version, for example:

```bash
v18.18.2
```

## Build for Production
```bash
npm run build
```

This will generate an optimized production build in the build directory.




