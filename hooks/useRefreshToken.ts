import { useAppDispatch } from "@/store";
import { apiCaller } from "@/utils/apiCaller";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function useRefreshToken() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const refresh = async () => {
    try {
      const response = await apiCaller.get("/user/refresh");
      console.log(response);

      return response.data;
    } catch (error: any) {
      console.log(error, "ttrt");

      if (error?.response?.status === 403) {
        router.push("/signin");
      }
    }
  };
  return refresh;
}
