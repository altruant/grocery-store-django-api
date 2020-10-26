from django.db import models

# Create your models here.
class Item(models.Model):
    menu_item = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.URLField(max_length=255)

    def __str__(self):
        return self.menu_item
