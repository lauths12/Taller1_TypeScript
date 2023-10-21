import { dataSeries } from './data.js';

const seriesTableBody = document.getElementById('series');
const averageSeasons = document.getElementById('averageSeasons');

loadSeriesTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${calculateAverage(dataSeries)}`;

function loadSeriesTable(series) {
  series.forEach((serie, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><b>${index + 1}</b></td>
      <td><a href="${serie.getImage()}" target="_blank">${serie.getName()}</a></td>
      <td>${serie.getchannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
    seriesTableBody.appendChild(tr);
  });
}

function calculateAverage(series) {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
  return (totalSeasons / series.length)
}
