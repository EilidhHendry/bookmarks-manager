from django.conf.urls import url, include
from rest_framework_nested import routers

from config.views import IndexView
from bookmark_manager_app.views import BookmarkViewSet

router = routers.SimpleRouter()
router.register(r'bookmarks', BookmarkViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url('^$', IndexView.as_view(), name='index'),
]
