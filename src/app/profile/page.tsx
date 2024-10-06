"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState } from "react";

// Define the props for the component
interface DropdownProps {
  label: string;
  options: string[];
}

function Dropdown({ label, options }: DropdownProps) {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="my-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="">-- Select --</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function CheckboxGroup({ label, options }: { label: string; options: string[] }) {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (option: string) => {
    setChecked((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div className="my-4">
      <h3 className="mb-2 text-sm font-medium">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option, idx) => (
          <label key={idx} className="flex items-center">
            <input
              type="checkbox"
              checked={!!checked[option]}
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const interests = ["Organic Produce", "Meal Kits", "Snacks", "Dairy Products", "Bakery Items"];

  return (
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-5">
      <div className="col-span-4 px-6 lg:px-0 lg:pt-5">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full" /> {/* Profile Image */}
            <div>
              <h1 className="text-2xl font-semibold">Simon Zhao</h1>
              <button className="text-blue-500 text-sm">Edit Profile</button>
            </div>
          </div>

          {/* Section: About You */}
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-medium mb-4">About You</h2>
            <Dropdown label="How often do you eat greens?" options={["Daily", "Weekly", "Occasionally", "Never"]} />
            <Dropdown label="Dairy preferences" options={["Milk", "Yogurt", "Cheese", "None"]} />
            <Dropdown label="Dietary Restrictions" options={["Vegan", "Vegetarian", "Gluten-Free", "None"]} />
          </div>

          {/* Section: Produce Preferences */}
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-medium mb-4">Produce Preferences</h2>
            <CheckboxGroup
              label="Types of Produce"
              options={["Leafy Greens", "Root Vegetables", "Fruits", "Herbs", "Organic"]}
            />
            <CheckboxGroup
              label="Preferred Dairy Orders"
              options={["Milk", "Cheese", "Yogurt", "Butter"]}
            />
          </div>

          {/* Section: Interests */}
          <div>
            <h2 className="text-xl font-medium mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, idx) => (
                <button key={idx} className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
