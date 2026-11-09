from . import views

from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic import RedirectView
from django.urls import path

urlpatterns = [
    path("", RedirectView.as_view(url="login")),

    path(
        "login",
        LoginView.as_view(
            template_name="authentication/pages/login.html",
            next_page="home",
            redirect_authenticated_user=True,
        ),
        name="login",
    ),
    path("register", views.RegisterView.as_view(), name="register"),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
]
