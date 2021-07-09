import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Medicines',
    path: '/medicines',
    icon: <GiIcons.GiMedicines />
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <FaIcons.FaTruckMoving />
  },
  {
    title: 'Account',
    path: '/account',
    icon: <MdIcons.MdPerson />
  }
];
