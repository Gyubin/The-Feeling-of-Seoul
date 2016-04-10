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

# show pos_neg
def show_pos_bukchon(request):
    return render(request, 'dream/bukchon/pos_neg.html')
def show_pos_changdeokgung(request):
    return render(request, 'dream/changdeok/pos_neg.html')
def show_pos_insadong(request):
    return render(request, 'dream/insadong/pos_neg.html')
def show_pos_myeongdong(request):
    return render(request, 'dream/myeongdong/pos_neg.html')
def show_pos_gbp(request):
    return render(request, 'dream/gyeongbok/pos_neg.html')
def show_pos_ntower(request):
    return render(request, 'dream/ntower/pos_neg.html')
def show_pos_war_memorial(request):
    return render(request, 'dream/war_memorial/pos_neg.html')

# show weighted relation
def show_weighted_relation_bc(request):
    return render(request, 'dream/bukchon/weighted_relation.html')
def show_weighted_relation_changdeok(request):
    return render(request, 'dream/changdeok/weighted_relation.html')
def show_weighted_relation_gbp(request):
    return render(request, 'dream/gyeongbok/weighted_relation.html')
def show_weighted_relation_insa(request):
    return render(request, 'dream/insadong/weighted_relation.html')
def show_weighted_relation_md(request):
    return render(request, 'dream/myeongdong/weighted_relation.html')
def show_weighted_relation_ntower(request):
    return render(request, 'dream/ntower/weighted_relation.html')
def show_weighted_relation_war(request):
    return render(request, 'dream/war_memorial/weighted_relation.html')

# show specified relation
def show_specified_relation_bc(request):
    return render(request, 'dream/bukchon/specified_relation.html')
def show_specified_relation_changdeok(request):
    return render(request, 'dream/changdeok/specified_relation.html')
def show_specified_relation_gbp(request):
    return render(request, 'dream/gyeongbok/specified_relation.html')
def show_specified_relation_insa(request):
    return render(request, 'dream/insadong/specified_relation.html')
def show_specified_relation_md(request):
    return render(request, 'dream/myeongdong/specified_relation.html')
def show_specified_relation_ntower(request):
    return render(request, 'dream/ntower/specified_relation.html')
def show_specified_relation_war(request):
    return render(request, 'dream/war_memorial/specified_relation.html')

# show review count
def show_review_bc(request):
    return render(request, 'dream/bukchon/review_count.html')
def show_review_changdeok(request):
    return render(request, 'dream/changdeok/review_count.html')
def show_review_gbp(request):
    return render(request, 'dream/gyeongbok/review_count.html')
def show_review_insa(request):
    return render(request, 'dream/insadong/review_count.html')
def show_review_md(request):
    return render(request, 'dream/myeongdong/review_count.html')
def show_review_ntower(request):
    return render(request, 'dream/ntower/review_count.html')
def show_review_war(request):
    return render(request, 'dream/war_memorial/review_count.html')

# visualization result of travel site
def result1(request):
    return render(request, 'dream/result1.html', {})
def result2(request):
    return render(request, 'dream/result2_1.html', {})
def result3(request):
    return render(request, 'dream/result3.html', {})
def result4(request):
    return render(request, 'dream/result2_1.html')

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

# get force layout data
def get_data_force_bukchon(request):
    with open('dream/static/data/force_data/bukchon_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_changdeokgung(request):
    with open('dream/static/data/force_data/changdeok_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_gbp(request):
    with open('dream/static/data/force_data/gbp_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_insadong(request):
    with open('dream/static/data/force_data/insa_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_myeongdong(request):
    with open('dream/static/data/force_data/myeongdong_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_ntower(request):
    with open('dream/static/data/force_data/ntower_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
def get_data_force_war_memorial(request):
    with open('dream/static/data/force_data/war_fl.json') as data_file:
        data = json.load(data_file)
    return JsonResponse(data)
