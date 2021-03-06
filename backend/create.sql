create table tb_ata (id int4 generated by default as identity, allocution_assunto varchar(255), allocution_autor varchar(255), assuntos varchar(255), ata varchar(255), capitulo_espiritual varchar(255), coleta boolean, date varchar(255), hora_final varchar(255), inicio varchar(255), instrucao_permanente boolean, pagina_espiritual varchar(255), pagina_estudo varchar(255), paragrafo_estudo varchar(255), participation varchar(255), title_espiritual varchar(255), primary key (id));
create table tb_event (id int4 generated by default as identity, quantidade_ativos int4, quantidade_auxilixares int4, date varchar(255), data_evento varchar(255), quantidade_convidados int4, titulo varchar(255), primary key (id));
create table tb_future_event (id int4 generated by default as identity, data_evento varchar(255), titulo varchar(255), primary key (id));
create table tb_legionarios (id int4 generated by default as identity, birthday varchar(255), initial varchar(255), name varchar(255), type int4, primary key (id));
create table tb_presencas (id int4 generated by default as identity, attendance int4, date varchar(255), legio_id int4, primary key (id));
create table tb_recruitment (id int4 generated by default as identity, attendancing int4, date varchar(255), pessoa int4, quantidade int4, primary key (id));
create table tb_treasury (id int4 generated by default as identity, coleta_do_dia float4, contribuicao float4, date varchar(255), despesas float4, data_da_coleta varchar(255), saldo_anterior float4, sub_total float4, total_em_caixa float4, primary key (id));
create table tb_work (id int4 generated by default as identity, contato_adulto int4, contato_crianca int4, date varchar(255), contato_idoso int4, duracao float4, legionarioa varchar(255), observação varchar(255), total int4, trabalho int4, contato_jovem int4, primary key (id));
alter table if exists tb_legionarios add constraint UK_o6aod73g23pyaeyxfue5ok18m unique (name);
alter table if exists tb_treasury add constraint UK_nkeeg4xm0vg7h8euaa50vfc8g unique (data_da_coleta);
alter table if exists tb_presencas add constraint FKf0va7l90imqgsh6nb5i76sa06 foreign key (legio_id) references tb_legionarios;
