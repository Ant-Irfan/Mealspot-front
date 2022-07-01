/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  Area,
  YAxis,
  Tooltip,
} from 'recharts';
import styles from '../progress.module.scss';

const ProgressChart = (props) => {
  const { progress } = props;
  const [chartData, setchartData] = useState([]);
  useEffect(() => {
    if (progress.length >= 3) {
      setchartData(progress.map((data) => ({
        weight: data.weight,
        week: `Week ${data.week}`,
      })));
    }
  }, [progress]);

  return (
    <div>
      <div className={styles.graphHeading}>Weight Graph</div>
      <div>
        <ResponsiveContainer
          width="100%"
          height={400}
        >
          <AreaChart
            data={chartData}
          >
            <Area dataKey="weight" stroke="#56A2BE" fill="white" strokeWidth="2" />
            <XAxis
              tickLine={false}
              dataKey="week"
            />
            <YAxis
              tickLine={false}
              dataKey="weight"
            />
            <Tooltip />
            {
               progress.length < 3
            && (
            <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
              Graph will show after 3 weeks
            </text>
            )
            }
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
