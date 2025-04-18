import React, { useEffect, useState } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { courses } from './data/courses';
import { tracks } from './data/tracks';
import { CourseCard } from './components/CourseCard';
import { TrackCard } from './components/TrackCard';
import { Navbar } from './components/Navbar';
import { supabase } from './lib/supabase';

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Computer Science Curriculum
          </h1>
          <p className="text-xl text-center text-red-100 max-w-2xl mx-auto">
            Master the fundamentals of computer science with our comprehensive curriculum. 
            Choose your learning path and start your journey today.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Learning Tracks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-red-900" />
            <h2 className="text-3xl font-bold text-gray-900">Learning Tracks</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>

        {/* All Courses */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-8 h-8 mx-auto mb-4" />
          <p className="text-red-200">
            © 2025 CS Curriculum. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;