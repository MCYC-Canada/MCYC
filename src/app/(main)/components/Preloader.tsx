// components/Preloader.tsx
export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-brown-600"></div>
    </div>
  );
}
