# Smop Shop application (test assessment)

## Preface
First of all I apologize for all these deployment complications I faced last minutes of the alloted time.
That caused me to make extra commits (and even reuploads) after the last code changes. So I hope for your understanding.
Also I'm interesting in continuation of a mobile part development, all changes will appear on a `dev` branch.

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

## What's still to do
* Transition to detail form on the list. The form itself is already here, but I still haven't navigate to it.
* A shopping cart functionality (add to cart option will be available on detail form)
* Sending an order and processing the response "ready for confirmation"

(these changes will be available as soon as possible)