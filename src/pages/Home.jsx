import React from 'react';
import Notice from '../components/Notice';

const Home = () => {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1">
        <Notice />
      </div>
    </div>
  );
};

export default Home;
