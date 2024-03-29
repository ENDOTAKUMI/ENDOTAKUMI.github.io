import React from 'react';
import ImageWithSkeleton from './ImageWithSkeleton';

const SectionComponent = ({
  title,
  detail,
  image1,
  image2,
  link_title = '詳細を見る',
  link,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  {title}
                </h2>

                <p className="mt-4 text-gray-500">{detail}</p>
              </header>

              <a
                href={link}
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                {link_title}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <ImageWithSkeleton src={image1} alt="" />
              </li>
              <li>
                <ImageWithSkeleton src={image2} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
