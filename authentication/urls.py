from . import views

from django.views.generic import RedirectView
from django.urls import path

urlpatterns = [
    path("", RedirectView.as_view(url="login")),

    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
]
