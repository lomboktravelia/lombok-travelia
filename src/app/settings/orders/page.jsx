"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Spinner,
} from "@nextui-org/react";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const getOrders = async () => {
    try {
      const response = await fetch(`/api/users/orders`);
      const data = await response.json();

      const ordersWithItems = await Promise.all(
        data.map(async (order) => {
          const orderItemsResponse = await fetch(
            `/api/paket-tour?id=${order?.id_tour}`
          );
          const { data: orderItems } = await orderItemsResponse.json();
          console.log(orderItems);
          return { ...order, items: orderItems };
        })
      );

      setOrders(ordersWithItems);
      console.log(ordersWithItems);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  if (!orders)
    return (
      <>
        <h1 className="text-4xl font-semibold pb-4">Order History</h1>
        <Card className="min-h-screen bg-white dark:bg-black flex justify-center items-center">
          <Spinner
            style={{ borderTopColor: "#35D235", borderRightColor: "#35D235" }}
          />
        </Card>
      </>
    );

  return (
    <>
      <h1 className="text-4xl font-semibold pb-4">Order History</h1>
      <Card className="p-4 min-h-screen flex gap-4">
        {orders
          ? orders.map((order, index) => {
              console.log("Order", order);
              return (
                <Card key={index}>
                  <CardHeader className="flex gap-2">
                    <HiOutlineShoppingBag />
                    {moment(order?._created_date).format("DD MMMM YYYY")}
                    {order?.status === "pending" ? (
                      <Chip
                        color="warning"
                        radius="sm"
                        className="text-amber-900 text-sm"
                      >
                        Pending
                      </Chip>
                    ) : (
                      <Chip color="default">Warning</Chip>
                    )}
                  </CardHeader>
                  <Divider />
                  <CardBody className="flex flex-row gap-4">
                    <div
                      style={{
                        position: "relative",
                        width: `200px`,
                        height: `100px`,
                      }}
                      className="hidden sm:block"
                    >
                      <Image
                        alt="Card background"
                        className="rounded-xl object-cover "
                        src={order?.items?.picture}
                        fill={true}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold">
                        {order?.items?.nama_paket}
                      </p>
                      <p className="text-sm font-extralight">
                        {order?.items?.jenis_paket}
                      </p>
                    </div>
                    <div className=" hidden md:block">
                      <Divider orientation="vertical" />
                    </div>
                    <div className=" hidden md:flex md:flex-col justify-center">
                      <p className="text-sm font-extralight">Total Belanja</p>
                      <p className="text-md font-bold">
                        {formatRupiah(order?.amount)}
                      </p>
                    </div>
                  </CardBody>
                  <div className="flex justify-between px-3 pb-3">
                    <div>
                      <div className="block md:hidden">
                        <p className="text-sm font-extralight">Total Belanja</p>
                        <p className="text-md font-bold">
                          {formatRupiah(order?.amount)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                      <a
                        href=""
                        className="font-bold text-green-600 hidden sm:block"
                      >
                        Lihat Detail
                      </a>
                      <Button color="success" className="text-white">
                        Beli Lagi
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })
          : null}
      </Card>
    </>
  );
};

export default Orders;
