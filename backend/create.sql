create table tb_ata (id int4 generated by default as identity, date varchar(255), primary key (id));
create table tb_ata_extenso (id int4 generated by default as identity, allocution_assunto varchar(255), allocution_autor varchar(255), assuntos varchar(255), ata varchar(255), capitulo_espiritual varchar(255), coleta boolean, date varchar(255), hora_final varchar(255), inicio varchar(255), pagina_espiritual varchar(255), pagina_estudo varchar(255), paragrafo_estudo varchar(255), participation varchar(255), title_espiritual varchar(255), primary key (id));
create table tb_event (id int4 generated by default as identity, ativos int4, auxiliares int4, date varchar(255), date_event varchar(255), guests int4, name varchar(255), ata int4, primary key (id));
create table tb_legionarios (id int4 generated by default as identity, birthday timestamp, name varchar(255), type int4, primary key (id));
create table tb_presencas (id int4 generated by default as identity, attendance int4, date varchar(255), ata int4, legio_id int4, primary key (id));
create table tb_recruitment (id int4 generated by default as identity, attendancing int4, date varchar(255), person int4, quantity int4, ata int4, primary key (id));
create table tb_treasury (id int4 generated by default as identity, coleta_do_dia float4, date varchar(255), despesas float4, dia_da_coleta varchar(255), saldo_anterior float4, sub_total float4, total_em_caixa float4, ata int4, primary key (id));
create table tb_work (id int4 generated by default as identity, adult int4, children int4, date varchar(255), elderly int4, hours float4, legio varchar(255), observation varchar(255), total int4, work int4, yong int4, ata int4, primary key (id));
alter table if exists tb_ata add constraint UK_b4u07urs7p7yhd2nrxmn56wwr unique (date);
alter table if exists tb_ata_extenso add constraint UK_scweb24awo31w00bq57vniorn unique (date);
alter table if exists tb_legionarios add constraint UK_o6aod73g23pyaeyxfue5ok18m unique (name);
alter table if exists tb_treasury add constraint UK_1unht5sbyolrj57sdamy5ulq unique (dia_da_coleta);
alter table if exists tb_event add constraint FKm5nwp01wfthcsp5o01uaul02s foreign key (ata) references tb_ata;
alter table if exists tb_presencas add constraint FK17e4y40xhr5xa00rbjufoybhi foreign key (ata) references tb_ata;
alter table if exists tb_presencas add constraint FKf0va7l90imqgsh6nb5i76sa06 foreign key (legio_id) references tb_legionarios;
alter table if exists tb_recruitment add constraint FK2s6omfbirxy8ogwswf1d1xwqp foreign key (ata) references tb_ata;
alter table if exists tb_treasury add constraint FKbjewoqapt2gw3wq5avui4a4r8 foreign key (ata) references tb_ata;
alter table if exists tb_work add constraint FKod6b5o0jh44lt0vl5e793h60x foreign key (ata) references tb_ata;
