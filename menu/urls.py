from django.path import path

from .views import ItemListAPIView


app_name = 'menu'

urlpatterns = [
    path('<int:pk>/', ItemListAPIView.as_view(), name='menu_list')
]
