import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Footer from "../components/Footer/Footer";

const Current = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <div className="current">
        <Navbar />
        <div style={{ height: "750px", marginTop: "20px" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl="/current.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Current;
