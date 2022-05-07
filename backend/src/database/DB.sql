drop database if exists gobackpack;
create database gobackpack;
use gobackpack;

create table usuario(
id_user int not null auto_increment,
name varchar(100) not null,
birth date,
email varchar(100) not null,
phone varchar(25),
nacionality varchar(100),
city varchar(100),
password varchar(16) not null,
primary key(id_user)
);

create table viagem(
id_viagem int not null auto_increment,
titulo varchar(100) not null,
data_ida date not null,
data_volta date not null,
tipo varchar(45),
foi_realizada boolean,
id_user int not null,
primary key(id_viagem),
foreign key(id_user) references usuario(id_user)
);
create table hospedagem(
id_hospedagem int not null auto_increment,
descricao varchar(100) not null,
data_inicio date not null,
data_fim date not null,
tipo varchar(45) not null,
valor float not null,
id_viagem int not null,
primary key(id_hospedagem),
foreign key(id_viagem) references viagem(id_viagem)
);

create table dia(
id_dia int not null auto_increment,
pais varchar(100),
city varchar(100),
foi_realizada boolean,
id_hospedagem int,
id_viagem int not null,
primary key(id_dia),
foreign key(id_viagem) references viagem(id_viagem),
foreign key(id_hospedagem) references hospedagem(id_hospedagem)
);
create table atividade(
id_atividade int not null auto_increment,
descricao varchar(100) not null,
tipo varchar(45) not null,
valor float not null,
foi_realizada boolean,
horario time,
id_viagem int not null,
id_dia int not null,
primary key(id_atividade),
foreign key(id_dia) references dia(id_dia)
);

create table transporte(
id_transporte int not null auto_increment,
descricao varchar(100) not null,
data_ida date not null,
data_chegada date not null,
tipo varchar(45) not null,
valor float not null,
local_ida varchar(100) not null,
local_chegada varchar(100) not null,
id_viagem int not null,
primary key(id_transporte),
foreign key(id_viagem) references viagem(id_viagem)
);
create table desejo(
id_desejo int not null auto_increment,
descricao varchar(100) not null,
id_user int not null,
primary key(id_desejo),
foreign key(id_user) references usuario(id_user)
);