console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

// set myCollection to an empty array
const myCollection = [];

// write function to add album to myCollection array and return album once pushed
function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    collection,
    title,
    artist,
    yearPublished,
  };
  collection.push(album);
  return album;
}

// add 6 albums to myCollection
console.log(
  addToCollection(myCollection, "A Sea of Split Peas", "Courtney Barnett", 2013)
);
console.log(
  addToCollection(
    myCollection,
    "Tell Me How You Really Feel",
    "Courtney Barnett",
    2018
  )
);
console.log(addToCollection(myCollection, "Free Love", "Sylvan Esso", 2020));
console.log(
  addToCollection(myCollection, "Jump Rope Gazers", "The Beths", 2020)
);
console.log(addToCollection(myCollection, "Rumours", "Fleetwood Mac", 1977));
console.log(
  addToCollection(myCollection, "Can't Buy A Thrill", "Steely Dan", 1972)
);

// write function to show collection
function showCollection(collection, album) {
  for (album of myCollection) {
    console.log(
      `${collection} ${album.title} by ${album.artist}, published in ${album.yearPublished}.`
    );
  }
}

// test showCollection
showCollection(`Album in my collection:`);

// function to find albums by artist and add them to an array
function findByArtist(collection, artist) {
  let artistArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistArray.push(collection[i].title);
    }
  }
  return artistArray;
}

// test findByArtist
console.log(findByArtist(myCollection, "Courtney Barnett"));
console.log(findByArtist(myCollection, "Steely Dan"));
console.log(findByArtist(myCollection, "Sylvan Esso"));
console.log(findByArtist(myCollection, "ABBA"));

// STRETCH GOALS

// function to search for artist and year
function search(collection, artist, yearPublished) {
  const searchArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i].artist === artist &&
      collection[i].yearPublished === yearPublished
    ) {
      searchArray.push(
        `artist: ${collection[i].artist}, year: ${collection[i].yearPublished}`
      );
    }
  }
  if (searchArray.length === 0) {
    return collection;
  }
  return searchArray;
}

console.log(search(myCollection, "Courtney Barnett", 2018));
console.log(search(myCollection, "Sylvan Esso", 2020));
console.log(search(myCollection, "ABBA", 2024));
console.log(search(myCollection, "Wilco", 1908));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
