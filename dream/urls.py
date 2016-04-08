from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^1$', views.result1, name='result1'),
    url(r'^2$', views.result2, name='result2'),
    url(r'^3$', views.result3, name='result3'),
    url(r'^4$', views.result4, name='result4'),
    url(r'^get_data_1$', views.get_data_1, name='get_data_1'),
    url(r'^get_data_2$', views.get_data_2, name='get_data_2'),
    url(r'^get_data_3$', views.get_data_3, name='get_data_3'),
    url(r'^get_data_4$', views.get_data_4, name='get_data_4'),
    url(r'^bukchon$', views.bukchon, name='bukchon'),
    url(r'^changdeokgung$', views.changdeokgung, name='changdeokgung'),
    url(r'^insadong$', views.insadong, name='insadong'),
    url(r'^gyeongbokgung$', views.gyeongbokgung, name='gyeongbokgung'),
    url(r'^n_seoul_tower$', views.n_seoul_tower, name='n_seoul_tower'),
    url(r'^war_memorial_korea$', views.war_memorial_korea, name='war_memorial_korea'),
    url(r'^myeongdong$', views.myeongdong, name='myeongdong'),
]
