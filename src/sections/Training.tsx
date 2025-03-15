/* 
This file defines a React functional component called Training.
It imports necessary modules and styles, and renders a list of training items.
Each training item includes an image, title, institution, date, and optional credential ID and description.
The data for the training items is imported from a separate data file.
*/

'use client';

import React from 'react';
import '@/styles/Training.scss';
import { training } from '@/data/training';
import Image from 'next/image';

/* 
The Training component renders a list of training items.
Each item displays an image, title, institution, date, and optionally a credential ID and description.
*/
const Training: React.FC = () => {
    return (
        <div className="training">
            {training.map((item, index) => (
                <div key={index} className="training__item">
                    <div className="training__item-image">
                        <Image loading="lazy" src={item.image} alt={item.institution} width={100} height={100} />
                    </div>
                    <div className="training__item-content">
                        <div className="training__item-title">
                            {item.title}
                            <span className="training__item-title-type">{item.type}</span>
                        </div>
                        <p className="training__item-institution">{item.institution}</p>
                        <p className="training__item-date">
                            {item.date} 
                            {item.credentialId && (
                                <span className="training__item-credential">
                                    | ID: {item.credentialId}
                                </span>
                            )}
                        </p>
                        {item.description && (
                            <p className="training__item-description">{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Training;
