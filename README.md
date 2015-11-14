# Algae 1.0

## Intro

Deze website is bedoeld om de belangrijkheid van algen te promoten via een leuke visuele en geanimeerde website.

## Installeren

Om de css en html the minifyen moet je de benodigde grunt modules installeren. Hiervoor moet je zeker Nodejs hebben samen met NPM(zijn package manager).

Voer het volgende uit om de benodigde modules op te halen
```bash
npm update
```

Vervolgens om de css en js te minifyen doe je:
```bash
grunt
```

Het zal de js en css samen voegen in twee aparte files:

* `algae.min.js` voor alle javascript files
* `algae.min.css` voor alle css files

het enige wat nu rest te doen is om je css en js imports te veranderen door deze en je hebt een productieversie.
Je kan in de map algae-production zo'n versie al vinden.
