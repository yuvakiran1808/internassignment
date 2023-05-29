from django.contrib import admin
from django.urls import path
from users.views import home,RegisterView,LoginView,UserView,LogoutView
from events.views import create_event,Like_event,EventListAPIView
from django.conf import settings
from django.conf.urls.static import static


# endpoints 
urlpatterns = [
        # Home page
    path('',home),
        # Admin site
    path('admin/',admin.site.urls),
     # User authentication endpoints
    path('api/signup/', RegisterView.as_view()),
    path('api/signin/', LoginView.as_view()),
    path('api/user/', UserView.as_view()),
    path('api/signout/', LogoutView.as_view()),

    # Event-related endpoints

    path('api/create/events/', create_event.as_view()),
    path('api/events/<int:event_id>/like/', Like_event.as_view()),
    path('api/events/', EventListAPIView.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

