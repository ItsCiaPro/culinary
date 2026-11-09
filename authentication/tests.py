from django.contrib.auth import get_user_model
from django.test import TestCase, override_settings
from django.urls import reverse


class LoginViewTests(TestCase):
    def setUp(self):
        self.username = "testuser"
        self.password = "test-password-123"
        get_user_model().objects.create_user(
            username=self.username,
            password=self.password,
        )

    def test_login_page_displays_form(self):
        response = self.client.get(reverse("login"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'name="username"')
        self.assertContains(response, 'name="password"')

    def test_invalid_credentials_do_not_log_in(self):
        response = self.client.post(
            reverse("login"),
            {"username": self.username, "password": "incorrect"},
        )

        self.assertEqual(response.status_code, 200)
        self.assertFalse(response.wsgi_request.user.is_authenticated)

    def test_valid_credentials_log_in(self):
        response = self.client.post(
            reverse("login"),
            {"username": self.username, "password": self.password},
        )

        self.assertRedirects(response, reverse("home"))
        self.assertEqual(
            int(self.client.session["_auth_user_id"]),
            get_user_model().objects.get(username=self.username).pk,
        )

    def test_authenticated_user_visiting_login_is_redirected_home(self):
        self.client.force_login(
            get_user_model().objects.get(username=self.username)
        )

        response = self.client.get(reverse("login"))

        self.assertRedirects(response, reverse("home"))


class RegisterViewTests(TestCase):
    def test_register_page_displays_user_creation_form(self):
        response = self.client.get(reverse("register"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'name="username"')
        self.assertContains(response, 'name="password1"')
        self.assertContains(response, 'name="password2"')

    def test_valid_registration_creates_user_and_redirects_to_login(self):
        password = "F9v!kL2#qR7@wX"
        response = self.client.post(
            reverse("register"),
            {
                "username": "newuser",
                "password1": password,
                "password2": password,
            },
        )

        self.assertRedirects(response, reverse("login"))
        user = get_user_model().objects.get(username="newuser")
        self.assertTrue(user.check_password(password))


class HomeViewTests(TestCase):
    def test_home_page_is_available(self):
        response = self.client.get(reverse("home"))

        self.assertEqual(response.status_code, 200)
        html = response.content.decode()
        stylesheet_link = '<link rel="stylesheet" href="/static/css/sidebar.css">'
        self.assertIn(stylesheet_link, html)
        self.assertLess(html.index(stylesheet_link), html.index("</head>"))


@override_settings(AUTH_REQUIRED_URLS=["register"])
class LoginRequiredMiddlewareTests(TestCase):
    def test_anonymous_user_is_redirected_from_protected_route(self):
        response = self.client.get(reverse("register"))

        self.assertRedirects(
            response,
            f"{reverse('login')}?next={reverse('register')}",
            fetch_redirect_response=False,
        )

    def test_authenticated_user_can_access_protected_route(self):
        user = get_user_model().objects.create_user(username="signed-in-user")
        self.client.force_login(user)

        response = self.client.get(reverse("register"))

        self.assertEqual(response.status_code, 200)


@override_settings(AUTH_REQUIRED_URLS=["login"])
class LoginRequiredMiddlewareLoginRouteTests(TestCase):
    def test_login_route_is_not_redirected_to_itself(self):
        response = self.client.get(reverse("login"))

        self.assertEqual(response.status_code, 200)
