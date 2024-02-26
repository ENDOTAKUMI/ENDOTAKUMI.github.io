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
          detail="備品管理、当日撮影などを担当しました"
          image1="./image-flutter-kaigi-2023-people.jpg"
          image2="./image-flutter-kaigi-2023-name.jpg"
          link_title="公式サイトへ"
          link="https://flutterkaigi.jp/2023/"
        />
        <SectionComponent
          title="PHPerKaigi 2020"
          detail="受付を担当しました"
          image1="./image-phperkaigi-2020-people.png"
          image2="./image-example.png"
          link="https://phperkaigi.jp/2020/"
        />
        <SectionComponent
          title="Kotlin Fest 2019"
          detail="撮影を担当しました"
          image1="./image-kotlin-fest-2019-people.png"
          image2="./image-kotlin-fest-2019-logo.jpeg"
          link="https://kotlin.connpass.com/event/129860/"
        />
      </div>
    </div>
  );
};

export default Works;
