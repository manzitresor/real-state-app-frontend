interface ProgressBarProps {
  progress: number // Value between 0 and 100
  className?: string
}

export default function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100)

  return (
    <div className={`w-28 bg-gray-400 rounded-full h-1 mb-4 dark:bg-gray-700 ${className}`}>
      <div
        className="bg-white h-1 rounded-full dark:bg-blue-500 transition-all duration-300"
        style={{ width: `${normalizedProgress}%` }}
        role="progressbar"
        aria-valuenow={normalizedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
