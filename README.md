## Desciption

這是一個利用`React, Fastapi, ChatGPT`實現遠端多人 TRPG 的專案，目前預設為使用中文，但也內建了一些英文腳本可以輕鬆切換(見'Custmization')。目前對外網的連結是藉由`ngrok`向外暴露 port，讓遠端朋友可以藉由 ngrok 提供的網址連入本地主機，但這還會要多一些額外的步驟，如果有人知道其他更優雅的手段達成類似的效果，非常歡迎一起討論看看。如果這個專案對你有幫助，請給我點個星星支持我，感謝你~!

This is a project using `React, Fastapi, ChatGPT` to reach remoting multi-player TRPG. This project is default using chinese but can easily switch to English.(see below 'Custmization') I use `ngrok` to export local ports to allow friends access my local service. If it's helpful to you, don't hesitate to give me a star. Thank you!

## Usage

#### Create Role

- You can create your own character and then submit.
- You can set multiple skills splited them.
- You can also see the characters created by others on RoleList.
![C2](https://user-images.githubusercontent.com/25768669/227801125-b1ed0c10-5b8f-433d-a7f5-33ec15f870ff.PNG)
![C1](https://user-images.githubusercontent.com/25768669/227801134-00ff3343-7b4c-45fb-98c6-557b2b75b78a.PNG)

#### Start Game

- Once everyone set their characters, any one of you can press start button. TRPG will start with a brief description of your party and give you the starting statement.

#### Send Command

- Players can write down their action and submit. The system will respend in about 10 seconds once all players finished commands.
![S1](https://user-images.githubusercontent.com/25768669/227801147-4d61dfaf-3416-4d0c-bcd2-a1a747eb4cc5.PNG)

#### Reset Game

- If you want to restart a new game, you can press reset button and then refresh the page.
![SC1](https://user-images.githubusercontent.com/25768669/227801150-b555f12a-dab8-4ce0-8e26-5d5312e67c36.PNG)

## Setup
- Requirement
  - npm >= 6.14.13, you can install the newest one by following https://phoenixnap.com/kb/install-node-js-npm-on-windows
  - python >= 3.7

- installation
  - `cd frontend`
  - `npm install`
  - `cd ../backend`
  - `python -m venv ./py_env`
  - `source ./py_env/bin/activate`
  - `pip install -r ./requirements/requirments.txt`
  - put your api key in `backend\src\env.py`. If you don't have one, you can get one from https://platform.openai.com/account/api-keys
- lauch service
  1.  `cd frontend`
      `npm start`
  2.  `cd backend`
      `source ./py_env/bin/activate`
      `python -m src.main`
- export port to public

  - Install `ngrok`. You can follow this guideline easily signup an account to use `ngrok`. https://www.sitepoint.com/use-ngrok-test-local-site/
  - To use `ngrok` to export our ports, we need to set `ngrok.yml`. You can find the path by `ngrok config check`. If there is none, create one. We need to specify the port we want to export and token in it as following.

![image](https://user-images.githubusercontent.com/25768669/227801103-2eb501ca-06f9-4521-bf67-624e5da1b65d.png)


  - Once you setup, you can use `ngrok start --all` to start the service and paste the url forwarding to port 5000(which is the port of our backend) to `frontend\src\api\index.js` like
    `const url = 'https://1b5f-86-187-227-43.eu.ngrok.io/roleGame'`
  - Enjoy your game with friends by sharing the url forwarding to 3000 (port of frontend)!

## Customization

- There are some prompts in `backend\src\py_libs\objects\prompts.py`. You can easily change them or add your new one.
- If you want to switch to English version, don't forget also modify the starting intro in `backend\src\py_libs\controllers\RoleGameController.py -> _get_start_intro()`
