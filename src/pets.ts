export type Pet = {
  uid: number;
  imageUrl: string;
  title: string;
  location: string;
  price: number;
};

export const pets = [
  {
    uid: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpCpci6T6gsV2zl-MIeKocYqXgK_UwiNW9JkljwrFClIjsKP-Iz0vcIA&s=10',
    title: 'Puppy Max',
    location: 'New-York, USA',
    price: 200,
  },
  {
    uid: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzZXFj-65562abM05C3-DlyTTlWTyt176SZWgl5TKSmAtUiU2QLelL_Iy&s=10',
    title: 'Cat Chip',
    location: 'New-York, USA',
    price: 180,
  },
  {
    uid: 3,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXU3FNz9XivfFHjOSK-1-dN2cjWsTxsO-hmEEXlyt50gjmVWkMiAaN5r0&s=10',
    title: 'Golden Rex',
    location: 'Austin, USA',
    price: 350,
  },
  {
    uid: 4,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4IjvBV-R0QE5CkcLha42rB0LblTa3wiE38VJKzvP-4E9uQgAz4sH9YY&s=10',
    title: 'Marlee',
    location: 'Sydney, Australia',
    price: 180,
  },
  {
    uid: 5,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUiyE730VcyZhDRW9Awiw_sw6T3OGuOLXJQcW9-AJ2Okx-_rZ9HACaBY&s=10',
    title: 'Bunny Coco',
    location: 'London, UK',
    price: 80,
  },
  {
    uid: 6,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSJhTSSrnM9BPsOfZjc-miZ7UYRqeJj8W0KchOEc85JywYkHTRHMaXttu&s=10',
    title: 'Kitty Luna',
    location: 'Toronto, Canada',
    price: 120,
  },
];
