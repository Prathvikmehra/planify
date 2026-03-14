import { useTasks } from './taskContext'

export function ProgressTracker() {
  const { stats, loading } = useTasks()
  
  // Prevent division by zero
  const total = stats?.totalTasks || 0
  const completed = stats?.completedTasks || 0
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  if (loading && total === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mb-8 animate-pulse">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mb-8">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Your Progress</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {completed} of {total} tasks completed
          </p>
        </div>
        <span className="text-2xl font-black text-violet-600 dark:text-violet-400">
          {percentage}%
        </span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        {/* Progress Bar Fill */}
        <div 
          className="bg-violet-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      {percentage === 100 && total > 0 && (
        <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-3 flex items-center gap-1">
          <span>🎉</span> Amazing job! You've crushed all your tasks!
        </p>
      )}
    </div>
  )
}
