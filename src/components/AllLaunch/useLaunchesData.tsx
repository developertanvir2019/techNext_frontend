import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook for fetching launches data
export function useLaunchesData() {
  interface LaunchData {
    flight_number: number;
    launch_date_local: string;
    links: {
      mission_patch_small: string;
    };
    mission_name: string;
    rocket: {
      rocket_name: string;
    };
    launch_success: boolean;
  }

  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState<LaunchData[]>([]);

  useEffect(() => {
    const fetchLaunchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/launches"
        );
        setLaunches(response?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchLaunchData();
  }, []);

  return { loading, launches };
}
