from django.shortcuts import render
from rest_framework import viewsets
from models import Bookmark
from serializers import BookmarkSerializer

class BookmarkViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Bookmark objects """
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
