import { Slider } from "@/components/ui/slider"

const RangeSlider = () => {
    return (
        <div className="relative mb-6 w-9/12">
            <Slider defaultValue={[2]} max={4} step={1} />
            <span className="text-sm text-gray-500 absolute start-0 -bottom-6">300m</span>
            <span className="text-sm text-gray-500 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">500m</span>
            <span className="text-sm text-gray-500 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">1000m</span>
            <span className="text-sm text-gray-500 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2000m</span>
            <span className="text-sm text-gray-500 absolute end-0 -bottom-6">3000m</span>
        </div>
    );
}
export { RangeSlider }