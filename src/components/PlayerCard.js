import React from "react";

const PlayerCard = () => {
  return (
    <div className="bg-[#000000] text-white p-4">
      <div className="flex">
        <div className="w-1/3">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
            <div className="ml-4">
              <div className="text-lg">Age: 18</div>
              <div className="flex items-center">
                <div className="text-lg">CM</div>
                <div className="ml-2 text-lg">OVR</div>
                <div className="ml-2 text-lg">64</div>
                <div className="ml-2 text-green-500">▲</div>
              </div>
              <div className="text-sm">Preferred Foot</div>
              <div className="text-sm">Right</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl">Emirhan</div>
            <div className="text-2xl">İlkhan</div>
          </div>
          <div className="mt-4">
            <div className="bg-gray-800 p-2 rounded">
              <div className="text-lg">Plan</div>
              <div className="text-lg">Attacking Midfielder (CAM)</div>
            </div>
            <div className="mt-2 bg-gray-800 p-2 rounded">
              <div className="flex items-center">
                <div className="text-lg">L2</div>
                <div className="ml-2 text-lg">R2</div>
                <div className="ml-2 text-lg">GROWTH</div>
                <div className="ml-2 text-lg">POSITION</div>
              </div>
              <div className="mt-2">
                <div className="text-lg">Left Back (LB)</div>
                <div className="text-lg">Left Wing Back (LWB)</div>
                <div className="text-lg">Right Midfielder (RM)</div>
                <div className="text-lg">Defensive Midfielder (CDM)</div>
                <div className="text-lg">Left Midfielder (LM)</div>
                <div className="text-lg bg-gray-600 p-1 rounded">
                  Attacking Midfielder (CAM)
                </div>
                <div className="text-lg">Centre Forward (CF)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 pl-4">
          <div className="text-2xl">Attacking Midfielder (CAM)</div>
          <div className="flex items-center mt-2">
            <div className="bg-green-500 text-black px-2 py-1 rounded">
              Change Position
            </div>
            <div className="ml-2 text-lg">CAM</div>
          </div>
          <div className="mt-2 text-lg">
            Form: <span className="text-yellow-500">Okay</span>
          </div>
          <div className="mt-2 text-sm">
            Development plans have regular growth when a player is in average
            form.
          </div>
          <div className="flex mt-4">
            <div className="w-1/6 text-center">
              <div className="text-3xl">69</div>
              <div className="text-lg">PACE</div>
            </div>
            <div className="w-1/6 text-center">
              <div className="text-3xl">59</div>
              <div className="text-lg">SHOOTING</div>
            </div>
            <div className="w-1/6 text-center">
              <div className="text-3xl">62</div>
              <div className="text-lg">PASSING</div>
            </div>
            <div className="w-1/6 text-center">
              <div className="text-3xl">71</div>
              <div className="text-lg">DRIBBLING</div>
            </div>
            <div className="w-1/6 text-center">
              <div className="text-3xl">49</div>
              <div className="text-lg">DEFENDING</div>
            </div>
            <div className="w-1/6 text-center">
              <div className="text-3xl">48</div>
              <div className="text-lg">PHYSICAL</div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/6">
              <div className="text-sm">Sprint Speed</div>
              <div className="flex items-center">
                <div className="text-lg">69</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Acceleration</div>
              <div className="flex items-center">
                <div className="text-lg">69</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="text-sm">Finishing</div>
              <div className="flex items-center">
                <div className="text-lg">59</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Att. Position</div>
              <div className="flex items-center">
                <div className="text-lg">65</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Shot Power</div>
              <div className="text-lg">62</div>
              <div className="text-sm">Long Shots</div>
              <div className="flex items-center">
                <div className="text-lg">61</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Penalties</div>
              <div className="text-lg">50</div>
              <div className="text-sm">Volleys</div>
              <div className="text-lg">48</div>
            </div>
            <div className="w-1/6">
              <div className="text-sm">Vision</div>
              <div className="flex items-center">
                <div className="text-lg">68</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Crossing</div>
              <div className="text-lg">54</div>
              <div className="text-sm">FK Acc.</div>
              <div className="text-lg">52</div>
              <div className="text-sm">Long Pass</div>
              <div className="text-lg">63</div>
              <div className="text-sm">Short Pass</div>
              <div className="text-lg">67</div>
              <div className="text-sm">Curve</div>
              <div className="text-lg">59</div>
            </div>
            <div className="w-1/6">
              <div className="text-sm">Agility</div>
              <div className="flex items-center">
                <div className="text-lg">74</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Balance</div>
              <div className="text-lg">76</div>
              <div className="text-sm">Reactions</div>
              <div className="text-lg">54</div>
              <div className="text-sm">Composure</div>
              <div className="text-lg">63</div>
              <div className="text-sm">Ball Control</div>
              <div className="flex items-center">
                <div className="text-lg">69</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
              <div className="text-sm">Dribbling</div>
              <div className="flex items-center">
                <div className="text-lg">74</div>
                <div className="ml-2 text-yellow-500">▲</div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="text-sm">Interceptions</div>
              <div className="text-lg">50</div>
              <div className="text-sm">Heading Acc.</div>
              <div className="text-lg">49</div>
              <div className="text-sm">Def. Aware</div>
              <div className="text-lg">45</div>
              <div className="text-sm">Stand Tackle</div>
              <div className="text-lg">55</div>
              <div className="text-sm">Slide Tackle</div>
              <div className="text-lg">50</div>
            </div>
            <div className="w-1/6">
              <div className="text-sm">Jumping</div>
              <div className="text-lg">52</div>
              <div className="text-sm">Stamina</div>
              <div className="text-lg">67</div>
              <div className="text-sm">Strength</div>
              <div className="text-lg">35</div>
              <div className="text-sm">Aggression</div>
              <div className="text-lg">59</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-lg">Back</div>
        <div className="text-lg">Change Position</div>
        <div className="text-lg">Change Player</div>
        <div className="text-lg">Show Legend</div>
      </div>
    </div>
  );
};

export default PlayerCard;
