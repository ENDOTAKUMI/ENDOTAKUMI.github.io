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

  // 日付と時刻をフォーマットする関数
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

  if (loading) {
    return <div>予定を読み込み中...</div>;
  }

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  return (
    <div>
      {events.length === 0 ? (
        <div>現在進行中の予定はありません。</div>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <div>開始時刻: {formatDate(event.start)}</div>
              <div>終了時刻: {formatDate(event.end)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarEvents;
