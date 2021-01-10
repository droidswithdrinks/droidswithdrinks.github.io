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
  },
  {
    url: "images/droids_bloody.png",
    alt: "Two androids cheersing bloody marys",
    title: "Brunch Bunch"
  },
  {
    url: "images/droids_bubble_tea.png",
    alt: "Two androids cheersing bubble teas",
    title: "procrasTEAnating"
  },
  {
    url: "images/droid_miami.png",
    alt: "Two androids cheersing miami vice cocktails",
    title: "Five star cocktail"
  },
  {
    url: "images/droids_smoothies.png",
    alt: "Two androids cheersing smoothies",
    title: "Smooth(l)ie running apps"
  }
];

function getImageSrc() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  return imageURLs[randomIndex];
}
