## Desciption

這是一個利用`React, Fastapi, ChatGPT`實現遠端多人 TRPG 的專案。目前對外網的連結是藉由`ngrok`向外暴露 port，讓遠端朋友可以藉由 ngrok 提供的網址連入本地主機，但這還會要多一些額外的步驟，如果有人知道其他更優雅的手段達成類似的效果，非常歡迎一起討論看看。

This is a project using `React, Fastapi, ChatGPT` to reach remoting multi-player TRPG. I use `ngrok` to export local ports to allow friends access my local service.

## Usage

#### Create Role

- You can create your own character and then submit.
- You can set multiple skills splited them.
- You can also see the characters created by others on RoleList.

#### Start Game

- Once everyone set their characters, any one of you can press start button. TRPG will start with a brief description of your party and give you the starting statement.

#### Send Command

- Players can write down their action and submit. The system will respend in about 10 seconds once all players finished commands.

#### Reset Game

- If you want to restart a new game, you can press reset button and then refresh the page.

## Setup

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

  version: "2"
  authtoken: XXXXXXX
  tunnels:
  &ensp;&ensp; frontend:
  &ensp;&ensp;&ensp;&ensp; proto: http
  &ensp;&ensp;&ensp;&ensp; addr: 3000
  &ensp;&ensp; backend:
  &ensp;&ensp;&ensp;&ensp; proto: http
  &ensp;&ensp;&ensp;&ensp; addr: 5000

  - Once you setup, you can use `ngrok start --all` to start the service and paste the url forwarding to port 5000(which is the port of our backend) to `frontend\src\api\index.js` like
    `const url = 'https://1b5f-86-187-227-43.eu.ngrok.io/roleGame'`
  - Enjoy your game with friends by sharing the url forwarding to 3000 (port of frontend)!

## Customization

- There are some prompts in `backend\src\py_libs\objects\prompts.py`. You can easily change them or add your new one.
- If you want to switch to English version, don't forget also modify the starting intro in `backend\src\py_libs\controllers\RoleGameController.py -> _get_start_intro()`
