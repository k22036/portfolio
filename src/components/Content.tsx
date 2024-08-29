import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
}

const Content: React.FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);  // 折りたたみ状態を管理する

  const toggleContent = () => {
    setIsOpen(!isOpen);  // 状態をトグル（切り替え）
  }

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold mb-4'>{title}</h3>
            <button
              onClick={toggleContent}
              className='text-blue-500 hover:underline'
            >
              {isOpen ? 'Hide' : 'Show'}
            </button>
          </div>
          {isOpen && (
            <div className='mt-4'>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
