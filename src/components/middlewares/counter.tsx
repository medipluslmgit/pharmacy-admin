'use client';

import { useCounter } from '@/hooks/use-counter';

const Counter = () => {
  const counter = useCounter();
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">{counter.count}</div>

        <div className="flex justify-center gap-4">
          <button className='bg-slate-800 rounded-lg py-2 px-8 text-white' onClick={counter.increment}>Increment</button>
          <button className='bg-slate-800 rounded-lg py-2 px-8 text-white' onClick={counter.decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
