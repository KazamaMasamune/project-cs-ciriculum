import React from 'react';
import { Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-red-100 text-red-900' :
              course.level === 'Intermediate' ? 'bg-red-200 text-red-900' :
              'bg-red-300 text-red-900'}`}>
            {course.level}
          </span>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <BookOpen className="w-4 h-4 mr-2" />
            <span className="text-sm">Topics covered: {course.topics.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.topics.slice(0, 3).map((topic, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-red-50 rounded-full text-xs text-red-900"
              >
                {topic}
              </span>
            ))}
            {course.topics.length > 3 && (
              <span className="px-2 py-1 bg-red-50 rounded-full text-xs text-red-900">
                +{course.topics.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}