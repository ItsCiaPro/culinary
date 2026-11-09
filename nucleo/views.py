from django.shortcuts import render


def home(request):
    return render(request, "nucleo/pages/home.html")
