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