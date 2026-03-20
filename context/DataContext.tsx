import React, { createContext, useContext, useState, useEffect } from 'react';
import { Guide, Category } from '../types';
import { GUIDES as INITIAL_GUIDES, CATEGORIES } from '../data';

interface DataContextType {
  guides: Guide[];
  categories: Category[];
  addGuide: (guide: Guide) => void;
  updateGuide: (guide: Guide) => void;
  deleteGuide: (id: string) => void;
  getGuide: (id: string) => Guide | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [guides, setGuides] = useState<Guide[]>([]);

  // Load from LocalStorage or fallback to static data on mount
  useEffect(() => {
    const savedGuides = localStorage.getItem('signpost_guides');
    if (savedGuides) {
      setGuides(JSON.parse(savedGuides));
    } else {
      setGuides(INITIAL_GUIDES);
    }
  }, []);

  // Sync to LocalStorage whenever guides change
  useEffect(() => {
    if (guides.length > 0) {
      localStorage.setItem('signpost_guides', JSON.stringify(guides));
    }
  }, [guides]);

  const addGuide = (guide: Guide) => {
    setGuides((prev) => [...prev, guide]);
  };

  const updateGuide = (updatedGuide: Guide) => {
    setGuides((prev) => prev.map((g) => (g.id === updatedGuide.id ? updatedGuide : g)));
  };

  const deleteGuide = (id: string) => {
    setGuides((prev) => prev.filter((g) => g.id !== id));
  };

  const getGuide = (id: string) => {
    return guides.find((g) => g.id === id);
  };

  return (
    <DataContext.Provider value={{ guides, categories: CATEGORIES, addGuide, updateGuide, deleteGuide, getGuide }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};