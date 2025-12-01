"use client";

import { getSalesData, getToken } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DashBoard = () => {
  const [filters, setFilters] = useState({});
  const { data: tokenData, isLoading } = useQuery(["token"], getToken);
  const token = tokenData?.token;

  // getSalesData
  const { data: salesData, isLoading: salesLoading } = useQuery(
    ["sales", token, filters],
    () => getSalesData(token, filters),
    { enabled: !!token, keepPreviousData: true }
  );
  return (
    <div>
      <h1>Sales Dashboard</h1>
    </div>
  );
};

export default DashBoard;
