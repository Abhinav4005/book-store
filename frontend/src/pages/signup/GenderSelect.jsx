const GenderSelect = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex items-center">
            <label className="inline-flex items-center mr-6 cursor-pointer">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                />
                <span className={`h-4 w-4 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2 transition duration-300 ${selectedGender === "male" ? "border-blue-500 bg-blue-500" : ""}`}>
                    <svg className="h-3 w-3 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                </span>
                <span className={`text-sm font-medium text-gray-700 ${selectedGender === "male" ? "text-blue-500" : ""}`}>Male</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                />
                <span className={`h-4 w-4 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2 transition duration-300 ${selectedGender === "female" ? "border-pink-500 bg-pink-500" : ""}`}>
                    <svg className="h-3 w-3 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                </span>
                <span className={`text-sm font-medium text-gray-700 ${selectedGender === "female" ? "text-pink-500" : ""}`}>Female</span>
            </label>
        </div>
    );
};

export default GenderSelect;
