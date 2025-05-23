/*
  # Fix Posts Table RLS Policies

  1. Changes
    - Drop existing policies and create new ones with correct permissions
    - Ensure public access to published posts
    - Allow authenticated users to manage their own posts

  2. Security
    - Enable RLS on posts table
    - Add policies for public reading of published posts
    - Add policies for authenticated users to manage their posts
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Public can read published posts" ON posts;
DROP POLICY IF EXISTS "Users can read own posts" ON posts;
DROP POLICY IF EXISTS "Users can create own posts" ON posts;
DROP POLICY IF EXISTS "Users can update own posts" ON posts;
DROP POLICY IF EXISTS "Users can delete own posts" ON posts;

-- Create new policies
CREATE POLICY "Anyone can read published posts"
  ON posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can read all their posts"
  ON posts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR published = true);

CREATE POLICY "Authenticated users can insert their own posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own posts"
  ON posts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);