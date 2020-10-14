from django.urls import path

from .views import ItemListCreateView, ItemRetrieveUpdateDestroyView


app_name = 'menu'

urlpatterns = [
    path('<int:pk>/', ItemRetrieveUpdateDestoryView.as_view(), name='menu_list')
    path('', ItemListCreateView)
]
