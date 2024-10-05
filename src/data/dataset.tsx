export const Address = [
  {
    addressNumber: '11111',
    street1: 'Betcon Lab, Yale University',
    city: 'New Haven',
    zip:'06511'

  },
  {
    addressNumber: '22222',
    street1: 'YHack Tsai City',
    city: 'New Haven',
    zip:'06511'
  },
];

export type Order = {
  trackNumber: string;
  From: string;
  nameFrom: string;
  To: string;
  nameTo: string;
  createTime: string;
  price: number;
  status: string;
};

export const Orders: Order[] = [
  {
    trackNumber: '111111111',
    From: '11111', // addressNumber
    To: '22222', // addressNumber
    createTime: 'Oct 05',
    price: 5.88,
    nameFrom: 'Yuqi',
    nameTo: 'yhack',
    status: 'Drone on the way!'
  },

  {
    trackNumber: '2222222',
    From: '22222', // addressNumber
    To: '11111', // addressNumber
    createTime: 'Oct 04',
    price: 7.01,
    nameFrom: 'Yuqi',
    nameTo: 'yhack',
    status: 'Delivered'
  },

];