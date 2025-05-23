/*
  # Add new fields to posts table

  1. New Columns
    - `subtitle` (text, nullable)
    - `html_content` (text, nullable)
    - `image_url` (text, nullable)
    - `categories` (text array, default empty array)

  2. Changes
    - Add new columns to posts table
    - Update existing policies to include new columns
*/

-- Add new columns to posts table
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'subtitle'
  ) THEN
    ALTER TABLE posts ADD COLUMN subtitle text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'html_content'
  ) THEN
    ALTER TABLE posts ADD COLUMN html_content text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE posts ADD COLUMN image_url text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'posts' AND column_name = 'categories'
  ) THEN
    ALTER TABLE posts ADD COLUMN categories text[] DEFAULT '{}';
  END IF;
END $$;