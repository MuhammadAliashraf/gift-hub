'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';

const CustomCard = ({ data, onCardClick }) => {
  const [selectedValue, setselectedValue] = useState('');
  const handleClick = (item) => {
    onCardClick(item);
    setselectedValue(item);
  };

  return (
    <div className="flex flex-row flex-wrap gap-5">
      {data?.map((item, index) => (
        <Card
          key={index}
          onClick={() => handleClick(item.label)}
          className={`w-44 h-44 flex text-black justify-center items-center text-center hover:bg-fuchsia-300 hover:text-white transition-colors duration-300 cursor-pointer ${
            selectedValue === item.label ? 'bg-fuchsia-600 text-white' : ''
          }  `}
        >
          <CardHeader className="">
            <CardTitle>{item.label}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CustomCard;
