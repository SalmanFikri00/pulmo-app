import React, { useState } from "react";
import axios from "axios";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Components/Sidebar";

const LungCancerDetection = ({ auth }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(" ");
    const [prediction, setPrediction] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) { // Tambahkan pengecekan `e.target.files`
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile)); // Buat preview
            setPrediction(null); // Reset prediction when a new file is uploaded
        }
    };

    const handleReset = async () => {
        window.location.reload();
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/predict",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setPrediction(response.data.prediction);
            console.log(response.data.prediction);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to get prediction.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Authenticated user={auth.user}>
            <div className="flex">
                <Sidebar user={auth.user} />
                <div className="flex flex-col items-center justify-center w-screen h-screen ">
                    <h1 className="text-3xl font-extrabold text-text md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Lung Cancer
                        </span>
                        Detection
                    </h1>
                    <div className="flex w-[90vw] max-w-[500px] min-h-[500px] rounded-lg mt-5 justify-between items-center">
                        <div
                            className={`flex items-center justify-center w-full overflow-hidden custom-transition`}
                        >
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                            >
                                <div className="flex flex-col items-center justify-center px-10 pt-10 pb-6">
                                    {preview.length > 1 ? (
                                        <>
                                            <img
                                                src={preview}
                                                alt=""
                                                className="w-full mb-5 "
                                            />
                                            {!prediction ? (
                                                <>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">
                                                            Click to change
                                                        </span>{" "}
                                                        or drag and drop
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        PNG or JPG (MAX.
                                                        800x400px)
                                                    </p>
                                                </>
                                            ) : (
                                                <div>
                                                    <h2 className="text-xl ">
                                                        Result:
                                                    </h2>
                                                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                                        {prediction}
                                                    </h3>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PNG or JPG (MAX. 800x400px)
                                            </p>
                                        </>
                                    )}
                                </div>
                                {prediction ? (
                                    ""
                                ) : (
                                    <input
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                    />
                                )}
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-8 ">
                        {!prediction ? (
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                disabled={!file || isLoading}
                                onClick={handleUpload}
                            >
                                {isLoading
                                    ? "Loading..."
                                    : "Upload and Predict"}
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default LungCancerDetection;
