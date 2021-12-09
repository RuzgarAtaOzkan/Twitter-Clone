// MODULES
import React from 'react';

// COMPONENTS
import MessagesComponent from '../components/Messages';

export const Messages = () => {
  const messages = [
    {
      sender: {
        id: 1,
        username: 'ruzgarataozkan',
      },
      text: 'Hi there, can we meet sir?',
      media: '/assets/img/ruzgar.JPG',
      createdAt: 34224234234,
    },
    {
      sender: {
        id: 2,
        username: 'shutnaive',
      },
      text: 'Of course where do you want to meet at',
      media: '/assets/img/ruzgar.JPG',
      createdAt: 34224234234,
    },
    {
      sender: {
        id: 2,
        username: 'shutnaive',
      },
      text: 'I cant wait to meet, lets go to Starbucks.',
      media: '/assets/img/ruzgar.JPG',
      createdAt: 34224234234,
    },
    {
      sender: {
        id: 1,
        username: 'RuzgarAtaOzkan',
      },
      text: 'Okay meet me at my apartment in 20 minutes :).',
      media: '/assets/img/ruzgar.JPG',
      createdAt: 34224234234,
    },
  ];

  const persons = [
    {
      name: 'Ruzgar Ata Ozkan',
      username: '@RuzgarAtaOzkan',
      date: 'jul 13',
      img: '/assets/img/ruzgar.JPG',
    },
    {
      name: 'Elif Aytekin',
      username: '@shutnaive',
      date: 'jul 13',
      img: '/assets/img/elifaytekin.jpg',
    },
    {
      name: 'Erce Kaan Sazli',
      username: '@ErceKaanSazli',
      date: 'april 3',
      img: '/assets/img/erce.jpg',
    },
    {
      name: 'Nisan Gurol',
      username: '@NisanGurol',
      date: 'jul 16',
      img: '/assets/img/nisan.jpg',
    },
    {
      name: 'Basar Ballioz',
      username: '@basarballioz',
      date: 'sep 30',
      img: '/assets/img/basar.jpg',
    },
  ];

  return (
    <>
      <MessagesComponent dbMessages={messages} dbPersons={persons} />
    </>
  );
};

export default Messages;
