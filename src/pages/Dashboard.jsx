import React from "react";

const Dashboard = () => {
  return (
    <section className="flex h-[85vh] items-center bg-background_light flex-col">
      <span className="text-black my-16 font-semibold text-lg">Overview</span>

      <div className="flex gap-x-20 mt-2">
        {/* Registered Teachers */}
        <div className="h-[300px] w-[300px] bg-primary_light flex justify-center items-center flex-col">
          <span className="font-bold text-lg">Registered Teachers</span>
          <span className="font-bold text-6xl">245</span>
        </div>

        {/* Registered Parents */}
        <div className="h-[300px] w-[300px] bg-primary_light  flex justify-center items-center flex-col">
          <span className="font-bold text-lg">Registered Parents</span>
          <span className="font-bold text-6xl">45</span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
