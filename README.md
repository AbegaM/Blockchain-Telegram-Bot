# Blockchain Telegram Bot Project


## Getting Started
 * These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

### Create Your Bot 
 1. Open your telegram and search for Bot Father 
 2. Type the /newbot command and create your bot
 3. After creating the bot, you will be provided with bot token

### Installation
 1. Clone the repo
    ``` 
     git clone https://github.com/AbegaM/Blockchain-Telegram-Bot.git
    ``` 
 2. Install NPM packages
    ``` 
     npm install
    ```   
### Environments
 1. Create your .env file

    ``` 
     .env
    ```
 2. Add your environment variables in the .env file you created
    
    Example
    ```
      BOT_TOKEN=123454:adflasdfasdf
    ```
## Running code
 * Running code in production environment
    ``` 
     npm run start
    ```
 * Running code in development environment (With nodemon)
    ``` 
     npm run start:dev 
    ```
 * Note: when running in development environment you will need nodemon installed in your machine and if you 
         dont have nodemon installed run  **npm i nodemon**  


## Built With
* [NodeJS](https://nodejs.org/en/)
* [Telegraf](https://telegraf.js.org/)   

