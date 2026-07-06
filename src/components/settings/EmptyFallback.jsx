import React from 'react';

const EmptyFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m16.5 0a1.5 1.5 0 00-1.5-1.5h-13.5A1.5 1.5 0 003 7.5m16.5 0V4.75A1.5 1.5 0 0018 3.25H6a1.5 1.5 0 00-1.5 1.5V7.5m15 0H3" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-gray-900">No data available</h3>
      <p className="mt-1 text-xs text-gray-500 max-w-xs">There are no items to show right now. Check back later or add a new record.</p>
    </div>
  );
};

export default EmptyFallback;