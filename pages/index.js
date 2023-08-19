import Customer from "@/model/Customer";
import connectDB from "../utils/connectDB";
import HomePage from "@/components/template/HomePage";

export default function Home({ customers }) {
  return (
    <>
      <HomePage customers={customers} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customer = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customer)),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
