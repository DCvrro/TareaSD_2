const {Base} = requier('pg');

const pg_config = 


const reg_member = async(name, lastname, dni, mail, patente, premium) => {
    const query = "INSERT INTO member(name, lastname, dni, mail, patente, premium) values ($nm ,$lnm,$dni,$m,$pat ,$prem);";

}