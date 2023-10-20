function Loading() {
  return (
    <div className="flex flex-col justify-center items-center animate-pulse">
      <div className="w-96 flex flex-col justify-center items-center rounded-[20px] p-6 h-full bg-gray-100">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-300 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        <div className="mt-3 gap-1 text-sm flex flex-col items-center text-center w-full">
          <div className="h-4 bg-gray-300 rounded w-2/3 my-1"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 my-1"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 my-1"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 my-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
