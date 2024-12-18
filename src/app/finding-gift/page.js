'use client';
import Stepper from '@/components/ui/custom/stepper';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full  max-w-7xl  mx-auto px-4 md:px-8">
      <div className=" mt-8 mb-10">
        <h1 className=" text-center text-3xl font-bold mb-4">
          Gift Hub - The Best Gift Ideas in{' '}
          <sapn className="text-fuchsia-600">2024</sapn>
        </h1>
        <p>
          Find the perfect gifts for your loved ones in 2024 with Gift Hub, a
          free and smart tool. Just tell us a bit about who you re shopping for,
          and we ll give you personalized gift ideas. Fill in the details below
          to get started!
        </p>
      </div>
      <div>
        <Stepper />
      </div>
    </div>
  );
};

export default Page;
