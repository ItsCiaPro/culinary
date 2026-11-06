from . import views

from django.contrib.auth.views import LoginView
from django.views.generic import RedirectView
from django.urls import path

urlpatterns = [
    path("", RedirectView.as_view(url="login")),

    path(
        "login",
        LoginView.as_view(
            template_name="authentication/pages/login.html",
            next_page="login",
        ),
        name="login",
    ),
    path("register", views.RegisterView.as_view(), name="register"),
]
