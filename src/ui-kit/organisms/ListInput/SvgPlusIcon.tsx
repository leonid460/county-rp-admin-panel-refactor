import React from 'react';

export const SvgPlusIcon = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" fill="none" />
    <path
      d="M16 9C16 6.79086 17.7909 5 20 5C22.2091 5 24 6.79086 24 9V31C24 33.2091 22.2091 35 20 35C17.7909 35 16 33.2091 16 31V9Z"
      fill="black"
    />
    <path
      d="M9 24C6.79086 24 5 22.2091 5 20C5 17.7909 6.79086 16 9 16H31C33.2091 16 35 17.7909 35 20C35 22.2091 33.2091 24 31 24H9Z"
      fill="black"
    />
  </svg>
);
