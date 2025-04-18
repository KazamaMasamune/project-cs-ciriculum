import React from 'react';
import { MapPin } from 'lucide-react';
import { Track } from '../types';
import { courses } from '../data/courses';

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const trackCourses = courses.filter(course => track.courses.includes(course.id));
  
  return (
    <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
      <p className="text-red-100 mb-4">{track.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{trackCourses.length} Courses</span>
        </div>
        
        <div className="space-y-2">
          {trackCourses.map((course, index) => (
            <div 
              key={course.id}
              className="flex items-center bg-white/10 rounded-lg p-3"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full mr-3 text-sm">
                {index + 1}
              </span>
              <div>
                <h4 className="font-medium">{course.title}</h4>
                <p className="text-sm text-red-100">{course.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}