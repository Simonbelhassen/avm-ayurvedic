import axios from "axios";
import { IDoctor } from "@/types";

const axiosInstance = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_API_URL}/doctor/auth`,
   headers: {
      "Content-Type": "application/json",
   },
   withCredentials: true,
});
axiosInstance.interceptors.response.use((response: any) => {
   if (response.data.accessToken) {
      const auth = JSON.parse(localStorage.getItem("auth") || "{}");
      auth.doctorToken = response.data.accessToken;
      localStorage.setItem("auth", JSON.stringify(auth));
   }
   return response;
});

export const signUpDoctor = async (doctor: IDoctor) => {
   const response = await axiosInstance.post("/", doctor);
   return response.data;
};

export const signInDoctor = async (email: string, password: string) => {
   const response = await axiosInstance.post("/signin", { email, password });
   return response.data;
};

export const validateOtpDoctor = async (email: string, otp: number) => {
   const response = await axiosInstance.post("/otp-verification", { email, otp });
   return response.data;
};

export const logoutDoctor = async () => {
   const response = await axiosInstance.post("/logout");
   return response.data;
};

export const getPresignedUrlDoctor = async (id: string) => {
   const response = await axiosInstance.get(`/upload-url?id=${id}`);
   return response.data;
};

export const updateProfileImage = async (key: string, id: string) => {
   const response = await axiosInstance.post("/upload-url", { key, id });
   return response.data;
};