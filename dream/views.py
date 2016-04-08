from django.shortcuts import render
from django.http import JsonResponse
import json

# show main page
def index(request):
    return render(request, 'dream/main_page.html', {})

# show every project popup pages
def bukchon(request):
    return render(request, 'dream/popups/bukchon.html', {})
def changdeokgung(request):
    return render(request, 'dream/popups/changdeokgung.html', {})
def insadong(request):
    return render(request, 'dream/popups/insadong.html', {})
def gyeongbokgung(request):
    return render(request, 'dream/popups/gyeongbokgung.html', {})
def n_seoul_tower(request):
    return render(request, 'dream/popups/n_seoul_tower.html', {})
def war_memorial_korea(request):
    return render(request, 'dream/popups/war_memorial_korea.html', {})
def myeongdong(request):
    return render(request, 'dream/popups/myeongdong.html', {})

# visualization result of travel site
def result1(request):
    return render(request, 'dream/result1.html', {})
def result2(request):
    return render(request, 'dream/result2.html', {})
def result3(request):
    return render(request, 'dream/result3.html', {})
def result4(request):
    return render(request, 'dream/result4.html')

# get all 35 datas.
def get_data_1(request):
    with open('dream/static/data/file_name1.json') as data_file:
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
