
## Architecture  

PSP The purpose of this microservice is to enable customers to process their transactions (cash-in) and make payments to our customers (cash-out).

- API in NodeJS with [Express](https://github.com/expressjs/express) framework.
- [PostgreSQL](https://www.postgresql.org/) Database.
- The code style is based in [Airbnb JS style guide](https://github.com/airbnb/javascript) as is.


## How to build  

### Locally

To build `PSP Gateway` locally is simple, just run:  
```make install```

## How to Run

_Since the following two options uses your local `node_modules` its required running ```$ make install``` first._

### Using your local machine

```make run```

### Using docker-compose

```make dev```

## Other Utilities

```bash
make seed # important to run the seed command  to populate merchant data
make lint # Check lint once
make lint/watch # Check lint in every change
make test # Run all tests
make test/watch # Watch all tests in every change
```

# PSP API ENDPOINTS

  <_localhost:5053/transaction>

  * **Method:**

   `POST`

  * **EXAMPLE CURL POST REQUEST**

 ```curl -X POST \
  http://localhost:5053/transaction \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 208' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:5053' \
  -H 'Postman-Token: a174198d-06bc-40ce-b7ea-69c398c4e847,1fb1d449-5839-420b-abd9-3b498ae35ccf' \
  -H 'User-Agent: PostmanRuntime/7.16.3' \
  -H 'cache-control: no-cache' \
  -H 'x-token-merchant: 9HBDt7PUhSElc2yAZGYkkkuZebpzfPyA' \
  -d '{
	"price": "101.50",
	"description": "Smartband XYZ 3.0",
	"cardNumber": "5227207149481829",
	"cvv": "321",
	"cardExpirationDate": "2020-03-05",
	"cardHolder": "Douglas Silva",
	"paymentMethod": "credit"
	
}'
```
* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "transaction": {
        "createdAt": "2019-10-29T20:12:35.712Z",
        "id": "fffa24e0-e111-454d-9ad3-73523847859e",
        "price": "101.50",
        "description": "Smartband XYZ 3.0",
        "cardNumber": "1829",
        "cvv": 321,
        "cardExpirationDate": "2020-03-05T00:00:00.000Z",
        "cardHolder": "Douglas Silva",
        "paymentMethod": "credit",
        "cardBrand": "mastercard",
        "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
        "updatedAt": "2019-10-29T20:12:35.712Z",
        "deleted_at": null
    }
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
    "message": "Token Merchant is not defined",
    "status": 401"
}`

  <_http://localhost:5053/transaction>


* **Method:**

   `GET`

    * **EXAMPLE CURL POST REQUEST**

 ```curl -X GET \
  http://localhost:5053/transaction \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:5053' \
  -H 'Postman-Token: b89fcb30-6516-4e90-a7fc-4b312fab1f80,3daa6671-1436-4089-9410-a770fd4e12c4' \
  -H 'User-Agent: PostmanRuntime/7.16.3' \
  -H 'cache-control: no-cache' \
  -H 'x-token-merchant: 9HBDt7PUhSElc2yAZGYkkkuZebpzfPyA''
```

   

   * **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "transactions": [
        {
            "id": "a21385c2-883b-4de1-a605-03c2370d8508",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T18:58:57.495Z",
            "updatedAt": "2019-10-29T18:58:57.496Z",
            "deleted_at": null
        },
        {
            "id": "a5de34d1-e9d9-4e95-83ef-2a90130be8e1",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "debit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T18:59:15.105Z",
            "updatedAt": "2019-10-29T18:59:15.105Z",
            "deleted_at": null
        },
        {
            "id": "e94f313c-b55e-4ebc-a077-3a7f3f40e8ae",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "debit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:16:39.611Z",
            "updatedAt": "2019-10-29T19:16:39.611Z",
            "deleted_at": null
        },
        {
            "id": "a45488ac-0cb7-4f3e-ad4a-bf95677d9f1c",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "debit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:28:42.331Z",
            "updatedAt": "2019-10-29T19:28:42.332Z",
            "deleted_at": null
        },
        {
            "id": "405bb480-10b9-48cb-aa22-887946b924e3",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "debit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:30:10.312Z",
            "updatedAt": "2019-10-29T19:30:10.313Z",
            "deleted_at": null
        },
        {
            "id": "1f7f0600-67f1-46fe-8f68-3dd85c93a540",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "debit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:30:50.623Z",
            "updatedAt": "2019-10-29T19:30:50.623Z",
            "deleted_at": null
        },
        {
            "id": "6845f615-ba58-4240-ab47-303de1f5a548",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:31:10.117Z",
            "updatedAt": "2019-10-29T19:31:10.117Z",
            "deleted_at": null
        },
        {
            "id": "e6b33353-5c14-4235-9aff-f350f3d0b5aa",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T19:44:40.506Z",
            "updatedAt": "2019-10-29T19:44:40.506Z",
            "deleted_at": null
        },
        {
            "id": "859d3433-b1ee-4076-8417-d367745f0cf1",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T20:06:49.676Z",
            "updatedAt": "2019-10-29T20:06:49.676Z",
            "deleted_at": null
        },
        {
            "id": "8543a817-b4f7-4b65-8ac0-c0a5c67baa83",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T20:11:10.030Z",
            "updatedAt": "2019-10-29T20:11:10.030Z",
            "deleted_at": null
        },
        {
            "id": "fffa24e0-e111-454d-9ad3-73523847859e",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T20:12:35.712Z",
            "updatedAt": "2019-10-29T20:12:35.712Z",
            "deleted_at": null
        },
        {
            "id": "5f31548c-24cc-4a1c-b10d-b3a7109dfe3b",
            "merchantId": "30d8a1a7-06c8-4833-8d7d-0d09f7186f48",
            "price": "101.50",
            "description": "Smartband XYZ 3.0",
            "cardNumber": "1829",
            "cvv": 321,
            "cardExpirationDate": "2020-03-05T00:00:00.000Z",
            "cardHolder": "Douglas Silva",
            "paymentMethod": "credit",
            "cardBrand": "mastercard",
            "createdAt": "2019-10-29T21:22:18.824Z",
            "updatedAt": "2019-10-29T21:22:18.824Z",
            "deleted_at": null
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
    "message": "Token Merchant is not defined",
    "status": 401"
}`


  <_http://localhost:5053/payable>

* **Method:**

   `GET`

    * **EXAMPLE CURL POST REQUEST**

 ```curl -X GET \
  http://localhost:5053/transaction \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:5053' \
  -H 'Postman-Token: b89fcb30-6516-4e90-a7fc-4b312fab1f80,3daa6671-1436-4089-9410-a770fd4e12c4' \
  -H 'User-Agent: PostmanRuntime/7.16.3' \
  -H 'cache-control: no-cache' \
  -H 'x-token-merchant: 9HBDt7PUhSElc2yAZGYkkkuZebpzfPyA''
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "payables": [
        {
            "status": "paid",
            "total": "98.455"
        },
        {
            "status": "waiting_funds",
            "total": "96.425"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
    "message": "Token Merchant is not defined",
    "status": 401"
}`

