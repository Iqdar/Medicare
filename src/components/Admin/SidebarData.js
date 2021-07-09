import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Medicines',
    path: '/medicines',
    icon: <GiIcons.GiMedicines />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'NewMedicine',
        path: '/medicines/new',
        icon: <AiIcons.AiFillPlusCircle />
      },
      {
        title: 'ViewMedicines',
        path: '/medicines/view',
        icon: <MdIcons.MdViewList />
      }
    ]
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <FaIcons.FaTruckMoving />
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <MdIcons.MdPerson />
  }
];
