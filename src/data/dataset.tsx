const time_options: Intl.DateTimeFormatOptions = {
  month: 'short',  // 'Oct'
  day: '2-digit',  // '05'
  hour: '2-digit',  // '08'
  minute: '2-digit', // '00'
  hour12: false     // Optional, to use 24-hour format
};

export type Add = {
  addressNumber: string,
  street1: string,
  city: string,
  zip: string,
}

export const Address: Add[] = [
  {
    addressNumber: '11111',
    street1: 'Yale University Cleanroom',
    city: 'New Haven, CT',
    zip: '06511'

  },
  {
    addressNumber: '22222',
    street1: 'YHack Tsai City',
    city: 'New Haven, CT',
    zip: '06511'
  },
  {
    addressNumber: '33333',
    street1: 'Midtown Manhattan',
    city: 'New York, NY',
    zip: '00000'
  },
];

export const AddressNoFound: Add = {
  addressNumber: '11111',
  street1: 'Yale University Cleanroom',
  city: 'New Haven, CT',
  zip: '06511'

};


export type Order = {
  trackNumber: string;
  From: string;
  nameFrom: string;
  To: string;
  nameTo: string;
  createTime: string;
  status_number: number,
  price: number;
  status: string;
};

export const Orders: Order[] = [
  {
    trackNumber: '111111111',
    From: '33333', // addressNumber
    To: '11111', // addressNumber
    createTime: 'Oct 05',
    price: 5.88,
    nameFrom: 'ActualFood',
    nameTo: 'Yuqi',
    status_number: 0,
    status: '5 min for a drone DASH to you!'
  },

  {
    trackNumber: '111111111',
    From: '33333', // addressNumber
    To: '11111', // addressNumber
    createTime: new Date().toLocaleString('en-US', time_options).replace(',', ''),
    price: 5.88,
    nameFrom: 'ActualFood',
    nameTo: 'Yuqi',
    status_number: 1,
    status: 'Drone on the way!'
  },

  {
    trackNumber: '111111111',
    From: '11111', // addressNumber
    To: '22222', // addressNumber
    createTime: 'Oct 05, 11:00',
    price: 5.88,
    nameFrom: 'Yuqi',
    nameTo: 'yhack',
    status_number: 1,
    status: 'Drone on the way!'
  },

  {
    trackNumber: '2222222',
    From: '22222', // addressNumber
    To: '11111', // addressNumber
    createTime: 'Oct 04, 11:00',
    price: 7.01,
    nameFrom: 'Yuqi',
    nameTo: 'yhack',
    status: 'Delivered',
    status_number: 1,
  },

];