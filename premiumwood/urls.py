from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from premiumwood import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', 'main.views.index_view', name='index'),
    url(r'^sendmail/$', 'main.views.send_mail', name='sendmail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
