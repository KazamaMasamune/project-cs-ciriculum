import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Clock, BookOpen } from 'lucide-react';

export function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        const { data: coursesData } = await supabase
          .from('enrolled_courses')
          .select(`
            *,
            courses (*)
          `)
          .eq('user_id', user.id);

        setProfile(profileData);
        setEnrolledCourses(coursesData || []);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <p className="text-gray-900">{profile?.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">My Courses</h2>
        <div className="space-y-4">
          {enrolledCourses.map((enrollment) => (
            <div
              key={enrollment.id}
              className="border rounded-lg p-4 hover:border-red-900 transition-colors"
            >
              <h3 className="font-medium text-lg mb-2">{enrollment.courses.title}</h3>
              <div className="flex items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{enrollment.courses.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span className="text-sm">
                    {enrollment.progress}% Complete
                  </span>
                </div>
              </div>
            </div>
          ))}

          {enrolledCourses.length === 0 && (
            <p className="text-gray-600">
              You haven't enrolled in any courses yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}