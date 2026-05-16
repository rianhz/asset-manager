export default function LoadingSpinner({ fill = '#3498db' }) {
  return (
    <div className={`h-6 w-6 animate-spin rounded-full border-4 border-solid border-[${fill}] border-t-transparent`}></div>
  );
};