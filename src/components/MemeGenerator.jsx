import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";

function MemeGenerator() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextX, setTopTextX] = useState(50);
  const [topTextY, setTopTextY] = useState(10);
  const [bottomTextX, setBottomTextX] = useState(50);
  const [bottomTextY, setBottomTextY] = useState(90);
  const [topTextColor, setTopTextColor] = useState("#ffffff");
  const [bottomTextColor, setBottomTextColor] = useState("#ffffff");
  const [topTextFont, setTopTextFont] = useState("sans-serif");
  const [bottomTextFont, setBottomTextFont] = useState("sans-serif");
  const [errorMessage, setErrorMessage] = useState("");

  const MAX_WIDTH = 500;
  const MAX_HEIGHT = 500;

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const img = new Image();

      img.onload = () => {
        if (img.width > 0 && img.height > 0) {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const aspectRatio = img.width / img.height;
          if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
            if (aspectRatio > 1) {
              canvas.width = MAX_WIDTH;
              canvas.height = MAX_WIDTH / aspectRatio;
            } else {
              canvas.height = MAX_HEIGHT;
              canvas.width = MAX_HEIGHT * aspectRatio;
            }
          } else {
            canvas.width = img.width;
            canvas.height = img.height;
          }

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          setImage(canvas.toDataURL());
          setErrorMessage("");
        } else {
          setErrorMessage("Invalid image dimensions. Please try another image.");
        }
      };

      img.onerror = () => {
        setErrorMessage("Invalid image file. Please upload a valid image.");
      };

      const reader = new FileReader();
      reader.onload = () => {
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    },
  });

  const downloadMeme = () => {
    const memeContainer = document.getElementById("memeContainer");
    html2canvas(memeContainer).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "meme.png";
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Meme Generator 🎨
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upload Image</h2>
          <div
            {...getRootProps()}
            className="w-full h-40 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition"
          >
            <input {...getInputProps()} />
            <p className="text-gray-500 text-lg">
              Drag & drop an image here, or click to upload
            </p>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Top Text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Position Controllers */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-600 mb-4">
              Position Controllers
            </h3>
            <div className="space-y-4">
              {/* Top Text Position */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Top Text X Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={topTextX}
                  onChange={(e) => setTopTextX(e.target.value)}
                  className="w-full"
                />
                <span>{topTextX}</span>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Top Text Y Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={topTextY}
                  onChange={(e) => setTopTextY(e.target.value)}
                  className="w-full"
                />
                <span>{topTextY}</span>
              </div>

              {/* Bottom Text Position */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Bottom Text X Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bottomTextX}
                  onChange={(e) => setBottomTextX(e.target.value)}
                  className="w-full"
                />
                <span>{bottomTextX}</span>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Bottom Text Y Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bottomTextY}
                  onChange={(e) => setBottomTextY(e.target.value)}
                  className="w-full"
                />
                <span>{bottomTextY}</span>
              </div>
            </div>
          </div>

          {/* Text Color and Font Style Controllers */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-600 mb-4">
              Text Styling
            </h3>
            <div className="space-y-4">
              {/* Top Text Color */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Top Text Color</label>
                <input
                  type="color"
                  value={topTextColor}
                  onChange={(e) => setTopTextColor(e.target.value)}
                  className="w-16"
                />
              </div>

              {/* Bottom Text Color */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Bottom Text Color</label>
                <input
                  type="color"
                  value={bottomTextColor}
                  onChange={(e) => setBottomTextColor(e.target.value)}
                  className="w-16"
                />
              </div>

              {/* Top Text Font */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Top Text Font</label>
                <select
                  value={topTextFont}
                  onChange={(e) => setTopTextFont(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="sans-serif">Sans Serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="cursive">Cursive</option>
                </select>
              </div>

              {/* Bottom Text Font */}
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Bottom Text Font</label>
                <select
                  value={bottomTextFont}
                  onChange={(e) => setBottomTextFont(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="sans-serif">Sans Serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="cursive">Cursive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Meme Preview Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meme Preview</h2>
          {image ? (
            <div
              id="memeContainer"
              className="relative w-full max-w-md bg-gray-100 overflow-hidden rounded-lg shadow-md"
              style={{ width: MAX_WIDTH, height: MAX_HEIGHT }}
            >
              <img
                src={image}
                alt="meme"
                className="absolute w-full h-full object-contain"
              />
              <div
                className="absolute font-bold text-3xl"
                style={{
                  top: `${topTextY}%`,
                  left: `${topTextX}%`,
                  transform: "translate(-50%, -50%)",
                  color: topTextColor,
                  fontFamily: topTextFont,
                }}
              >
                {topText}
              </div>
              <div
                className="absolute font-bold text-3xl"
                style={{
                  bottom: `${bottomTextY}%`,
                  left: `${bottomTextX}%`,
                  transform: "translate(-50%, 50%)",
                  color: bottomTextColor,
                  fontFamily: bottomTextFont,
                }}
              >
                {bottomText}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-lg">Your meme preview will appear here.</p>
          )}
          {image && (
            <button
              onClick={downloadMeme}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Download Meme
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
