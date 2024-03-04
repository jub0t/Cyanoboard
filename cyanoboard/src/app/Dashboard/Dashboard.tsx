"use client"; // top to the file

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tooltip } from 'react-tooltip'

const Routes = [
  {
    l: "Go Home",
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><defs><path id="solarHomeBold0" fill="currentColor" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></path></defs><path fill="currentColor" d="M18.5 3H16a.5.5 0 0 0-.5.5v.059l3.5 2.8V3.5a.5.5 0 0 0-.5-.5"></path><use href="#solarHomeBold0" fillRule="evenodd" clipRule="evenodd"></use><path fill="currentColor" fillRule="evenodd" d="m20.75 10.96l.782.626a.75.75 0 0 0 .936-1.172l-8.125-6.5a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25zM9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m2.8 3.75c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-1.5V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484c-.057-.057-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172c-.057.057-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25h-1.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062z" clipRule="evenodd"></path><use href="#solarHomeBold0" fillRule="evenodd" clipRule="evenodd"></use></svg>
  },
  {
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.013 2.475T12.05 15.5"></path></svg>,
    l: "Settings"
  },
  {
    i: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M9.586 15a2 2 0 0 1 1.414.586l1 1l1-1A2 2 0 0 1 14.414 15h4.024a3 3 0 0 1 2.91 2.272l.622 2.486a1 1 0 1 1-1.94.485l-.621-2.485a1 1 0 0 0-.97-.758h-4.025l-1 1a2 2 0 0 1-2.828 0l-1-1H5.562a1 1 0 0 0-.97.758l-.622 2.485a1 1 0 1 1-1.94-.485l.621-2.486A3 3 0 0 1 5.561 15ZM12 2c.784 0 1.661.19 2.38.391C16.043 2.854 17 4.41 17 5.997v4.006c0 1.588-.957 3.143-2.62 3.606c-.719.2-1.596.391-2.38.391c-.784 0-1.661-.19-2.38-.391C7.957 13.146 7 11.591 7 10.003V5.997c0-1.587.957-3.143 2.62-3.606C10.339 2.191 11.216 2 12 2m0 2c-.509 0-1.177.132-1.843.318C9.489 4.504 9 5.165 9 5.997v4.006c0 .832.489 1.493 1.157 1.68c.666.185 1.334.317 1.843.317c.509 0 1.177-.132 1.843-.318c.668-.186 1.157-.847 1.157-1.679V5.997c0-.832-.489-1.493-1.157-1.68C13.177 4.133 12.51 4 12 4"></path></g></svg>,
    l: "Panel Users"
  },
]

export function ResizeableDashboard() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full bg-crimson-900"
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

              return <div key={id}
                className="flex flex-wrap items-center justify-center cursor-pointer"
                data-tooltip-content={route.l}
                data-tooltip-id={id}
              >
                <span className="w-full h-full flex flex-wrap border border-crimson-900 justify-center items-center transition-all hover:text-white duration-300 rounded-md hover:bg-crimson-300 p-4 ">
                  {route.i}
                </span>

                <Tooltip id={id} style={{
                  background: `#4c353a`
                }} />
              </div>
            })
          }
        </div>
      </ResizablePanel>

      <ResizableHandle className="bg-crimson-900" />

      <ResizablePanel
        defaultSize={96}
      >
        <ResizablePanelGroup direction="vertical">
          {/* <ResizablePanel defaultSize={6}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>

          <ResizableHandle className="bg-crimson-300" /> */}

          <ResizablePanel defaultSize={75}>
            <main>
              {/* Everything goes here */}
            </main>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel >
    </ResizablePanelGroup >
  )
}
