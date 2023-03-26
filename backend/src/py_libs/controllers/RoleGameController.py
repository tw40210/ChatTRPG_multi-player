# def getChatGPTResponse(command):
#     return 'Chat: '+str(command)

from ..chat.chat import getChatGPTResponse
from ..objects.prompts import general_prompt, short_prompt, chi_prompt, TRPG_D2D_prompt



start_prompt=short_prompt
# start_prompt=''

class RoleGameController:
    def __init__(self) -> None:
        self.RoleList=[]
        self.PlotText=[]
        self.curCommand=[]
        self.isStart=False
        self.messages = [{'role': 'system',
                                   'content':chi_prompt}]
        self.message={"role":"user","content":''}
    
    def createRole(self, role) -> None:
        self.RoleList.append(role)

    def startGame(self):
        start_intro = self._get_start_intro()
        self.PlotText.append(start_intro)
        self.PlotText.append(self._getNextPlot(start_intro))
    
    def collectCommand(self, command) -> None:
        self.curCommand.append(command)
        if len(self.curCommand)==len(self.RoleList):
            command = ';'.join(self.curCommand)
            self.PlotText.append(command)
            self.PlotText.append(self._getNextPlot(command))
            self.curCommand=[]
    def _get_start_intro(self):
        start_plot=''
        for idx, role in enumerate(self.RoleList) :
            start_plot+=f'一名在隊伍中的人物是{role["Name"]}，他的職業是{role["Job"]}，他的人格特質有{role["Personality"]}，他會的技能有{role["Skills"]}。'
            # start_plot+=f'One of members in our party is {role["Name"]}. He/She is a {role["Job"]}. His/Her personalities should be {role["Personality"]}. He/She is able to {role["Skills"]}. '

        return start_plot
        
    
    def _getNextPlot(self, command):
        send_msg = self.message.copy()
        send_msg["content"]=command
        self.messages.append(send_msg)
        count=0
        while count<5:
            try:
                print("start asking")
                res = getChatGPTResponse(self.messages)
                print("end asking")
                break
            except Exception as e:
                print(e)
                count+=1

        return res