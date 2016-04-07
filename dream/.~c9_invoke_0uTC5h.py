from django.shortcuts import render

# Create your views here.
def main_index(request):
    return render(request, 'dream/main_index.html', {})

def result1(request):
    return render(request, 'dream/result1.html', {})

def result2(request):
    return render(request, 'dream/result1.html', {})

def result3(request):
    return render(request, 'dream/result1.html', {})

def result1(request):
    return render(request, 'dream/result1.html', {})
