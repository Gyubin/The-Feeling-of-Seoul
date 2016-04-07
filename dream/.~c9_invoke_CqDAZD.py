from django.shortcuts import render
from django.http import JsonResponse
import json

def index(request):
    return render(request, 'dream/index.html', {})

def result1(request):
    return render(request, 'dream/result1.html', {})

def result2(request):
    return render(request, 'dream/result2.html', {})

def result3(request):
    return render(request, 'dream/result3.html', {})

def result4(request):
    return render(request, 'dream/result4.html')
    
def get_data_1(request):
    with open('dream/static/data/file_name1.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_2(request):
    with open('dream/static/data/file_name2.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_3(request):
    with open('dream/static/data/pos_neg/.json') as data_file:
    with open('dream/static/data/pos_neg/pos_ngv_n_seoul_tower.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_4(request):
    with open('dream/static/data/flare.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
