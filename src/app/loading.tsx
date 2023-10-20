import { range } from "./utils/utils";

function Loading() {
  return (
    <main className="p-2 grid grid-cols-fluid auto-rows-min gap-4">
      {range(15).map((i) => (
        <section
          key={i}
          className="h-[404px] w-full rounded-[20px] bg-white border overflow-clip animate-pulse"
        >
          <div className="h-[214px] bg-gray-200 rounded-t-[20px]"></div>
          <div className="flex flex-col items-center -translate-y-20">
            <div className="flex flex-col items-center">
              <div className="p-1 rounded-full bg-gray-200 border-8 border-white">
                <div className="w-24 h-24 rounded-full border-white border-4 bg-white"></div>
              </div>
              <div className="mt-2.5 h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Loading;
