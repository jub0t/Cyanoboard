"use client"; // top to the file

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ResponsiveLine } from "@nivo/line";
import { Tooltip } from 'react-tooltip'
import { faker } from '@faker-js/faker';


const Routes = [
  {
    r: "/",
    l: "Go Home",
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m221.56 100.85l-79.95-75.47l-.16-.15a19.93 19.93 0 0 0-26.91 0l-.17.15l-79.93 75.47a20.07 20.07 0 0 0-6.44 14.7V208a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h24v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-92.45a20.07 20.07 0 0 0-6.44-14.7M204 204h-40v-44a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v44H52v-86.72l76-71.75l76 71.75Z"></path></svg>
  },
  {
    r: "/settings",
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"></path></svg>,
    l: "Settings"
  },
  {
    r: "/users",
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M9.586 15a2 2 0 0 1 1.414.586l1 1l1-1A2 2 0 0 1 14.414 15h4.024a3 3 0 0 1 2.91 2.272l.622 2.486a1 1 0 1 1-1.94.485l-.621-2.485a1 1 0 0 0-.97-.758h-4.025l-1 1a2 2 0 0 1-2.828 0l-1-1H5.562a1 1 0 0 0-.97.758l-.622 2.485a1 1 0 1 1-1.94-.485l.621-2.486A3 3 0 0 1 5.561 15ZM12 2c.784 0 1.661.19 2.38.391C16.043 2.854 17 4.41 17 5.997v4.006c0 1.588-.957 3.143-2.62 3.606c-.719.2-1.596.391-2.38.391c-.784 0-1.661-.19-2.38-.391C7.957 13.146 7 11.591 7 10.003V5.997c0-1.587.957-3.143 2.62-3.606C10.339 2.191 11.216 2 12 2m0 2c-.509 0-1.177.132-1.843.318C9.489 4.504 9 5.165 9 5.997v4.006c0 .832.489 1.493 1.157 1.68c.666.185 1.334.317 1.843.317c.509 0 1.177-.132 1.843-.318c.668-.186 1.157-.847 1.157-1.679V5.997c0-.832-.489-1.493-1.157-1.68C13.177 4.133 12.51 4 12 4"></path></g></svg>,
    l: "Panel Users"
  },
  {
    r: "/analytics",
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 16V8m-4 8v-5m-4 5v-3"></path><path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></path></g></svg>,
    l: "Resource Analytics"
  },
]

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
      beginAtZero: true,
    },
    y: {
      display: false,
      beginAtZero: true,
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
    },
  },
};

const labels = [...Array(25)].map(i => {
  return new Date(new Date().getTime() + 1000 * 60 * 60).toLocaleTimeString()
});

const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: "auto",
      max: 'auto',
      stacked: true,
      reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
      truncateTickAt: 0
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
      truncateTickAt: 0
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

export function ResizeableDashboard() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full bg-crimson-50"
    >
      <ResizablePanel className="w-full"
        defaultSize={4}
        maxSize={12.5}
        minSize={4}
      >
        <div className="p-3 space-y-3">
          {
            Routes.map(route => {
              const id = route.l.replace(" ", "").toLowerCase()

              return <Link href={route.r} key={id}
                className="flex flex-wrap items-center justify-center cursor-pointer"
                data-tooltip-content={route.l}
                data-tooltip-id={id}
              >
                <span className="w-full h-full flex flex-wrap border border-crimson-700 justify-center items-center transition-all text-crimson-800 hover:text-white duration-300 rounded-md hover:bg-crimson-800 p-4 ">
                  {route.i}
                </span>

                <Tooltip id={id} style={{
                  background: `#2c2c32`,
                  fillOpacity: 100,
                }} />
              </Link>
            })
          }
        </div>
      </ResizablePanel>

      <ResizableHandle className="bg-crimson-700" />

      <ResizablePanel
        defaultSize={96}
      >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75}>
            <main className="w-full flex flex-wrap p-4 h-full">
              <section className="grid 2xl:grid-cols-2 gap-4 h-full w-full">
                <div className="w-full h-1/2">
                  <MyResponsiveLine data={[{
                    "id": "japan",
                    "color": "hsl(305, 70%, 50%)",
                    "data": [
                      {
                        "x": "plane",
                        "y": 27
                      },
                      {
                        "x": "helicopter",
                        "y": 188
                      },
                      {
                        "x": "boat",
                        "y": 220
                      },
                      {
                        "x": "train",
                        "y": 274
                      },
                      {
                        "x": "subway",
                        "y": 265
                      },
                      {
                        "x": "bus",
                        "y": 53
                      },
                      {
                        "x": "car",
                        "y": 132
                      },
                      {
                        "x": "moto",
                        "y": 289
                      },
                      {
                        "x": "bicycle",
                        "y": 60
                      },
                      {
                        "x": "horse",
                        "y": 277
                      },
                      {
                        "x": "skateboard",
                        "y": 286
                      },
                      {
                        "x": "others",
                        "y": 227
                      }
                    ]
                  },
                  {
                    "id": "france",
                    "color": "hsl(277, 70%, 50%)",
                    "data": [
                      {
                        "x": "plane",
                        "y": 225
                      },
                      {
                        "x": "helicopter",
                        "y": 271
                      },
                      {
                        "x": "boat",
                        "y": 57
                      },
                      {
                        "x": "train",
                        "y": 296
                      },
                      {
                        "x": "subway",
                        "y": 16
                      },
                      {
                        "x": "bus",
                        "y": 287
                      },
                      {
                        "x": "car",
                        "y": 252
                      },
                      {
                        "x": "moto",
                        "y": 213
                      },
                      {
                        "x": "bicycle",
                        "y": 173
                      },
                      {
                        "x": "horse",
                        "y": 274
                      },
                      {
                        "x": "skateboard",
                        "y": 120
                      },
                      {
                        "x": "others",
                        "y": 138
                      }
                    ]
                  },
                  ]} />
                </div>
              </section>
            </main>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
