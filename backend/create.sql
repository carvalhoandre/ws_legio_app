create table ata (id int4 generated by default as identity, date varchar(255), primary key (id));
create table tb_ata_extenso (id int4 generated by default as identity, allocution_assunto varchar(255), allocution_autor varchar(255), ata varchar(255), capitulo_espiritual varchar(255), coleta_do_dia varchar(255), data_extenso varchar(255), despesas varchar(255), dia_da_coleta varchar(255), event varchar(255), hora_final varchar(255), legionario varchar(255), minuto_final varchar(255), number varchar(255), numero varchar(255), pagina_espiritual varchar(255), pagina_estudo varchar(255), paragrafo_estudo varchar(255), participation varchar(255), recrutamento varchar(255), saldo_anterior varchar(255), sub_total varchar(255), title_espiritual varchar(255), total_em_caixa varchar(255), work varchar(255), primary key (id));
create table tb_event (id int4 generated by default as identity, ativos int4, auxiliares int4, date varchar(255), guests int4, name varchar(255), ata int4, primary key (id));
create table tb_legionarios (id int4 generated by default as identity, birthday timestamp, name varchar(255), type int4, primary key (id));
create table tb_presencas (id int4 generated by default as identity, attendance int4, date varchar(255), ata int4, legio_id int4, primary key (id));
create table tb_recruitment (id int4 generated by default as identity, attendancing int4, date varchar(255), person int4, quantity int4, ata int4, primary key (id));
create table tb_treasury (id int4 generated by default as identity, coleta_do_dia float4, date varchar(255), despesas float4, dia_da_coleta timestamp, saldo_anterior float4, sub_total float4, total_em_caixa float4, ata int4, primary key (id));
create table tb_work (id int4 generated by default as identity, adult int4, children int4, date varchar(255), elderly int4, hours float4, total int4, work int4, yong int4, ata int4, primary key (id));
alter table if exists tb_ata_extenso add constraint UK_jafqy4r46scnqj9uo06up40ea unique (data_extenso);
alter table if exists tb_ata_extenso add constraint UK_qjbnxn9lbe577495bn9ds5e9o unique (number);
alter table if exists tb_ata_extenso add constraint UK_9ka22auvdo9st3gpyf6bfd245 unique (numero);
alter table if exists tb_legionarios add constraint UK_o6aod73g23pyaeyxfue5ok18m unique (name);
alter table if exists tb_event add constraint FKir2oyc74orabdmk79ter7qpe6 foreign key (ata) references ata;
alter table if exists tb_presencas add constraint FK3tnhs54eadxy7xad806fqhswo foreign key (ata) references ata;
alter table if exists tb_presencas add constraint FKf0va7l90imqgsh6nb5i76sa06 foreign key (legio_id) references tb_legionarios;
alter table if exists tb_recruitment add constraint FKjkvq87ft2mkdk48u7ure70bnr foreign key (ata) references ata;
alter table if exists tb_treasury add constraint FKl8s15x49r8uvw0bk542s4ehnb foreign key (ata) references ata;
alter table if exists tb_work add constraint FKpd8nk11c13s87l6bqexcbjgcn foreign key (ata) references ata;
