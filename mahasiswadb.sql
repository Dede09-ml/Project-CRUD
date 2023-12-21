create database mahasiswadb;

create table tabel_mahasiswa (
    mhs_id serial primary key,
    nama_mahasiswa varchar(255),
    nilai_mahasiswa bigint,
    grade varchar(255)
)

insert into tabel_mahasiswa (nama_mahasiswa,nilai_mahasiswa,grade)
values ("Dea","90","A"),("Kurnia","87","A-"),("Harysandi","70","B-")