CREATE database qlnv;
 
CREATE table phong_ban(
	id int AUTO_INCREMENT PRIMARY key,
    name varchar(100) not null
);
CREATE TABLE nhan_vien(
	id int AUTO_INCREMENT PRIMARY key,
    name varchar(100) not null,
    image varchar(255),
    salary float,
    phongban_id int,
    FOREIGN key (phongban_id) REFERENCES phong_ban(id)
)