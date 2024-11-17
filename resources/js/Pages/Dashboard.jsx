import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Banner from "@/Components/Banner";
import Calender from "@/Components/Calender";
import Button from "@/Components/Button";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full h-[80vh] mx-auto sm:px-6 lg:px-8">
                <Banner />
            </div>
            <section className="w-full flex justify-evenly h-[600px] items-center mt-40">
                <div>
                    <h2 className="text-8xl">update <br /> Kondisi</h2>
                    <p className="mb-10 text-2xl">update kondisi kesehatan kamu</p>
                    <Button>Update Kondisi</Button>
                </div>
                <img src="/cekkesehatan.jpg" className=" w-[700px]" alt="" />
            </section>
            <section className="flex justify-center gap-20">
                <div className="flex items-center gap-10">
                    <h5 className="text-4xl">Rekomendasi <br/> asupan</h5>
                    <img src="https://img.freepik.com/free-vector/eating-dessert-concept-illustration_114360-22753.jpg?t=st=1731748381~exp=1731751981~hmac=2711cc4ad49f3351e2ddf091bbd1826bd77f08f948f572c1a0bcaa67f9554d21&w=826" className=" w-[200px] rounded-2xl" alt="" />
                </div>
                <div className="flex items-center gap-10">
                    <h5 className="text-4xl">Rekomendasi <br/> aktivitas</h5>
                    <img src="https://img.freepik.com/free-vector/people-running-while-wearing-medical-masks_52683-38808.jpg?t=st=1731748535~exp=1731752135~hmac=019fdc76a973c401729e9d48bf38edadaac37ebbff8e9e356d574b65ad287e8e&w=1380" className=" w-[400px] rounded-2xl" alt="" />
                </div>
            </section>
            <section className="flex flex-col items-center w-full h-screen py-20 justify-evenly lg:flex-row">
                <div className="px-40 py-20 ">
                    <h2 className="text-5xl ">Teraphy</h2>
                    <p className="mb-10 text-3xl ">make oppointment</p>
                    <Button>Make oppoinment</Button>
                </div>
                <div className="w-1/2 ">
                    <Calender />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
