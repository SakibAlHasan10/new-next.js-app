import Image from 'next/image';
import React from 'react';
import nextImage from '@/assets/nextjs-image.webp'
const AlbumPage = () => {
    return (
        <div>
            <h2>Album page</h2>
            <Image src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png" 
            width={500}
            height={300}
            alt='Nextjs image'
            />
            <Image src={nextImage} 
            width={500}
            height={300}
            alt='Nextjs image'
            />
        </div>
    );
};

export default AlbumPage;