# def getChatGPTResponse(command):
#     return 'Chat: '+str(command)

from ..chat.chat import getChatGPTResponse
from ..objects.prompts import general_prompt, eng_prompt, chi_prompt, TRPG_D2D_prompt, chi_intro, eng_intro



prompt_dict={
    'CHINESE':(chi_prompt, chi_intro),
    'ENGLISH':(eng_prompt, eng_intro),
}

class RoleGameController:
    def __init__(self) -> None:
        self.RoleList=[]
        self.PlotText=[]
        self.curCommand=[]
        self.isStart=False
        self.messages = [{'role': 'system',
                                   'content':''}]
        self.message={'role':'user','content':''}
        self.prompts=None
    
    def createRole(self, role) -> None:
        self.RoleList.append(role)

    def startGame(self, prompt):
        self.prompts=prompt_dict[prompt]
        self.messages[0]['content']=self.prompts[0]

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
            start_plot+=self.prompts[1] % (role["Name"], role["Job"], role["Personality"], ', '.join(role["Skills"]))
            

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