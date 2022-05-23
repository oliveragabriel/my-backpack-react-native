drop database if exists gobackpack;
create database gobackpack;
use gobackpack;

-- INSERIR UNIQUE NO EMAIL
create table account(
id_acc int not null auto_increment,
acc_name varchar(100) not null,
birth date,
email varchar(100) not null,
phone varchar(25),
nationality varchar(100),
city varchar(100),
acc_password varchar(16) not null,
primary key(id_acc)
);

create table travel(
id_travel int not null auto_increment,
title varchar(100) not null,
departure_date date not null,
arrival_date date not null,
travel_type varchar(45),
done boolean,
id_acc int not null,
primary key(id_travel),
foreign key(id_acc) references account(id_acc)
);
create table accommodation(
id_accommodation int not null auto_increment,
description varchar(100) not null,
arrival_date date not null,
departure_date date not null,
acm_type varchar(45) not null,
acm_value numeric(8,2) not null,
id_travel int not null,
primary key(id_accommodation),
foreign key(id_travel) references travel(id_travel)
);

create table travel_day(
id_day int not null auto_increment,
country varchar(100),
city varchar(100),
ended boolean,
id_accommodation int,
id_travel int not null,
primary key(id_day),
foreign key(id_travel) references travel(id_travel),
foreign key(id_accommodation) references accommodation(id_accommodation)
);
create table activity(
id_activity int not null auto_increment,
description varchar(100) not null,
atv_type varchar(45) not null,
atv_value numeric(8,2) not null,
ended boolean,
atv_time time,
id_travel int not null,
id_day int not null,
primary key(id_activity),
foreign key(id_day) references travel_day(id_day)
);

create table transport(
id_transport int not null auto_increment,
description varchar(100) not null,
arrival_date date not null,
departure_date date not null,
trp_type varchar(45) not null,
trp_value numeric(8,2) not null,
arrival_place varchar(100) not null,
departure_place varchar(100) not null,
id_travel int not null,
primary key(id_transport),
foreign key(id_travel) references travel(id_travel)
);

create table wish(
id_wish int not null auto_increment,
description varchar(100) not null,
id_acc int not null,
primary key(id_wish),
foreign key(id_acc) references account(id_acc)
);


insert into account (acc_name, email, acc_password) values ('ana', 'ana@gmail.com', '1234');
insert into account (acc_name, email, acc_password) values ('jose', 'jose@gmail.com', '1234');
insert into account (acc_name, email, acc_password) values ('pedro', 'pedro@gmail.com', '1234');

insert into travel (title, departure_date, arrival_date, id_acc) values ('eua', '2022-07-05', '2022-07-09', 2);

select * from account;