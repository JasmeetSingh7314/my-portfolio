export const base_photos = [
  {
    name: "Asian Koel",
    link: "/assets/photos/Koel.jpg",
  },
  {
    name: "Collared Kingfisher",
    link: "/assets/photos/CKingfisher.jpg",
  },

  {
    name: "Plumbeus Redstart",
    link: "/assets/photos/PRedstart.jpg",
  },
  {
    name: "Dark Browed Rosefinch",
    link: "/assets/photos/Rosefinch.jpg",
  },
  {
    name: "Eurasian Hoopoe",
    link: "/assets/photos/Hoopoe.jpg",
  },
  {
    name: "Dalmation Pelican",
    link: "/assets/photos/Pelican.jpg",
  },
  {
    name: "Collared Kingfisher",
    link: "/assets/photos/CoKingfisher.jpg",
  },
  {
    name: "Western Reef Heron",
    link: "/assets/photos/Heron.jpg",
  },
  {
    name: "Siberian Stonechat",
    link: "/assets/photos/stonechat.jpg",
  },
  {
    name: "Beach Curlew",
    link: "/assets/photos/Curlew.jpg",
  },
  {
    name: "Indian Grey Hornbill",
    link: "/assets/photos/Hornbill.jpg",
  },
  {
    name: "Brahminy Starling",
    link: "/assets/photos/BrahminyStarling.jpg",
  },
  {
    name: "Pied Bushchat",
    link: "/assets/photos/Bushchat.jpg",
  },
  {
    name: "White Throated Kingfisher",
    link: "/assets/photos/wtKingfisher.jpg",
  },
];

export default function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
