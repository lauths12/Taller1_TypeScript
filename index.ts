import { Serie } from './serie.js';
import { dataSeries } from './data.js';

const seriesTableBody = document.getElementById('series') as HTMLTableSectionElement;
const averageSeasons = document.getElementById('averageSeasons') as HTMLParagraphElement;

loadSeriesTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${calculateAverage(dataSeries)}`;

function loadSeriesTable(series: Serie[]) {
  series.forEach((serie, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><b>${index + 1}</b></td>
      <td><a href="${serie.getImage()}" target="_blank">${serie.getName()}</a></td>
      <td>${serie.getChannel()}</td>
      <td>${serie.getSeasons()}</td>
    `;
    seriesTableBody.appendChild(tr);
  });
}

function calculateAverage(series: Serie[]) {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
  return (totalSeasons / series.length)
}
