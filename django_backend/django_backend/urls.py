from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from django.conf.urls.static import static
from django.conf import settings
from admin_control.views import MyRefreshTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/',jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/',MyRefreshTokenObtainPairView.as_view(),name ='token_refresh'),
    path('',include('admin_control.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)