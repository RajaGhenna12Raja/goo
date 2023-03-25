'use client';
import { useEffect, useState } from 'react';

export default function CountryLookUp() {
  const [country, setCountry] = useState('United States');
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=Lm2qZWteIwpyY6jykEVq`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div className='div'>{country}</div>;
}
