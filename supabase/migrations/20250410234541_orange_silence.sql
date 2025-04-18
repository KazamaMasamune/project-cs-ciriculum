/*
  # Initial Schema Setup

  1. New Tables
    - profiles
      - id (uuid, primary key)
      - email (text)
      - created_at (timestamp)
    - enrolled_courses
      - id (uuid, primary key)
      - user_id (uuid, references profiles)
      - course_id (text, references courses)
      - progress (integer)
      - created_at (timestamp)
      - last_accessed (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email text,
  created_at timestamptz DEFAULT now()
);

-- Create enrolled_courses table
CREATE TABLE IF NOT EXISTS enrolled_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  course_id text NOT NULL,
  progress integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  last_accessed timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrolled_courses ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Enrolled courses policies
CREATE POLICY "Users can view own enrolled courses"
  ON enrolled_courses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll in courses"
  ON enrolled_courses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own course progress"
  ON enrolled_courses
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);