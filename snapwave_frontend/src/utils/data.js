import animals from "../assets/icons/animals.jpeg";
import anime from "../assets/icons/anime.jpeg";
import art from "../assets/icons/art.jpeg";
import cars from "../assets/icons/cars.jpeg";
import fitness from "../assets/icons/fitness.jpeg";
import food from "../assets/icons/food.jpeg";
import gaming from "../assets/icons/gaming.jpeg";
import movies from "../assets/icons/movies.png";
import nature from "../assets/icons/nature.jpeg";
import quotes from "../assets/icons/quotes.jpeg";
import travel from "../assets/icons/travel.jpeg";
import wallpaper from "../assets/icons/wallpaper.jpeg";
import others from "../assets/icons/others.jpeg";

export const categories = [
  {
    name: "animals",
    image: animals,
  },
  {
    name: "anime",
    image: anime,
  },
  {
    name: "art",
    image: art,
  },
  {
    name: "cars",
    image: cars,
  },
  {
    name: "fitness",
    image: fitness,
  },
  {
    name: "food",
    image: food,
  },
  {
    name: "gaming",
    image: gaming,
  },
  {
    name: "movies",
    image: movies,
  },
  {
    name: "nature",
    image: nature,
  },
  {
    name: "quotes",
    image: quotes,
  },
  {
    name: "travel",
    image: travel,
  },
  {
    name: "wallpaper",
    image: wallpaper,
  },
  {
    name: "others",
    image: others,
  },
];

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match "${searchTerm}*" || category match "${searchTerm}*" || about match "${searchTerm}*"]{
    image {
      asset -> {
        url
      }
    },
    _id, 
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save [] {
      _key,
      postedBy -> {
        _id,
        userName,
        image,
      },
    },
  }`;

  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image {
    asset -> {
      url
    }
  },
  _id, 
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save [] {
    _key,
    postedBy -> {
      _id,
      userName,
      image,
    },
  },
}`;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
