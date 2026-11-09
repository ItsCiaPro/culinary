
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", RedirectView.as_view(url="auth/")),

    path("auth/", include("authentication.urls")),
    path("home/", include("nucleo.urls")),
]
