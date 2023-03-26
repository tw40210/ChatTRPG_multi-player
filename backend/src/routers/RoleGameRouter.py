from fastapi import APIRouter, BackgroundTasks

from typing import Dict, Any
from ..py_libs.controllers.RoleGameController import RoleGameController

# from ..py_libs.objects.RoleGameControl import RoleGameController
import time
import asyncio

import logging
router = APIRouter()
roleGameCotroller = RoleGameController()
simple_start_flag = False
cur_game_obj = None



@router.get("/")
def test_index():
    return {"data":"test OK!"}


@router.post("/createRole")
def create_role(role: dict):
    print(role)
    roleGameCotroller.createRole(role)
    return {"CreatedRole": role}

@router.get("/fetchRole")
def fetch_plot():

    return {"roleList": roleGameCotroller.RoleList,
            "isStart": roleGameCotroller.isStart
            }

@router.get("/fetchPlot/{idx}")
def fetch_plot(idx: int):
    print("fetch_plot: ", idx)
    if idx*2<=len(roleGameCotroller.PlotText):

        return {"plotTexts": roleGameCotroller.PlotText,
                "isReady": True
                }
    else:
        return {"plotTexts": [],
                "isReady": False
                }

@router.get("/startGame")
def start_game():
    if len(roleGameCotroller.RoleList)==0:
        print("***No plater in list!")
        return {"isStart": roleGameCotroller.isStart}
    roleGameCotroller.isStart=True
    roleGameCotroller.startGame()
    print(roleGameCotroller.RoleList)
    return {"isStart": roleGameCotroller.isStart}

@router.get("/waitGame")
def wait_game():

    return {"isStart": roleGameCotroller.isStart}

@router.post("/sendCommand")
def send_command(backgroundTasks: BackgroundTasks, req: Dict[Any, Any]=None):
    print("send: ", req)
    command = req["roleName"] + ":" + req["command"]
    backgroundTasks.add_task(roleGameCotroller.collectCommand, command)

    return {"status": "200"}

@router.get("/resetGame")
def resetGame():
    global roleGameCotroller
    roleGameCotroller = RoleGameController()
    return {"status": "/resetGame"}