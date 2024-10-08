import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  link: string;
}

const Content: React.FC<Props> = ({ children, title, link }) => {
  const [isOpen, setIsOpen] = useState(false);  // 折りたたみ状態を管理する

  const toggleContent = () => {
    setIsOpen(!isOpen);  // 状態をトグル（切り替え）
  }

  return (
    <div className='container mx-auto my-10'>
      <div className='grid grid-cols-1 gap-8'>
        <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
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
            <>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='text-blue-500 mb-3 hover:underline'
              >{link}</a>
              <div className='mt-4'>
                {children}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
