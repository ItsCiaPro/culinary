from django.shortcuts import render


def login(request):
    return render(request, "authentication/pages/login.html")


def register(request):
    return render(request, "authentication/pages/register.html")