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
    return render(request, 'dream/result2_1.html', {})
def result3(request):
    return render(request, 'dream/result3.html', {})
def result4(request):
    return render(request, 'dream/result4.html')

# get all 35 datas.
# get positive, negative data
def get_data_pos_bukchon(request):
    with open('dream/static/data/pos_neg/pos_ngv_bukchon.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_changdeokgung(request):
    with open('dream/static/data/pos_neg/pos_neg_changdeokgung.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_insadong(request):
    with open('dream/static/data/pos_neg/pos_neg_insadong.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_myeongdong(request):
    with open('dream/static/data/pos_neg/pos_neg_myeongdong.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_gbp(request):
    with open('dream/static/data/pos_neg/pos_neg_tripadvisor_gbp.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_ntower(request):
    with open('dream/static/data/pos_neg/pos_ngv_n_seoul_tower.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_pos_war_memorial(request):
    with open('dream/static/data/pos_neg/pos_ngv_the_war_memorial_of_korea.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

# get weighted relation data
def get_data_weighted_relation_bc(request):
    with open('dream/static/data/relation/data_bukchon.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_changdeok(request):
    with open('dream/static/data/relation/data_cdp.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_gbp(request):
    with open('dream/static/data/relation/data_gbp.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_insa(request):
    with open('dream/static/data/relation/data_insadong.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_md(request):
    with open('dream/static/data/relation/data_myeongdong.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_ntower(request):
    with open('dream/static/data/relation/data_ntower.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_weighted_relation_war(request):
    with open('dream/static/data/relation/data_warmuseum.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)

# get review count

# get specified relation data

# get word distribution
def get_data_4(request):
    with open('dream/static/data/flare.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
