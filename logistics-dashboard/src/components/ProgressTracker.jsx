export default function ProgressTracker({ shipment }) {
  return (
    <div className="flex items-center">
      {shipment.steps.map((step, i) => {
        const isDone = i <= shipment.currentStep;

        return (
          <>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                ${isDone ? "bg-green-600 text-white" : "border-2 border-gray-400"}`}
              >
                {isDone ? "✓" : ""}
              </div>

              <p className="text-sm mt-2">{step.label}</p>
              <p className="text-xs text-gray-500">{step.date}</p>
            </div>

            {i < shipment.steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2
                ${i < shipment.currentStep ? "bg-green-600" : "bg-gray-300"}`}
              />
            )}
          </>
        );
      })}
    </div>
  );
}