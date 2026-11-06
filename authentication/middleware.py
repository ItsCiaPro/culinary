from django.conf import settings
from django.contrib.auth.views import redirect_to_login
from django.shortcuts import resolve_url
from django.utils.deprecation import MiddlewareMixin


class LoginRequiredMiddleware(MiddlewareMixin):
    def process_view(self, request, view_func, view_args, view_kwargs):
        required_urls = getattr(settings, "AUTH_REQUIRED_URLS", ())
        match = request.resolver_match
        login_path = resolve_url(settings.LOGIN_URL)

        if (
            match is not None
            and match.view_name in required_urls
            and request.path_info != login_path
            and not request.user.is_authenticated
        ):
            return redirect_to_login(request.get_full_path(), settings.LOGIN_URL)

        return None
