!pip install google-genai

import os

from google.colab import userdata
os.environ ["GOOGLE_API_KEY"] = userdata.get('GOOGLE_API_KEY')

from google import genai

client = genai.Client()

for model in client.models.list():
  print(model.name)

  modelo = "gemini-2.0-flash"
  chat = client.chats.create(model=modelo)

from google.genai import types

chat_config_2 = types.GenerateContentConfig(
    system_instruction = "Voce é uma professora de finanças, só fala sobre isso. Suas respostas são extremamente carinhosas, como se estivesse explicando para uma criança.",
)

chat_2 = client.chats.create(model=modelo, config=chat_config_2)

prompt = input("Esperando prompt:")

while prompt != "cabou":
  resposta = chat_2.send_message(prompt)
  print("Resposta: ", resposta.text)
  print("\n")
  prompt = input("Esperando prompt:")
