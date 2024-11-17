import Sidebar from "@/Components/Sidebar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const Riwayat = ({auth}) => {
    return (
        <Authenticated user={auth.user}>
            <div className="flex">
                <Sidebar user={auth.user}/>
                <main>
                    <section>
                        <h2 className="text-5xl text-text">Riwayat Saya</h2>
                        <div>
                            <h3 className="my-5 text-2xl ">
                                Riwayat Hasil tes
                            </h3>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tanggal
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white even:bg-gray-50 ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            1
                                        </th>
                                        <td className="px-6 py-4">1 oktober 2024</td>
                                        <td className="px-6 py-4">checking healty</td>
                                        <td className="px-6 py-4">$99</td>
                                        <td className="px-6 py-4">
                                            <a
                                                href="#"
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                Details
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b odd:bg-white even:bg-gray-50 ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            2
                                        </th>
                                        <td className="px-6 py-4">10 oktober 2024</td>
                                        <td className="px-6 py-4">checking healty</td>
                                        <td className="px-6 py-4">$99</td>
                                        <td className="px-6 py-4">
                                            <a
                                                href="#"
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Details
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        </div>
                    </section>
                </main>
            </div>
        </Authenticated>
    );
};

export default Riwayat;
