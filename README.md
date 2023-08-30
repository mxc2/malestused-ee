# Mälestused ee

Current authors: Marcus-Indrek Simmer

Original Authors: Marcus-Indrek Simmer ja Margen Peterson

Mälestused.ee is an online platform that empowers users to design personalized collages using their own photos. It is currently back at work in progress by Marcus-Indrek Simmer, starting from August 2023, and is missing some crucial features. The user-friendly interface allows the user to choose from various collage styles, upload their photos, arrange them to their liking, and even opt for framing. Website will offer two convenient paths: DIY collage creation (WIP!) or expert assistance.

## Key Features:

- Collage Styles: Browse and choose from a range of collage styles.

- Photo Upload: Easily upload photos to use in creating a collage masterpiece.

- Self-Service Design: Arrange and design the collage using a self-service interface. (WIP!)

- Framing Options: Choose whether they would like the collage to be framed or not.

- Flexible Payment: Securely make payments, potentially by using Montonio or similar. (WIP!)

- Guided Assistance: For those who prefer expert help, simply upload their photos and provide instructions for the collage design.

## Screenshots

![Main Page](https://i.postimg.cc/zGKtKrsQ/screencapture-malestused-test-2-vercel-app-2022-02-10-14-12-25.png)
![Order Page](https://i.postimg.cc/FKqVBnXS/screencapture-malestused-test-2-vercel-app-kollaazid-2022-02-10-14-18-32.png)

## Tech

- [React]
- [Node]
- [MongoDB]


## Installing

```sh

Repo cloning> https://github.com/rakenduste-programmeerimine-2021/malestused-ee.git

cd malestused/local-dev

docker-compose run --rm --no-deps backend-node install
docker-compose run --rm --no-deps frontend-react install

docker-compose up -d

Create 3 collections in MongoDB: itellas, omnivas, dpds and use corresponding CSV files from backend-node/csvFiles directory
```

   [React]: https://reactjs.org/
   [Node]: https://nodejs.org/en/
   [MongoDB]: https://www.mongodb.com/

