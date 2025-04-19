/*
  # Blog System Schema

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published` (boolean)
      - `slug` (text, unique)

  2. Security
    - Enable RLS on `posts` table
    - Add policies for:
      - Public can read published posts
      - Authenticated users can CRUD their own posts
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT false,
  slug text UNIQUE NOT NULL
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy for public reading of published posts
CREATE POLICY "Public can read published posts"
  ON posts
  FOR SELECT
  USING (published = true);

-- Policy for authenticated users to read their own posts
CREATE POLICY "Users can read own posts"
  ON posts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for authenticated users to create their own posts
CREATE POLICY "Users can create own posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy for authenticated users to update their own posts
CREATE POLICY "Users can update own posts"
  ON posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy for authenticated users to delete their own posts
CREATE POLICY "Users can delete own posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);