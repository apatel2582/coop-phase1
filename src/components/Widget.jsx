export default function Widget() {
  return (
    <div className="p-4 bg-zinc-800 text-white w-full">
      <div className="flex items-center">
        <img
          src="https://placehold.co/100x100"
          alt="Player Image"
          className="rounded-full mr-4"
        ></img>
        <div>
          <h2 className="text-2xl font-bold">Emirhan Ilkhan</h2>
          <p>Age: 18</p>
          <p>
            Position: <span className="text-green-400">CM</span>
          </p>
          <p>
            Overall Rating: <span className="text-yellow-400 text-2xl">64</span>
          </p>
          <p>Preferred Foot: Right</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Attacking Midfielder (CAM)</h3>
        <p className="text-green-400">Change Position: CAM</p>
        <p className="text-yellow-400">Form: Okay</p>
        <p>
          Development plans have regular growth when a player is in average
          form.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Pace</h4>
          <p className="text-yellow-400 text-2xl">69</p>
          <div className="mt-2">
            <p>Sprint Speed: 69</p>
            <p>Acceleration: 69</p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Shooting</h4>
          <p className="text-yellow-400 text-2xl">59</p>
          <div className="mt-2">
            <p>Finishing: 59</p>
            <p>Att. Position: 65</p>
            <p>Shot Power: 62</p>
            <p>Long Shots: 61</p>
            <p>Penalties: 50</p>
            <p>Volleys: 48</p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Passing</h4>
          <p className="text-yellow-400 text-2xl">62</p>
          <div className="mt-2">
            <p>Vision: 68</p>
            <p>Crossing: 54</p>
            <p>FK Acc.: 52</p>
            <p>Long Pass: 63</p>
            <p>Short Pass: 67</p>
            <p>Curve: 59</p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Dribbling</h4>
          <p className="text-green-400 text-2xl">71</p>
          <div className="mt-2">
            <p>Agility: 74</p>
            <p>Balance: 76</p>
            <p>Reactions: 54</p>
            <p>Composure: 63</p>
            <p>Ball Control: 69</p>
            <p>Dribbling: 74</p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Defending</h4>
          <p className="text-red-400 text-2xl">49</p>
          <div className="mt-2">
            <p>Interceptions: 50</p>
            <p>Heading Acc.: 49</p>
            <p>Def. Aware: 45</p>
            <p>Stand Tackle: 55</p>
            <p>Slide Tackle: 50</p>
          </div>
        </div>
        <div className="border p-4 rounded-md">
          <h4 className="text-lg font-semibold">Physical</h4>
          <p className="text-red-400 text-2xl">48</p>
          <div className="mt-2">
            <p>Jumping: 52</p>
            <p>Stamina: 67</p>
            <p>Strength: 35</p>
            <p>Aggression: 59</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Skills</h4>
        <p>
          Skill Moves: <span className="text-yellow-400">★★★</span>
        </p>
        <p>
          Weak Foot: <span className="text-yellow-400">★★★</span>
        </p>
        <p>Attacking Work Rate: High</p>
        <p>Defensive Work Rate: Medium</p>
      </div>
    </div>
  );
}
