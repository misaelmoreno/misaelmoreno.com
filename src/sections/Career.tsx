/* 
This file defines the Career component, which displays a list of job positions grouped by company. 
It imports necessary styles and data, processes the data to group jobs by company, 
and renders the grouped data in a structured format.
*/

'use client';

import React from 'react';
import '@/styles/Career.scss';
import { career } from '@/data/career';
import { useLanguage } from '@/context/Language';
import { getUiText } from '@/data/ui';
import type { JobDetails } from '@/interfaces/career';

/* 
The Career component processes the career data to group job positions by company 
and renders the grouped job positions with their details such as title, duration, location, 
responsibilities, and skills.
*/
const Career: React.FC = () => {
    const { locale } = useLanguage();
    const groupedCareer = career[locale].reduce((acc, job) => {
        const companyExists = acc.find(item => item.company === job.company);
        if (companyExists) {
            companyExists.jobs.push(job);
        } else {
            acc.push({
                company: job.company,
                jobs: [job]
            });
        }
        return acc;
    }, [] as { company: string; jobs: JobDetails[] }[]);

    return (
            <div className="career">
                {groupedCareer.map((group, index) => (
                    <div key={index} className="career__company-group">
                        <div className="career__company">
                        <div className="career__company-name">{group.company}</div>
                            {group.jobs.map((job, idx) => (
                                <div key={idx} className="career__job">
                                    <div className="career__job-header">
                                        <div className="career__timeline-marker" />
                                        <div>
                                            <div className="career__job-title">{job.title}</div>
                                            <p className="career__job-duration-location">
                                                {job.duration} | {job.location}
                                                {job.remote && <span className="career__job-remote">{getUiText('remote', locale)}</span>}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="career__job-responsibilities">
                                        <ul>
                                            {job.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="career__job-responsibility">{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="career__job-skills">
                                        {job.skills.map((skill, idx) => (
                                            <span key={idx} className="career__skill-chip">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Career;
