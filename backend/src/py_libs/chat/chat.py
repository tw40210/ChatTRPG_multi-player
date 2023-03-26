import openai
from ...env import openapi_key
api_key = openapi_key
openai.api_key = api_key

def getChatGPTResponse(messages):
    MODEL = "gpt-3.5-turbo"
    response = openai.ChatCompletion.create(
        model=MODEL,
        messages = messages,
        temperature=1)
    return response['choices'][0]['message']['content']

