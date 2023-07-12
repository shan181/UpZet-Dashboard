import { Card, List } from "antd";
import Title from "antd/es/typography/Title";
import { styled } from "styled-components";
import ChartComp from "./Chartone";
import ChartComp2 from "./Charttwo";
import React, { useState } from "react";
import {
  Chart,
  Tooltip,
  Legend,
  Point,
  Line,
  Interval,
  Annotation,
} from "bizcharts";
import DataSet from "@antv/data-set";

const StyledTitle = styled(Title)`
  display: flex;
  text-align: left;
  margin-left: 20px;
`;

const StyledCardchart1 = styled(Card)`
  && {
    height: 450px;
    margin: 20px;
    margin-bottom: 76px;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
`;
// const StyledCardchart2 = styled(Card)`
//   && {
//     height: 550px;
//     margin: 20px;
//     display: flex;
//     flex-direction: column;
//     z-index: 0;
//   }
// `;

const Charts = () => {
  const [state, setState] = useState(null);
  const colors = ["#6394f9", "#62daaa"];

  const data = [
    {
      time: "10:10",
      call: 4,
      waiting: 2,
      people: 2,
    },
    {
      time: "10:15",
      call: 2,
      waiting: 6,
      people: 3,
    },
    {
      time: "10:20",
      call: 13,
      waiting: 2,
      people: 5,
    },
    {
      time: "10:25",
      call: 9,
      waiting: 9,
      people: 1,
    },
    {
      time: "10:30",
      call: 5,
      waiting: 2,
      people: 3,
    },
    {
      time: "10:35",
      call: 8,
      waiting: 2,
      people: 1,
    },
    {
      time: "10:40",
      call: 13,
      waiting: 1,
      people: 2,
    },
  ];

  const scale = {
    people: {
      min: 0,
      tickCount: 4,
      alias: "人数",
      type: "linear-strict",
    },
    waiting: {
      min: 0,
      tickCount: 4,
      alias: "等待",
      type: "linear-strict",
    },
  };
  return (
    <>
      {/* TITLE */}
      <StyledTitle level={5}>Chart</StyledTitle>
      <StyledCardchart1>
        <Chart
          style={{ width: "auto" }}
          scale={scale}
          autoFit
          height={400}
          data={data}
          onGetG2Instance={(chart) => {
            setState(chart);
          }}
        >
          <Legend
            custom={true}
            allowAllCanceled={true}
            items={[
              {
                value: "waiting",
                name: "ACTIVE",
                marker: {
                  symbol: "square",
                  style: { fill: colors[0], r: 5 },
                },
              },
              {
                value: "people",
                name: "NON ACTIVE",
                marker: {
                  symbol: "hyphen",
                  style: { stroke: colors[1], r: 5, lineWidth: 3 },
                },
              },
            ]}
            onChange={(ev) => {
              const item = ev.item;
              const value = item.value;
              const checked = !item.unchecked;
              const geoms = state?.geometries;

              for (let i = 0; i < geoms.length; i++) {
                const geom = geoms[i];

                if (geom.getYScale().field === value) {
                  if (checked) {
                    geom.show();
                  } else {
                    geom.hide();
                  }
                }
              }
            }}
          />
          <Tooltip shared />
          <Interval position="time*waiting" color={colors[0]} />
          <Line
            position="time*people"
            color={colors[1]}
            size={3}
            shape="smooth"
          />
          <Annotation.Text
            top
            position={{ time: "10:10", people: 0.2 }}
            style={{ textAlign: "center", fill: "red" }}
            content="Start"
          />
          <Point
            position="time*people"
            color={colors[1]}
            size={3}
            shape="circle"
          />
        </Chart>
      </StyledCardchart1>
      {/* <StyledCardchart2>
        <ChartComp2 />
      </StyledCardchart2> */}
    </>
  );
};
export default Charts;
