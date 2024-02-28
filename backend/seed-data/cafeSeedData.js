const cafeSeedData = [
  {
    _id: '65d661b36737df53bf2ccdcb',
    details: {
      name: 'Cafe in the Crypt',
      location: 'St Martin-in-the-Fields, Trafalgar Square, London WC2N 4JJ',
      phone: '+44 20 7766 1158',
      website: 'www.stmartin-in-the-fields.org/visit/cafe-in-the-crypt',
    },
    images: [
      {
        url: 'https://www.stmartin-in-the-fields.org/wp-content/uploads/2022/01/stmitf-christmas-2021-028-1235x823.jpg',
        title: 'Cafe in the Crypt',
        altText: 'Cafe in the Crypt',
      },
    ],
    facilities: ['wheelchair accessibility', 'wi-fi', 'toilets'],
    location: {
      type: "Point",
      coordinates: [51.5089, -0.1264],
    },
  },

  {
    _id: '65d661b36737df53bf2ccdcc',
    details: {
      name: 'The British Library Cafe - Peyton & Byrne',
      location: '96 Euston Rd, London NW1 2DB',
      phone: '+44 020 7412 5528',
      website:
        'http://www.yelp.com/biz/the-british-library-cafe-peyton-and-byrne-london',
    },
    images: [
      {
        url: 'https://cdn.accentuate.io/883654675/1661435168612/BL2.jpg?v=1661435168612',
        title: 'Cafe at The British Library',
        altText: 'Barista at British Library Cafe',
      },
    ],
    facilities: [
      'wheelchair accessibility',
      'wi-fi',
      'toilets',
      'baby changing',
      'visual impaired',
      'outdoor area',
    ],
    location: {
      type: "Point",
      coordinates: [51.5297, -0.1270],
    },
  },

  {
    _id: '65d661b36737df53bf2ccdcd',
    details: {
      name: 'Tate Modern Corner',
      location:
        'Level 1, Natalie Bell Building, Tate Modern, Bankside, London SE1 9TG',
      phone: '+44 020 7412 5528',
      website: 'http://www.tate.org.uk/visit/tate-modern/corner',
    },
    images: [
      {
        url: 'https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/Tate-Mondrian_Klint_Cocktail_Katie_Wilson.wid.width-1200.jpg',
        title: 'Cocktail at Tate Modern Corner Bar',
        altText: 'Orange cocktail with shell decoration',
      },
    ],
    facilities: [
      'wheelchair accessibility',
      'autism friendly',
      'toilets',
      'visual impaired',
    ],
    location: {
      type: "Point",
      coordinates: [51.5076, -0.0994],
    },
  },
];

module.exports = cafeSeedData;

// In original data, Tate Modern Corner DOES HAVE wifi & baby changing but DOES NOT HAVE autism friendly facilities. I changed this for testing purposes. 
