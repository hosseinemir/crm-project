import CustomerEditPage from "@/components/template/CustomerEditPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CustomerEdit() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));

    }
  }, [isReady , customerId]);
 if(data) return <CustomerEditPage data={data} id={customerId}/>;
}
