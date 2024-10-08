import React, { FormEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      toast.error('Search query is empty');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}