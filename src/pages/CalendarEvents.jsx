import React, { useState, useEffect } from 'react';

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbx3CAUj3Y_N-rKc6C9Rn_2UYaYhocmUWBcevh2dLwKJuYXlFAD4dB3ZWiWyuxDyT2V20Q/exec'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data.events || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    };
    return new Date(dateString).toLocaleString('ja-JP', options);
  };

  const LoadingIndicator = () => {
    return (
      <div className="text-center p-4">
        <svg
          className="animate-spin h-5 w-5 mr-3 text-blue-500 inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0116 0H4z"
          ></path>
        </svg>
        予定を読み込み中...
      </div>
    );
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded border-s-4 border-red-500 bg-red-50 p-4"
      >
        <strong className="block font-medium text-red-800">
          エラーが発生しました。
        </strong>

        <p className="mt-2 text-sm text-red-700">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {events.length === 0 ? (
        <div className="text-center text-gray-600">現在予定はありません。</div>
      ) : (
        <>
          <div className="text-center text-red-600 font-bold">
            🗓 現在以下の予定が入っています。
          </div>

          <ul className="list-none space-y-4">
            {events.map((event, index) => (
              <li
                key={index}
                className="p-4 border border-gray-200 rounded shadow"
              >
                <div className="font-bold text-lg">
                  開始時刻: {formatDate(event.start)}
                </div>
                <div className="text-lg">終了時刻: {formatDate(event.end)}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CalendarEvents;
