from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware



#Create server
# Resource: https://fastapi.tiangolo.com/tutorial/cors/#use-corsmiddleware

app = FastAPI()

#origins = ["http://localhost:5173"]

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# Request 
# Website for tutorial
#https://www.geeksforgeeks.org/python/creating-first-rest-api-with-fastapi/
#Source: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html
#for different formats for orient
#Source: https://www.geeksforgeeks.org/pandas/how-to-convert-pandas-dataframe-into-json-in-python/
@app.get("/colors/")
def read_colors_data():
    data = pd.read_csv("modules_data/colors.csv")
    return data.to_dict(orient = "records")


@app.get("/sound_systems/")
def read_sound_systems_data():
    data = pd.read_csv("modules_data/sound_systems.csv")
    return data.to_dict(orient = "records")

@app.get("/emotions/")
def read_emotions_data():
    data = pd.read_csv("modules_data/emotions.csv")
    return data.to_dict(orient = "records")

@app.get("/greetings/")
def read_greetings_data():
    data = pd.read_csv("modules_data/greetings.csv")
    return data.to_dict(orient = "records")

@app.get("/introductions/")
def read_introductions_data():
    data = pd.read_csv("modules_data/introductions.csv")
    return data.to_dict(orient = "records")

@app.get("/weather/")
def read_weather_data():
    data = pd.read_csv("modules_data/weather.csv")
    return data.to_dict(orient = "records")


@app.get("/numbers/")
def read_numbers_data():
    data = pd.read_csv("modules_data/numbers.csv")
    return data.to_dict(orient = "records")

@app.get("/animals/")
def read_animals_data():
    data = pd.read_csv("modules_data/animals.csv")
    return data.to_dict(orient = "records")

@app.get("/foods/")
def read_foods_verbs_data():
    data = pd.read_csv("modules_data/foods.csv")
    return data.to_dict(orient = "records")

@app.get("/household_items/")
def read_household_items_data():
    data = pd.read_csv("modules_data/household_items.csv")
    return data.to_dict(orient = "records")

@app.get("/drinks/")
def read_drinks_verbs_data():
    data = pd.read_csv("modules_data/drinks.csv")
    return data.to_dict(orient = "records")

@app.get("/buildings/")
def read_buildings_data():
    data = pd.read_csv("modules_data/buildings.csv")
    return data.to_dict(orient = "records")
