"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PageLoading from "./components/loader/PageLoading";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/search");
  });

  return <PageLoading />;
}
