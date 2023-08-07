<h3 align="center">
    bertini36/vending-machine 🍺
</h3>
<p align="center">
  <a href="#-installation">Installation</a>&nbsp;&nbsp;•&nbsp;
  <a href="#-tweaks">Tweaks</a>&nbsp;&nbsp;•&nbsp;
  <a href="#-screenshots">Screenshots</a>&nbsp;&nbsp;
</p>

## 🍺 Vending machine
**Abacum**'s employees need to be able to have drinks, snacks and refreshments 
within reach, so the company is acquiring a **vending machine** for the office. 
This vending machine comes without pre-installed software (luckily, this machine 
is special and has an unlimited amount of products).

We have to develop the software so that the employees **can add money and the machine 
will count it and of course buy some of the products from the machine**.

## 🚀 Installation
```bash
git clone https://github.com/bertini36/vending-machine.git
cd ~/vending-machine

npm install
npm run start
```

## ⚙️Tweaks
Some environmental variables can be set to tweak the application, you just need to edit `.env.development`
file and restart the application.
- `REACT_APP_USE_BACKEND`: By default local mocks are used
- `REACT_APP_BACKEND_URL`: If `REACT_APP_USE_BACKEND` is set to `true`, this variable will be used as the backend url
- `REACT_APP_ENABLE_SOUNDS`: Enable sounds to live the whole experience

## 🖼️ Screenshots
### Login page
![login page](https://github.com/bertini36/vending-machine/blob/master/public/screenshots/login.png?raw=true)

### Product selection page
![product selection page](https://github.com/bertini36/vending-machine/blob/master/public/screenshots/vending-machine.png?raw=true)

### Mobile appearance
![responsive](https://github.com/bertini36/vending-machine/blob/master/public/screenshots/mobile.png?raw=true)

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>