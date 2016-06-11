from __future__ import unicode_literals

from django.db import models

class Bookmark(models.Model):
    name = models.CharField(max_length=50)
    url = models.URLField()
