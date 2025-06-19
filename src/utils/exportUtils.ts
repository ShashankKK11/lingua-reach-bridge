
export const exportToPDF = (data: any, filename: string = 'linguabridge-report') => {
  // Create a comprehensive HTML report
  const reportHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>LinguaBridge Analytics Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .metric { margin: 20px 0; padding: 15px; border: 1px solid #ddd; }
        .chart-section { margin: 30px 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>LinguaBridge Analytics Report</h1>
        <p>Generated on: ${new Date().toLocaleString()}</p>
      </div>
      
      <div class="metric">
        <h2>Key Metrics</h2>
        <p><strong>Total Conversions:</strong> ${data.totalConversions?.toLocaleString() || 'N/A'}</p>
        <p><strong>Success Rate:</strong> ${data.successRate || 'N/A'}%</p>
        <p><strong>Active Languages:</strong> ${data.activeLanguages || 'N/A'}</p>
      </div>

      <div class="chart-section">
        <h2>Language Conversion Data</h2>
        <table>
          <thead>
            <tr>
              <th>Source Language</th>
              <th>Target Language</th>
              <th>Conversions</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            ${data.languagePairs?.map((pair: any) => `
              <tr>
                <td>${pair.source}</td>
                <td>${pair.target}</td>
                <td>${pair.count?.toLocaleString()}</td>
                <td>${pair.accuracy}%</td>
              </tr>
            `).join('') || '<tr><td colspan="4">No data available</td></tr>'}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;

  // Create and download the HTML file
  const blob = new Blob([reportHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportToCSV = (data: any, filename: string = 'linguabridge-data') => {
  const csvData = [
    ['Metric', 'Value'],
    ['Total Conversions', data.totalConversions?.toLocaleString() || 'N/A'],
    ['Success Rate', `${data.successRate || 'N/A'}%`],
    ['Active Languages', data.activeLanguages || 'N/A'],
    [''],
    ['Language Pairs Data'],
    ['Source Language', 'Target Language', 'Conversions', 'Accuracy'],
    ...(data.languagePairs?.map((pair: any) => [
      pair.source,
      pair.target,
      pair.count?.toLocaleString(),
      `${pair.accuracy}%`
    ]) || [])
  ];

  const csvContent = csvData.map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportToJSON = (data: any, filename: string = 'linguabridge-data') => {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
