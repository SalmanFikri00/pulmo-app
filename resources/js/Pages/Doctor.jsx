import Button from "@/Components/Button";
import Sidebar from "@/Components/Sidebar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const Docktor = ({ auth }) => {
    return (
        <Authenticated
            user={auth.user}
        >
            <div className="flex">
                <Sidebar user={auth.user} />
                <div className="flex items-center w-full justify-evenly">
                    <div className="p-10 ">
                        <h1 className="text-5xl">Welcome Docktor</h1>
                        <p>Check Your Schedule Time</p>
                        <div className="py-10 ">
                            <a href="/jadwal">
                                <Button>Check Schedule</Button>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img className="rounded-l-3xl" src="https://img.freepik.com/free-vector/patient-taking-medical-examination_23-2148856832.jpg?t=st=1731758280~exp=1731761880~hmac=1ddf2c3c5a0e26ffb913e8ab294bc9d9b5cc748831685de4dffb9c6b5ec43e09&w=1060" alt="" />
                    </div>
                </div>

            </div>
        </Authenticated>
    );
};

export default Docktor;
