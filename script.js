var imageURLs = [
  {
    url: "https://github.com/droidswithdrinks/droidswithdrinks.github.io/blob/main/images/droids_coffee.png", 
    alt: "Two androids cheersing coffee mugs", 
    title: "Coffee and coding"
  }, 
  {
    url: "https://github.com/droidswithdrinks/droidswithdrinks.github.io/blob/main/images/droids_icecream.png", 
    alt: "Two androids cheersing ice cream cones", 
    title: "Ice Cream Sandwich"
  },
  {
    url: "https://github.com/droidswithdrinks/droidswithdrinks.github.io/blob/main/images/droids_margs.png", 
    alt: "Two androids cheersing margaritas", 
    title: "Margaritas and mobile"
  }, 
  {
    url: "https://github.com/droidswithdrinks/droidswithdrinks.github.io/blob/main/images/droids_martinis.png", 
    alt: "Two androids cheersing martinis", 
    title: "MAD martinis"
  }
];

function getImageSrc() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  return imageURLs[randomIndex];
}
