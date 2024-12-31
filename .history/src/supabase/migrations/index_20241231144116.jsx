/*
  # Initial Schema for iFood Clone

  1. New Tables
    - `profiles`
      - Stores user profile information
      - Links to Supabase auth.users
    - `restaurants`
      - Stores restaurant information
    - `menu_items`
      - Stores food items for each restaurant
    - `orders`
      - Stores order information
    - `order_items`
      - Stores items within each order

  2. Security
    - Enable RLS on all tables
    - Add policies for proper data access
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  address text NOT NULL,
  category text NOT NULL,
  delivery_fee decimal(10,2) DEFAULT 0,
  owner_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id uuid REFERENCES restaurants(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text,
  category text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  restaurant_id uuid REFERENCES restaurants(id),
  status text DEFAULT 'pending',
  total_amount decimal(10,2) NOT NULL,
  delivery_address text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid REFERENCES menu_items(id),
  quantity integer NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Restaurants policies
CREATE POLICY "Restaurants are viewable by everyone"
  ON restaurants FOR SELECT
  USING (true);

CREATE POLICY "Restaurant owners can update their restaurants"
  ON restaurants FOR UPDATE
  USING (auth.uid() = owner_id);

-- Menu items policies
CREATE POLICY "Menu items are viewable by everyone"
  ON menu_items FOR SELECT
  USING (true);

CREATE POLICY "Restaurant owners can manage menu items"
  ON menu_items FOR ALL
  USING (
    auth.uid() IN (
      SELECT owner_id FROM restaurants WHERE id = menu_items.restaurant_id
    )
  );

-- Orders policies
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Order items policies
CREATE POLICY "Users can view their own order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own order items"
  ON order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );