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
                  <li>
                    <a
                      href="https://twitter.com/endotakumi_dev"
                      target="__blank"
                    >
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
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/endo_takumi_photo"
                      target="__blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="h-4 w-4"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </li>
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
