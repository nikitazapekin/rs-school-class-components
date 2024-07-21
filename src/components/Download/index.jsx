import React from 'react';
import { saveAs } from 'file-saver';

const DownloadCsvButton = () => {
  // Функция для создания и скачивания CSV-файла
  const downloadCsv = () => {
    // Данные для CSV-файла
    const data = [
      { id: 1, value: 'A' },
      { id: 2, value: 'B' },
      { id: 3, value: 'C' }
    ];

    // Создание CSV-строки
    // Заголовки
    const csvRows = [
      ['id', 'value'],
      // Значения
      ...data.reduce((acc, row) => {
        if (acc.length === 0) {
          acc.push([row.id]);
          acc.push([row.value]);
        } else {
          acc[0].push(row.id);
          acc[1].push(row.value);
        }
        return acc;
      }, [])
    ];

    // Преобразование массива строк в строку CSV
    const csvContent = csvRows.map(row => row.join(',')).join('\n');

    // Создание Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Сохранение файла
    saveAs(blob, 'data.csv');
  };

  return (
    <button onClick={downloadCsv}>Скачать CSV</button>
  );
};

export default DownloadCsvButton;








/*import React from 'react';
import { saveAs } from 'file-saver';

const DownloadCsvButton = () => {
  // Функция для создания и скачивания CSV-файла
  const downloadCsv = () => {
    // Данные для CSV-файла
    const data = [
      { id: 1, value: 'A' },
      { id: 2, value: 'B' },
      { id: 3, value: 'C' }
    ];

    // Создание CSV-строки
    const csvRows = [
      ['id', 'value'], // Заголовки колонок
      ...data.map(row => [row.id, row.value]) // Данные
    ];

    // Преобразование массива строк в строку CSV
    const csvContent = csvRows.map(row => row.join(',')).join('\n');

    // Создание Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Сохранение файла
    saveAs(blob, 'data.csv');
  };

  return (
    <button onClick={downloadCsv}>Скачать CSV</button>
  );
};

export default DownloadCsvButton;
*/