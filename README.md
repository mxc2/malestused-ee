# Mälestused ee

Autorid: Marcus-Indrek Simmer ja Margen Peterson

Mälestused.ee on veebipood mille mõte on pakkuda inimestele võimalus luua kollaaž, enda tehtud piltidest. Inimene (kutsume edaspidi nüüd kliendiks) tuleb lehele, valib endale sobiva kollaaži stiili, laeb ise enda pildid üles, nende piltidega kujundab enda kollaaži iseteeninduses, vajadusel valib veel et kas kollaaž raamitakse ära või mitte, ning siis maksevahendiga maksab tellimuse eest. Lisaks on kliendil võimalik "skippida" iseteenindus protsess, laadides lihtsalt pildid üles ja kirjeldades kuidas ta soovib et kollaaž välja näeks. See aga maksab rohkem kui iseteeninduse kasutamine.

## Screenshots

![Main Page](https://i.postimg.cc/zGKtKrsQ/screencapture-malestused-test-2-vercel-app-2022-02-10-14-12-25.png)
![Order Page](https://i.postimg.cc/FKqVBnXS/screencapture-malestused-test-2-vercel-app-kollaazid-2022-02-10-14-18-32.png)

## Tech

- [React]
- [Node]
- [MongoDB]


## Installimine

```sh

Repo kloonimine> https://github.com/rakenduste-programmeerimine-2021/malestused-ee.git

cd malestused/local-dev kausta

docker-compose run --rm --no-deps backend-node install
docker-compose run --rm --no-deps frontend-react install

docker-compose up -d

Mongodbs tegema 3 collectionit: itellas, omnivas, dpds ning backend-node/csvFiles kasutast sisestama vastavad vsc fileid
```

   [React]: https://reactjs.org/
   [Node]: https://nodejs.org/en/
   [MongoDB]: https://www.mongodb.com/

