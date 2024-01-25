import React from 'react';
import SectionComponent from '../components/SectionComponent';
import Notice from '../components/Notice';

const Works = () => {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1">
        <Notice />
        <SectionComponent
          title="FlutterKaigi 2023"
          detail="詳細...詳細...詳細..."
          image1="./image-example.png"
          image2="./image-example.png"
          link="https://example.com"
        />
        <SectionComponent
          title="PHPerKaigi 2020"
          detail="詳細...詳細...詳細..."
          image1="./image-example.png"
          image2="./image-example.png"
          link="https://example.com"
        />
        <SectionComponent
          title="Kotlin Fest 2019"
          detail="詳細...詳細...詳細..."
          image1="./image-example.png"
          image2="./image-example.png"
          link="https://example.com"
        />
      </div>
    </div>
  );
};

export default Works;
