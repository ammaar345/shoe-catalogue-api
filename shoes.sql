create table shoeinfo(
    id serial not null primary key,
    size int,
    brand text,
    color text,
    qty int
);
insert into shoeinfo(size,brand,color,qty) VALUES (4,"Nike","Red",12);

insert into shoeinfo(size,brand,color,qty) VALUES (7,"Jordan","Blue",21);

insert into shoeinfo(size,brand,color,qty) VALUES (8,"Levi","White",32);

insert into shoeinfo(size,brand,color,qty) VALUES (5,"Adidas","Gold",4);