import Counter from '@/components/counter/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
// throw new Error()

  return (
    <div>
      <Link href="/booking">
      <button className='btn btn-sm btn-outline'>Booking</button>
      </Link>
      <Link href="/about">
      <button className='btn btn-sm btn-outline'>About</button>
      </Link>
      <h1>This is next app</h1>
      <Counter/>
    </div>
  );
};

export default HomePage;