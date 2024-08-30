import React, { useEffect, useRef } from 'react';

const SearchBox = ({ setQuery }) => {
  const inputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(inputRef.current.value.trim()); // Use trim to remove leading/trailing spaces
    }
  };

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleShortcut);

    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search places..."
        onKeyDown={handleKeyDown}
      />
      <span>Ctrl+/</span>
    </div>
  );
};

export default SearchBox;
