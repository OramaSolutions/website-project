const RotatingBorderDot = () => {
  return (
    <div className="relative w-24 h-24 ">
      {/* Circle Border */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-500" />

      {/* Rotating Dot */}
      <div className="absolute inset-0 animate-spin">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full" />
      </div>
    </div>
  );
};

export default RotatingBorderDot;
