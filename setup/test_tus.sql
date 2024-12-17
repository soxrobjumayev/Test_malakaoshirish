drop table Questions cascade;
create table Questions(
    Question_id serial primary key,
    Questions varchar,
    Table_Chapter_id int references Table_Chapter(Table_Chapter_id)
    
);
-- savol 1
insert into Questions(Questions,Table_Chapter_id) values
('5+5',1); 
-- savol 2
insert into Questions(Questions,Table_Chapter_id) values
('5+4',1);
-- savol 3
insert into Questions(Questions,Table_Chapter_id) values
('5+6',1);
-- savol 4
insert into Questions(Questions,Table_Chapter_id) values
('5+13',1);
-- savol 5
insert into Questions(Questions,Table_Chapter_id) values
('5+10',1);
-- savol 6
insert into Questions(Questions,Table_Chapter_id) values
('5+55',1);
-- savol 7
insert into Questions(Questions,Table_Chapter_id) values
('5+9',1);
-- savol 8
insert into Questions(Questions,Table_Chapter_id) values
('5+7',1);
-- savol 9
insert into Questions(Questions,Table_Chapter_id) values
('5+5',1);
-- savol 10
insert into Questions(Questions,Table_Chapter_id) values
('5+25',1);

-- --chapter 2
insert into Questions(Questions,Table_Chapter_id) values
('5+25',2);



drop table question_options cascade;
create table question_options(
    question_options_id serial primary key,
    question_options_bd  VARCHAR(150),
    question_options_boolean BOOLEAN  default false,

    Question_id int references Questions(Question_id)
);



-- question_options 1


insert into question_options(question_options_bd,Question_id) values
('50',1); 
insert into question_options(question_options_bd,Question_id) values
('80',1); 
 
insert into question_options(question_options_bd,Question_id) values
('55',1);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('10',true,1);  


-- question_options 2


insert into question_options(question_options_bd,Question_id) values
('78',2); 
insert into question_options(question_options_bd,Question_id) values
('95',2); 
 
insert into question_options(question_options_bd,Question_id) values
('55',2);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('9',true,2);  

-- question_options 3


insert into question_options(question_options_bd,Question_id) values
('78',3); 
insert into question_options(question_options_bd,Question_id) values
('95',3); 
 
insert into question_options(question_options_bd,Question_id) values
('55',3);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('11',true,3);  


-- question_options 4


insert into question_options(question_options_bd,Question_id) values
('78',4); 
insert into question_options(question_options_bd,Question_id) values
('95',4); 
 
insert into question_options(question_options_bd,Question_id) values
('55',4);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('18',true,4);  



-- question_options 5

insert into question_options(question_options_bd,Question_id) values
('78'5); 
insert into question_options(question_options_bd,Question_id) values
('95'5); 
 
insert into question_options(question_options_bd,Question_id) values
('55'5);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('15',true,5);  

-- question_options 6

insert into question_options(question_options_bd,Question_id) values
('78',6); 
insert into question_options(question_options_bd,Question_id) values
('95',6); 
 
insert into question_options(question_options_bd,Question_id) values
('55',6);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('60',true,6);  

-- question_options 7

insert into question_options(question_options_bd,Question_id) values
('78'7); 
insert into question_options(question_options_bd,Question_id) values
('95'7); 
 
insert into question_options(question_options_bd,Question_id) values
('55'7);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('14',true,7);  

-- question_options 8

insert into question_options(question_options_bd,Question_id) values
('88',8); 
insert into question_options(question_options_bd,Question_id) values
('77',8); 
 
insert into question_options(question_options_bd,Question_id) values
('55',8);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('12',true,8);  


-- question_options 9

insert into question_options(question_options_bd,Question_id) values
('99',9); 
insert into question_options(question_options_bd,Question_id) values
('77',9); 
 
insert into question_options(question_options_bd,Question_id) values
('10',9);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('10',true,9);  

-- question_options 10 

insert into question_options(question_options_bd,Question_id) values
('1010',10); 
insert into question_options(question_options_bd,Question_id) values
('77',10); 
 
insert into question_options(question_options_bd,Question_id) values
('10',10);  
insert into question_options(question_options_bd,question_options_boolean,Question_id) values
('30',true,10);  





