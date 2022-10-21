import './App.css';

function App() {
  const hours = ["07:00",
                 "08:00",
                 "09:00",
                 "10:00",
                 "11:00",
                 "12:00",
                 "13:00",
                 "14:00",
                 "15:00",
                 "16:00",
                 "17:00",
                 "18:00",
                 "19:00",
                 "20:00",
                 "21:00",
                 "22:00",
                 "23:00"
                ]

  const rows = [];
  
  hours.forEach((time, i) => {
    rows.push(
      <tr>
        <td className='time-column' rowSpan={2}>{time}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  return (
    <div>
      {rows}
    </div>
  )

  /* return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Table 1</th>
            <th>Table 2</th>
            <th>Table 3</th>
            <th>Table 4</th>
            <th>Table 6</th>
            <th>Table 7</th>
            <th>Table 8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='time-column' rowSpan={2}>07:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>08:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Jane</td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>09:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Jag</td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>10:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>11:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>12:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>13:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>14:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>15:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>16:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>17:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>18:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>19:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>20:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>21:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>22:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='time-column' rowSpan={2}>23:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  ); */
}

export default App;
