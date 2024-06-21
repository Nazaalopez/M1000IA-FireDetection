#!/bin/bash

# Iniciar API (FastAPI)
uvicorn main:app --host 127.0.0.1 --port 8000 --reload 

# Esperar para que cargue
#sleep 5

# Iniciar Frontend
#cd ./Frontend
#code --goto CV_bootstrap.html --port=5500 --server.headless=True #--no-browser