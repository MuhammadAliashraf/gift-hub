import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';
import CustomCard from './custom-card';
import { Input } from '../input';
import { Button } from '../button';
import { Label } from '../label';
import axios from 'axios';
import Link from 'next/link';

const Stepper = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [data, setdata] = useState([]);
  const [formData, setFormData] = useState({
    age: '',
    interests: '',
    category: '',
    event: '',
    person: '',
  });

  const steps = [
    { label: 'What is the occasion ?' },
    { label: 'Who are you shopping for ?' },
    {
      label: 'Optional details to find best gift ? (optional)',
    },
    {
      label: 'Finding the best matches...',
    },
  ];

  const EventData = [
    {
      label: 'Wedding',
      image: '/public/assets/events/asset 5.jpeg',
    },
    {
      label: 'Birthday',
      image: '',
    },
    {
      label: 'Baby Shower',
      image: '',
    },
    {
      label: 'Graduation',
      image: '',
    },
    {
      label: 'Engagement',
      image: '',
    },
    {
      label: 'Housewarming',
      image: '',
    },
    {
      label: 'Anniversary',
      image: '',
    },
    {
      label: 'Christmas',
      image: '',
    },
    {
      label: 'Valentines Day',
      image: '',
    },
    {
      label: 'Mother’s Day',
      image: '',
    },
    {
      label: 'Father’s Day',
      image: '',
    },
    {
      label: 'Other',
      image: '',
    },
  ];

  const shopping = [
    {
      label: 'Brother',
      image: '',
    },
    {
      label: 'Sister',
      image: '',
    },
    {
      label: 'Boy Friend',
      image: '',
    },
    {
      label: 'Girl Friend',
      image: '',
    },
    {
      label: 'Mother',
      image: '',
    },
    {
      label: 'Father',
      image: '',
    },
    {
      label: 'Other',
      image: '',
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  const handleCardClick = () => {
    // if (activeStep > 1) {
    //   setActiveStep(activeStep - 1);
    // }
  };

  const handleSubmit = async () => {
    setActiveStep(activeStep + 1);
    setFormData({ ...formData, event: selectedEvent, person: selectedPerson });
    try {
      const response = await axios.get(
        `/api/search?occasion=${selectedEvent}&category=${formData.category}&tags=${formData.interests}&age=${formData.age}`
      );
      const data = response.data.results;
      setdata(data);
      console.log(response.data.results);
    } catch (error) {
      console.error('Ërror in  fecting gitfs', error);
    }
  };
  const handleEventClick = (data) => {
    setSelectedEvent(data);
  };
  const handlePersonClick = (data) => {
    setSelectedPerson(data);
  };

  const handleGoToStart = () => {
    setActiveStep(1);
  };

  return (
    <div className="w-full mx-auto h-screen">
      {/* Stepper Navigation */}
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-8">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center w-full ${
              index + 1 === activeStep
                ? 'text-fuchsia-600 dark:text-fuchsia-500'
                : ''
            }`}
          >
            <span className="flex items-center">
              {index < activeStep - 1 ? (
                <svg
                  className="w-4 h-4 me-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              ) : (
                <span className="me-2">{index + 1}</span>
              )}
              {step.label}
            </span>
          </li>
        ))}
      </ol>

      {/* Step Content */}
      <div className="mb-6">
        {activeStep === 1 && (
          <div className="flex gap-4">
            <CustomCard data={EventData} onCardClick={handleEventClick} />;
          </div>
        )}
        {activeStep === 2 && (
          <div className="flex gap-4">
            <CustomCard data={shopping} onCardClick={handlePersonClick} />;
          </div>
        )}
        {activeStep === 3 && (
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-fuchsia-600">
                Personalize Your Gift
              </h1>
              <p className="text-gray-600">
                Fill out the details below to help us recommend the best gift
                options for {selectedPerson}.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-[40%] justify-center items-center border-2 border-fuchsia-600 rounded-sm p-6 shadow-lg bg-white">
              <div className="w-full">
                <Label htmlFor="age">
                  Your {selectedPerson}'s age (optional)
                </Label>
                <Input
                  id="age"
                  type="text"
                  placeholder="Ex: Teen, Child, Adult, Senior "
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="interests">
                  Your {selectedPerson}'s tastes and interests
                </Label>
                <Input
                  id="interests"
                  type="text"
                  placeholder="Ex: Technology"
                  value={formData.interests}
                  onChange={(e) =>
                    setFormData({ ...formData, interests: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="category">Gift Category</Label>
                <Input
                  id="category"
                  type="text"
                  placeholder="Ex: Food, Clothing, Electronics, etc."
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="mt-2"
                />
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                Need help? Contact our{' '}
                <a href="#" className="text-fuchsia-600 underline">
                  support team
                </a>
                .
              </p>
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div className="flex gap-4  flex-col justify-center items-center  ">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-fuchsia-600">
                Your Personalized Gift Recommendations
              </h1>
              <p className="text-gray-600">
                Here are some suggestions for your gift based on your
                preferences. Click on a card to view more details.
              </p>
            </div>
            <div className="overflow-y-auto max-h-[80vh]">
              {' '}
              {/* This makes the container scrollable */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.gift_name}{' '}
                        <span className="text-fuchsia-500">
                          ({item.occasion})
                        </span>
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {item.gift_description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          href={`https://www.google.com/search?q=${encodeURIComponent(
                            item.gift_name
                          )}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="px-4 py-2 w-full  text-white bg-green-500  hover:bg-fuchsia-500 rounded-lg"
              onClick={handleGoToStart}
            >
              Find More...
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {activeStep > 1 && (
          <button
            className={`px-4 py-2 text-white bg-gray-400 rounded-lg ${
              activeStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleBack}
            disabled={activeStep === 1}
          >
            Back
          </button>
        )}
        {activeStep < 3 ? (
          <button
            className="px-4 py-2 text-white bg-fuchsia-500 rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          activeStep === 3 && (
            <Button
              className="px-4 py-2  text-white bg-green-500  hover:bg-fuchsia-500 rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Stepper;
