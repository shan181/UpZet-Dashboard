import React, { useState, useEffect } from "react";
import {
  Chart,
  Interval,
  Axis,
  Tooltip,
  Coordinate,
  Legend,
  View,
  Annotation,
} from "bizcharts";
import DataSet from "@antv/data-set";

export default function ChartComp2({ dataSource }) {
  const [state, setState] = useState(null);
  const text = [
    "MIDNIGHT",
    "3 AM",
    "6 AM",
    "9 AM",
    "NOON",
    "3 PM",
    "6 PM",
    "9 PM",
  ];
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (dataSource && dataSource.length > 0) {
      const newData = dataSource.map((record, index) => ({
        type: index.toString(),
        value: 1,
        color: `Record ${index + 1}`,
      }));
      setData(newData);

      const userChartData = dataSource.map((record, index) => ({
        type: `Record ${index + 1}`,
        value: 1,
        color: getRandomColor(),
      }));
      setUserData(userChartData);
    }
  }, [dataSource]);

  if (data.length === 0 || userData.length === 0) {
    return null; // Return null or a loading indicator when there is no data
  }

  const { DataView } = DataSet;
  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "value",
    dimension: "type",
    as: "percent",
  });

  const userDv = new DataView();
  userDv.source(userData).transform({
    type: "percent",
    field: "value",
    dimension: "type",
    as: "percent",
  });

  return (
    <Chart
      placeholder={false}
      height={500}
      padding={50}
      autoFit
      onGetG2Instance={(chart) => {
        setState(chart);
      }}
    >
      {/* Background layer */}
      <View data={dv.rows}>
        <Legend visible={false} />
        <Tooltip shared showTitle={false} />
        <Coordinate type="theta" innerRadius={0.9} />
        <Interval
          position="percent"
          adjust="stack"
          color={["color"]}
          style={{
            stroke: "#444",
            lineWidth: 1,
          }}
          tooltip={false}
        />
      </View>
      {/* Main chart */}
      <View data={data}>
        <Axis visible={false} />
        <Coordinate type="polar" innerRadius={0.9} />
        <Interval
          position="type*value"
          color={["color"]}
          label={[
            "type",
            (val) => {
              return {
                content: val % 3 === 0 ? text[val / 3] : "",
              };
            },
            {
              offset: 15,
              style: {
                fontSize: 12,
                fontWeight: "bold",
                fill: "#bfbfbf",
              },
            },
          ]}
          tooltip={false}
          size={[
            "type",
            (val) => {
              return val % 3 === 0 ? 4 : 1;
            },
          ]}
        />
      </View>
      {/* User data chart */}
      <View
        data={userDv.rows}
        scale={{
          percent: {
            formatter: (val) => {
              return (val * 100).toFixed(2) + "%";
            },
          },
        }}
      >
        <Coordinate type="theta" innerRadius={0.75} />
        <Interval
          position="percent"
          adjust="stack"
          color={["color"]}
          label={["type", { offset: 40 }]}
        />
      </View>
    </Chart>
  );
}
