import React from 'react';
import SectionComponent from './SectionComponent';

const ScreenA = () => {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1">
        <div
          role="alert"
          className="rounded border-s-4 border-red-500 bg-red-50 p-4"
        >
          <strong className="block font-medium text-red-800">
            {' '}
            サイトリニューアル中{' '}
          </strong>

          <p className="mt-2 text-sm text-red-700">
            現在、サイトリニューアル中です。ご迷惑をおかけしますが、しばらくお待ちください。
            旧ポートフォリオは
            <a
              href="https://endotakumi.github.io/portfolio-2023/"
              target="__blank"
            >
              こちら
            </a>
            。
          </p>
        </div>

        {/* ---------- */}
        <SectionComponent
          title="タイトル1"
          detail="詳細...詳細...詳細..."
          image1="./image-example.png"
          image2="./image-example.png"
          link="https://example.com"
        />
        <SectionComponent
          title="タイトル2"
          detail="詳細...詳細...詳細..."
          image1="./image-example.png"
          image2="./image-example.png"
          link="https://example.com"
        />
        {/* ---------- */}
      </div>
    </div>
  );
};

export default ScreenA;
