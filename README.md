# SD-Homeworks2
## Integrantes: Ze Hui Fu y Joaquín Fernández.
**Instrucciones y uso**
```bash
https://github.com/Joacker/SD-Homeworks2.git
```


----
**Preguntas**
----
- ¿Por qué Kafka funciona bien en este escenario?

Es util en el escenario de un login, debido a que Kafka esta diseñado para enviar mensajes en tiempo real, por lo tanto permite bloquear usuarios inmediatamente luego de que se cumplan ciertas condiciones de manera inmediata.

- Basado en las tecnologías que usted tiene a su disposición  (Kafka, backend) ¿Qué haría usted para manejar una gran cantidad de usuarios al mismo tiempo?

Para manejar una gran cantidad de usuarios y/o peticiones, se deberá aumentar la cantidad de consumidores para los brokers, además se pueden agregar más brokers para que así los datos se dividan en particiones, se repliquen y distribuyan dentro del clúster.

---



**Finalmente para ejecutar el SW se recomienda usar el siguiente comando**

 ```bash
docker-compose up --build
```

Ruta tipo post para ingresar usuarios del producer al consumer (1):

```url
http://localhost:3000/login [post]
```

Añadiendo también el siguiente json

```json
{
	"username":"pablo",
	"password":"123"
}
```

```url
http://localhost:8000/blocked [get]
```

Al ejecutar esta ruta en el cliente postman o insomnia retornará la lista de usuarios bloqueados bajo las condiciones entregadas por el enunciado. Un ejemplo más práctico es el siguiente:

```json
[
    "pablo"
]
```
En caso de que el consumer no logre conectarse con el producer, se recomienda efectuar la siguiente ruta asociado al directorio root:

```url
http://localhost:8000/
```

Luego de esto se puede efectuar el inicio de sesión con la ruta post ya mencionada anteriormente (1). 


Cabe hacer mención que unos cuantos scripts del trabajo son extraidos de ejemplos practicos vistos en ayudantía y documentación. Gracias por su atención.

![github small](https://elestanteliterario.com/wp-content/uploads/2018/12/franz-kafka.jpg)





if(bloqueados.includes(json)) /*json["name"]*/
      {
        let word = json["username"]
        //res.json(word+" bloqueado")
        console.log("ta bloqueado sorry :(")
        //return
      }else{
        if(!(json["username"] in registro)){
          var array = []
          registro[json["username"]] = array
          registro[json["username"]].push(json["tiempo"])
        }else{
          registro[json["username"]].push(json["tiempo"])
        }
        //console.log(registro[json["username"]])
        //console.log(registro[json["username"]].length)
        if(registro[json["username"]].length >= 3 && registro[json["username"]][registro[json["username"]].length -1] - registro[json["username"]][registro[json["username"]].length -5] <60){
          //console.log(registro[json["username"]][registro[json["username"]].length -1] - registro[json["username"]][registro[json["username"]].length -5])
          console.log("Bloqueado")
          bloqueados.push(json["username"])
          console.log(bloqueados)
        }
      }





Topic: Ventas
http://localhost:3001/sales

{
	"client": "abel",
  "count_sopaipillas": "3",
	"hora": "14:45",
	"stock": "5",
	"ubicacion": "2,1"
}

Topic: Stock



Topic: Coordenadas


Topic: Miembros
http://localhost:3000/new_member

{
	"name": "abel",
  	"lastname": "baulloza almeida",
	"dni": "20.245.835-1",
	"mail": "abel.baulloza@mail.udp.cl",
	"patente": "CGZY30",
	"premium":"si"
}