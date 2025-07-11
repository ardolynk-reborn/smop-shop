# Smop Shop application

## Preface
This project has been initially developed as a quick test assessment. So it's rather an academic application rather than a real-life product.

## Instructions to install and run

### Prerequisities
* Docker installed on a development machine
* Expo installed on a phone
* They are connected to the same router

### Step-by-step instructions
1. Start the backend part with
```bash
docker-compose up -d
```
2. `cd` into `smop-shop-mobile` and serve the client part
```bash
npm install
npx expo
```
3. There will a QR code shown in the terminal. Open Expo application on your phone and scan it.

### What's done
* A backend service providing a list of products and currency rates. There is also a method to check and confirm your order with final pricing calculation.
* A mobile app shows the list of products with both official and local prices. The latter are calculated depending on a currency selected in a dropdown list.
* You can browse product details and put it into your cart.
* An order gets pre-calculated before sending. Then you get a confirmed receipt from server.

## What's still to do
* User accounts
* Further order processing (registering, payment, delivery, rejection)
* Web frontend (only a mobile application is available yet)

