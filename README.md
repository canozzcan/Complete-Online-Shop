<p align="center">
  <a href="#calling-about">About</a>&nbsp;&nbsp;|&nbsp;
  <a href="#gear-technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;
  <a href="#sparkles-main-features">Features</a>&nbsp;&nbsp;|&nbsp;
  <a href="#video-demo-video">Demo Video</a>&nbsp;&nbsp;|&nbsp;
  <a href="#computer-setup">Setup</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## :calling: About
WDE is a complete online shopping store where you can register and buy the product you want.

## :gear: Technologies

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide?retiredLocale=tr)
- [NodeJS](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [NoSQL](https://www.mongodb.com/nosql-explained)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/docs)



EJS was used for front-end design.<br/>
Node.js were used for backend-side processes.<br/>
Database operations of this application are completed on MongoDB using NoSQL.<br/>
Stripe API used for payment transactions

<br/>

## :sparkles: Main Features

  - Data informations were kept in MongoDB database and updated dynamically.
  - The administrator can log into the application and perform CRUD operations within the application.
  - Users must register to use the application.
  - The user can add products to the card without logging in, but must be logged in to purchase.
  - All products that the user add to the card without logging in are kept in their own session, not localhost, and they are not lost even if the page is refreshed.
  - The user cannot register more than once with the same email.
  - Admin returns user status regarding payment(Fullfilled, Pending, Cancelled)
  - Payment transactions are handled using the Stripe API.  



## :video: Demo Video



https://user-images.githubusercontent.com/102858441/174395474-f534f458-992b-4d9e-98d3-123d6e683ee9.mp4



  
## :computer: Setup

  - To download this project, **Git**, **NodeJs** and **MongoDB** must be installed on your computer.  
  - To use the Stripe API, you should creating a Stripe account and using your own account. Otherwise, all transactions you perform will fall into my Stripe panel.
  If you do not have a Stripe account, please check the stripe documentation to how to sign up and use Stripe [here.](https://stripe.com/docs)
  - After these installations open the git terminal. And write the following expression:
```makefile
git clone https://github.com/canozzcan/Complete-Online-Shop.git
npm install

```
  
 ```makefile
npm start
```
  - Then open http://localhost:3000/ on your browser.
   

<br/>


