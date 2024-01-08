import React from "react";
import SliderComponent from "./SliderComponent";

const SliderSelect = ({ data, setData }) => {
    return (
        <div>
            <SliderComponent
                onChange={(e, value) => {
                    setData({
                        ...data,
                        billValue: value.toFixed(0),
                    });
                }}
                defaultValue={data.billValue}
                min={100}
                max={1000}
                steps={50}
                unit="$"
                amount={data.billValue}
                label="TNB Bill Amount"
                value={data.billValue}
            />
        </div>
    );
};

export default SliderSelect;