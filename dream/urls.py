from django.conf.urls import url
from . import views

urlpatterns = [
    # main
    url(r'^$', views.index, name='index'),

    # project popup
    url(r'^bukchon$', views.bukchon, name='bukchon'),
    url(r'^changdeokgung$', views.changdeokgung, name='changdeokgung'),
    url(r'^insadong$', views.insadong, name='insadong'),
    url(r'^gyeongbokgung$', views.gyeongbokgung, name='gyeongbokgung'),
    url(r'^n_seoul_tower$', views.n_seoul_tower, name='n_seoul_tower'),
    url(r'^war_memorial_korea$', views.war_memorial_korea, name='war_memorial_korea'),
    url(r'^myeongdong$', views.myeongdong, name='myeongdong'),

    #################################################################
    # page
    # pages about positive, negative
    url(r'^show_pos_bukchon$', views.show_pos_bukchon, name='show_pos_bukchon'),
    url(r'^show_pos_changdeokgung$', views.show_pos_changdeokgung, name='show_pos_changdeokgung'),
    url(r'^show_pos_insadong$', views.show_pos_insadong, name='show_pos_insadong'),
    url(r'^show_pos_myeongdong$', views.show_pos_myeongdong, name='show_pos_myeongdong'),
    url(r'^show_pos_gbp$', views.show_pos_gbp, name='show_pos_gbp'),
    url(r'^show_pos_ntower$', views.show_pos_ntower, name='show_pos_ntower'),
    url(r'^show_pos_war_memorial$', views.show_pos_war_memorial, name='show_pos_war_memorial'),

    # pages about weighted relation
    url(r'^show_weighted_relation_bc$', views.show_weighted_relation_bc, name='show_weighted_relation_bc'),
    url(r'^show_weighted_relation_changdeok$', views.show_weighted_relation_changdeok, name='show_weighted_relation_changdeok'),
    url(r'^show_weighted_relation_gbp$', views.show_weighted_relation_gbp, name='show_weighted_relation_gbp'),
    url(r'^show_weighted_relation_insa$', views.show_weighted_relation_insa, name='show_weighted_relation_insa'),
    url(r'^show_weighted_relation_md$', views.show_weighted_relation_md, name='show_weighted_relation_md'),
    url(r'^show_weighted_relation_ntower$', views.show_weighted_relation_ntower, name='show_weighted_relation_ntower'),
    url(r'^show_weighted_relation_war$', views.show_weighted_relation_war, name='show_weighted_relation_war'),

    # pages about specified relation
    url(r'^show_specified_relation_bc$', views.show_specified_relation_bc, name='show_specified_relation_bc'),
    url(r'^show_specified_relation_changdeok$', views.show_specified_relation_changdeok, name='show_specified_relation_changdeok'),
    url(r'^show_specified_relation_gbp$', views.show_specified_relation_gbp, name='show_specified_relation_gbp'),
    url(r'^show_specified_relation_insa$', views.show_specified_relation_insa, name='show_specified_relation_insa'),
    url(r'^show_specified_relation_md$', views.show_specified_relation_md, name='show_specified_relation_md'),
    url(r'^show_specified_relation_ntower$', views.show_specified_relation_ntower, name='show_specified_relation_ntower'),
    url(r'^show_specified_relation_war$', views.show_specified_relation_war, name='show_specified_relation_war'),
    
    # pages about review count
    url(r'^show_review_bc$', views.show_review_bc, name='show_review_bc'),
    url(r'^show_review_changdeok$', views.show_review_changdeok, name='show_review_changdeok'),
    url(r'^show_review_gbp$', views.show_review_gbp, name='show_review_gbp'),
    url(r'^show_review_insa$', views.show_review_insa, name='show_review_insa'),
    url(r'^show_review_md$', views.show_review_md, name='show_review_md'),
    url(r'^show_review_ntower$', views.show_review_ntower, name='show_review_ntower'),
    url(r'^show_review_war$', views.show_review_war, name='show_review_war'),
    
    
    #################################################################
    ## data
    # data about positive, negative
    url(r'^get_data_pos_bukchon$', views.get_data_pos_bukchon, name='get_data_pos_bukchon'),
    url(r'^get_data_pos_changdeokgung$', views.get_data_pos_changdeokgung, name='get_data_pos_changdeokgung'),
    url(r'^get_data_pos_insadong$', views.get_data_pos_insadong, name='get_data_pos_insadong'),
    url(r'^get_data_pos_myeongdong$', views.get_data_pos_myeongdong, name='get_data_pos_myeongdong'),
    url(r'^get_data_pos_gbp$', views.get_data_pos_gbp, name='get_data_pos_gbp'),
    url(r'^get_data_pos_ntower$', views.get_data_pos_ntower, name='get_data_pos_ntower'),
    url(r'^get_data_pos_war_memorial$', views.get_data_pos_war_memorial, name='get_data_pos_war_memorial'),

    # data about weighted relation
    url(r'^get_data_weighted_relation_bc$', views.get_data_weighted_relation_bc, name='get_data_weighted_relation_bc'),
    url(r'^get_data_weighted_relation_changdeok$', views.get_data_weighted_relation_changdeok, name='get_data_weighted_relation_changdeok'),
    url(r'^get_data_weighted_relation_gbp$', views.get_data_weighted_relation_gbp, name='get_data_weighted_relation_gbp'),
    url(r'^get_data_weighted_relation_insa$', views.get_data_weighted_relation_insa, name='get_data_weighted_relation_insa'),
    url(r'^get_data_weighted_relation_md$', views.get_data_weighted_relation_md, name='get_data_weighted_relation_md'),
    url(r'^get_data_weighted_relation_ntower$', views.get_data_weighted_relation_ntower, name='get_data_weighted_relation_ntower'),
    url(r'^get_data_weighted_relation_war$', views.get_data_weighted_relation_war, name='get_data_weighted_relation_war'),

    # data about force layout
    url(r'^get_data_force_bukchon$', views.get_data_force_bukchon, name='get_data_force_bukchon'),
    url(r'^get_data_force_changdeokgung$', views.get_data_force_changdeokgung, name='get_data_force_changdeokgung'),
    url(r'^get_data_force_insadong$', views.get_data_force_insadong, name='get_data_force_insadong'),
    url(r'^get_data_force_myeongdong$', views.get_data_force_myeongdong, name='get_data_force_myeongdong'),
    url(r'^get_data_force_gbp$', views.get_data_force_gbp, name='get_data_force_gbp'),
    url(r'^get_data_force_ntower$', views.get_data_force_ntower, name='get_data_force_ntower'),
    url(r'^get_data_force_war_memorial$', views.get_data_force_war_memorial, name='get_data_force_war_memorial'),
    
]
