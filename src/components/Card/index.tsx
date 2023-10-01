'use client';

import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const Card: React.FC<CardProps & { disabled?: boolean }> = ({
  title,
  description,
  buttonText,
  buttonLink,
  disabled,
}) => {
  const router = useRouter();

  const handleButton = (buttonLink: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(buttonLink);
  };
  return (
    <div className='p-4 bg-white rounded shadow-md'>
      <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
      <p className='mt-2 text-gray-600'>{description}</p>
      <button
        className={`mt-4 inline-block px-4 py-2 text-black rounded ${
          disabled ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-gray-200'
        } `}
        disabled={disabled}
        onClick={handleButton(buttonLink)}
      >
        {buttonText}
      </button>
    </div>
  );
};
