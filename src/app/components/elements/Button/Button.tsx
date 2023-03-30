'use client';
import clsx from 'clsx';

export default function Button({ children, type = 'button', onClick, className }: JSX.IntrinsicElements['button']) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'border-none rounded-md p-4 bg-blue-400 text-white text-xl hover:bg-blue-600 duration-200',
        className,
      )}
    >
      {children}
    </button>
  );
}
