#!/bin/sh
# this script installs the needed dependencies to make the project work

#!/bin/bash

# Function to display messages
echo_message() {
  echo "============================"
  echo $1
  echo "============================"
}

# Ensure the script is run from the top-level directory
if [ ! -d "frontend" ] || [ ! -d "server" ]; then
  echo "Please run this script from the top-level directory containing 'frontend' and 'server' directories."
  exit 1
fi

# Frontend setup
echo_message "Setting up frontend dependencies"
cd frontend || exit
npm install react

# Backend setup
echo_message "Setting up backend dependencies"
cd ../server || exit

# Create virtual environment
echo_message "Creating virtual environment"
python3 -m venv venv

# Activate virtual environment
echo_message "Activating virtual environment"
source venv/bin/activate

# Install backend dependencies
echo_message "Installing backend dependencies"
pip install -r requirements.txt

# Deactivate virtual environment
echo_message "Deactivating virtual environment"
deactivate

# Navigate back to the top-level directory
cd ..

echo_message "Setup complete"
