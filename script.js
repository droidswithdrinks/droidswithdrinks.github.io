var imageURLs = [
  {
    url: "images/droids_coffee.png", 
    alt: "Two androids cheersing coffee mugs", 
    title: "Coffee and coding"
  }, 
  {
    url: "images/droids_icecream.png", 
    alt: "Two androids cheersing ice cream cones", 
    title: "Ice Cream Sandwich"
  },
  {
    url: "images/droids_margs.png", 
    alt: "Two androids cheersing margaritas", 
    title: "Margaritas and mobile"
  }, 
  {
    url: "images/droids_martinis.png", 
    alt: "Two androids cheersing martinis", 
    title: "MAD martinis"
  }
];

function getImageSrc() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  return imageURLs[randomIndex];
}
