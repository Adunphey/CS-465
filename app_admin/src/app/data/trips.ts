export interface Trip {
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  perPerson: string;
  image: string;
  description: string;
}

export const trips: Trip[] = [
  {
    code: 'GALR210214',
    name: 'Gale Reef',
    length: '4 nights / 5 days',
    start: '2021-02-14T08:00:00Z',
    resort: 'Emerald Bay, 3 stars',
    perPerson: '799.00',
    image: '/assets/images/reef1.jpg',
    description:
      '<p>Gale Reef Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.</p>'
  },
  {
    code: 'DAWR210315',
    name: "Dawson's Reef",
    length: '4 nights / 5 days',
    start: '2021-03-15T08:00:00Z',
    resort: 'Blue Lagoon, 4 stars',
    perPerson: '1199.00',
    image: '/assets/images/reef2.jpg',
    description:
      "<p>Dawson's Reef Integer magna leo, posuere et dignissim vitae, porttitor at odio.</p>"
  },
  {
    code: 'CLAR210621',
    name: "Claire's Reef",
    length: '4 nights / 5 days',
    start: '2021-06-21T08:00:00Z',
    resort: 'Coral Sands, 5 stars',
    perPerson: '1999.00',
    image: '/assets/images/reef3.jpg',
    description:
      "<p>Claire's Reef Donec sed felis risus. Nulla facilisi. Donec a orci tellus.</p>"
  }
];