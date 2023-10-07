# Welcome GEMINI Team to the Tuned-Do Project

Welcome to Tuned-Do, a project designed to help you manage tasks and stay organized. This README will guide you through the steps to set up and run the project on your local machine.

This project provides a MOBILE application built with React Native and Expo as requested on this link: https://geminisports.notion.site/geminisports/Sr-Full-Stack-Engineer-Technical-Evaluation-811e1b6bd8ca4f5cb893bec29e4531ab.

<img width="577" alt="Screenshot 2023-10-06 at 23 19 02" src="https://github.com/lucaspaulodev/tuned-do-mobile/assets/61305960/7de497f2-526e-4192-bd75-369dbfaeaffc">

## Getting Started

To run this project on your local machine, follow these steps:

### BEFORE TO START, RUN THE API:

1. Go to this [repository](https://github.com/lucaspaulodev/nestjs-gql), and follow the steps on its README to run the API of this Mobile app.
2. TIP: Install Expo Go on your smartphone to scan the QR CODE that will be provided on your terminal after finishing this guide. This will give you a better experience with the application

### 1. Clone the Repository

```bash
git clone https://github.com/lucaspaulodev/tuned-do-mobile.git
cd tuned-do-mobile
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed on your machine. Then, run the following command to install project dependencies:

```bash
npm install
```

### 3. Run the APP

1. Find the `.env.example` file and rename it to `.env`. Open it and assign a value to `EXPO_API_PORT=` (THE SAME THAT YOU ASSIGNED ON API_PORT FROM BACKEND PROJECT).
2. If you followed the previous step, just fill in `EXPO_IP_ADRESS` with your IPv4. If you don't what is your IPv4, check this [link](https://www.avast.com/c-how-to-find-ip-address).
3. Run the command:

```bash
npm run start
```

After running this command, you'll able to see on your terminal which port your Mobile APP is running, And how you can interact with it:

<img width="577" alt="Screenshot 2023-10-06 at 23 19 02" src="https://github.com/lucaspaulodev/tuned-do-mobile/assets/61305960/73b20ef9-edee-4dcc-95f3-cd0f6db56721">


