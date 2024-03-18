import React from 'react';
import Notice from '../components/Notice';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Home = () => {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1">
        <Notice />
        <div class="container my-24 mx-auto md:px-6">
          <section class="mb-32">
            <div class="flex flex-wrap">
              <div class="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
                <ImageWithSkeleton
                  src="image-profile.png"
                  class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="Avatar"
                />
              </div>

              <div class="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
                <h5 class="mb-6 text-xl font-semibold">遠藤 拓巳</h5>
                <ul class="list-inside mb-6 flex justify-center space-x-4 md:justify-start">
                  <a href="https://twitter.com/endotakumi_dev" target="__blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-4 w-4"
                    >
                      <path
                        fill="currentColor"
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </a>
                </ul>
                <p>
                  モバイルアプリ・Webサイトなどの開発からPICマイコンを使用した電子工作などを行っています。
                  <br />
                  カンファレンス運営などではカメラマンとしても活動しています。
                  <br />
                </p>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      2017/04 - 2020/03 埼玉県立狭山工業高等学校 電子機械科
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      2020/04 - 2024/03 日本工学院専門学校 ITカレッジ
                      ITスペシャリスト科
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      2024/04 - 渋谷のIT企業に入社予定
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
