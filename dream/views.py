from django.shortcuts import render
from django.http import JsonResponse
import json

def index(request):
    return render(request, 'dream/index.html', {})

def result1(request):
    return render(request, 'dream/result1.html', {})

def result2(request):
    return render(request, 'dream/result2_1.html', {})

def result3(request):
    return render(request, 'dream/result3.html', {})

def result4(request):
    return render(request, 'dream/result4.html')
    
def get_data_1(request):
    with open('dream/static/data/relation/data_bukchon.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_2(request):
    with open('dream/static/data/file_name2.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_3(request):
    #pos_neg_changdeokgung
    #pos_neg_insadong
    #pos_neg_myeongdong
    #pos_neg_tripadvisor_gbp
    #pos_ngv_bukchon
    #pos_ngv_n_seoul_tower
    #pos_ngv_the_war_memorial_of_korea
    with open('dream/static/data/pos_neg/pos_ngv_the_war_memorial_of_korea.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

def get_data_4(request):
    with open('dream/static/data/flare.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
