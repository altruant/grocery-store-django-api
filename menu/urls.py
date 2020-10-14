from django.urls import path

from .views import ItemListCreateView, ItemRetrieveUpdateDestroyView

urlpatterns = [
    path('<int:pk>/', ItemRetrieveUpdateDestroyView.as_view()),
    path('', ItemListCreateView.as_view())
]
