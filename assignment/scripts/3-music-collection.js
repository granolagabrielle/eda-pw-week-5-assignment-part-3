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
/* function findByArtist(collection, artist) {
  let artistArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      console.log(collection[i].artist);
      artistArray.push(collection[i].album);
    }

    return artistArray;
  }
}
*/

/* function findByArtist(artist, collection) {
  const artistArray = [];
  const i = 0;
  for (artist of collection) {
    if (artist === collection[i].artist) {
      artistArray.push(collection[i].album);
      i++;
    }
  }
  return artistArray;
}
*/

// test findByArtist
console.log(findByArtist("Courtney Barnett", myCollection));
console.log(findByArtist("Steely Dan", myCollection));
console.log(findByArtist("ABBA", myCollection));

// STRETCH GOALS

console.log(myCollection);

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
