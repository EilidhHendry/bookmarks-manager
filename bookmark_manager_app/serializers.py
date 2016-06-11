from rest_framework import serializers
from bookmark_manager_app.models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Bookmark model """
    class Meta:
        model = Bookmark
        fields = ("name", "url")
