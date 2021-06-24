from django.urls import path

from .import views

urlpatterns = [
    path('', views.index, name = 'index'), #from this line, the path can be changed second time
    path('delete/<int:post_id>/', views.delete, name = 'delete'),
]
