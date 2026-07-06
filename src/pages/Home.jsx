import  { useState } from 'react';
import { initialDishes } from '../data/mockData';
import DishesSection from '../components/dishes/DishesSection';
import OrderSidebar from '../components/dishes/OrderSidebar';

export default function Home() {
  const [dishes] = useState(initialDishes);
  const [selectedCategory, setSelectedCategory] = useState("Hot Dishes");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [orderType, setOrderType] = useState("Dine In");

  // Filter Logic: Filters dishes by chosen category & current query search characters
  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handler: Adds an item from the main board catalog array directly into orders bucket state
  const handleAddToOrder = (dish) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  // Handler: Modifies calculation scalar quantity counter inside array state maps
  const handleUpdateQty = (id, newQty) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // Handler: Deletes record item from active state sequence selection array entirely 
  const handleDeleteItem = (id) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen w-screen bg-[#252836] font-sans overflow-hidden">
        {/* 2. Middle Main Food Feed Canvas Frame */}
      <DishesSection 
        dishes={filteredDishes}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onAddToOrder={handleAddToOrder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 3. Right Sidebar Invoice Item Calculator Frame */}
      <OrderSidebar 
        orderItems={orderItems}
        onUpdateQty={handleUpdateQty}
        onDeleteItem={handleDeleteItem}
        orderType={orderType}
        setOrderType={setOrderType}
      />
    </div>
  );
}