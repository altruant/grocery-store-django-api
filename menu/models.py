from django.db import models

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image_url = models.URLField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title
